---
title: Porting the Dark backend
---

The big project at the moment is the replatform, moving the Dark backend from
OCaml to F#. The motivation for this is to give us access to a richer ecosystem
of libraries to build Dark on, especially cloud libraries. This is described
more in a set of blog posts:

- [https://blog.darklang.com/leaving-ocaml/](https://blog.darklang.com/leaving-ocaml/)
- [https://blog.darklang.com/new-backend-fsharp/](https://blog.darklang.com/new-backend-fsharp/)
- [https://blog.darklang.com/why-dark-didnt-choose-rust/](https://blog.darklang.com/why-dark-didnt-choose-rust/)

## Porting standard library functions

Dark's standard library functions need to be ported from OCaml to F#. At last
count there were 267 functions that needed porting, in addition to the 207
already ported.

You can get a list of the standard library functions that need porting by
running:

`cat fsharp-backend/src/*/StdLib/*.fs | grep "//" | perl -n -e 'foreach ($_ =~ /name = fn "([A-Za-z0-9]+)" "([A-Za-z0-9]+)" (\d)/ ) { print "$1::$2_v$3\n" } ' | sort | uniq`

When porting a function, start by finding the commented out version of it (in
`fsharp-backend/src/LibExecution/StdLib` or
`fsharp-backend/src/LibBackend/StdLib`). The original OCaml code has been
preprocessed in bulk to closely match the intended F# code, so once you
uncomment it, there should only be a small amount of work to port it over.

### Ply

The functions in OCaml were written to not function concurrently, while the F#
version is designed to run concurrently. The major difference here is that the
OCaml backend returns a `Dval` (a Dark value), while the F# version returns a
`Ply<Dval>`.

For most simple functions that do no IO, a `Ply` just wraps a `Dval`.
For example, compare the original OCaml version of `Int::add_v0`:

```ocaml
  ; { prefix_names = ["Int::add"]
    ; infix_names = ["+"]
    ; parameters = [par "a" TInt; par "b" TInt]
    ; return_type = TInt
    ; description = "Adds two integers together"
    ; func =
        InProcess
          (function
          | _, [DInt a; DInt b] ->
              DInt (Dint.( + ) a b)
          | args ->
              fail args)
    ; preview_safety = Safe
    ; deprecated = false }
```

to the F# version

```fsharp
    { name = fn "Int" "add" 0
      parameters = [ Param.make "a" TInt ""; Param.make "b" TInt "" ]
      returnType = TInt
      description = "Adds two integers together"
      fn =
        (function
        | _, [ DInt a; DInt b ] -> Value(DInt(a + b))
        | _ -> incorrectArgs ())
      sqlSpec = SqlBinOp "+"
      previewable = Pure
      deprecated = NotDeprecated }
```

As you can see, the major change that was needed for the return value was to
wrap the `Dval` in a `Value`.

### Tasks

For functions that perform IO, you'll need to use the `ply` "computation expression".
A "computation expression" is a special F# language feature for writing abstractions
with a nice syntax. The `ply` CE allows using a specialized asyncronous structure
called Ply (which is extremely similar to a .Net Task) easily, and can best be
illustrated with an example:

```fsharp
  (function
  | state, [ DObj value; DStr key; DDB dbname ] ->
      uply {
        let db = state.dbs.[dbname]
        let! _id = UserDB.set state true db key value
        return DObj value
      }
  | _ -> incorrectArgs ())
```

Let's break this down line by line:

- `uply {`: this creates the CE, whose return value will be a
  `Ply<'any>`.
- `let db = state.dbs.[dbname]` - this is just regular F# code
- `let! _id = UserDB.set state true db key value` - the special thing here is
  the `let!` - this line calls `UserDB.set`, a function which returns a
  `Ply`, and unwraps the `Ply`. This means that `_id` can be
  treated as a normal value for the rest of this `taskv`.
- `return DObj value` - return takes an ordinary value and turns it into a
  `TaskOrValue`, in this case a `TaskOrValue<Dval>`.

Why do we go through all this trouble? Because this is an async runtime, and
`let!` and `return` are the enablers of the asyncronicity. A `TaskOrValue` is a
promise, and `let!` waits for the promise and then continues (running other code
while the IO is still pending). This is the exact same as the `async` keyword in
JS, Rust, C# or Python.

### Callbacks to the Interpreter

You'll also need this for first-class functions like `List::map_v0`, as they may
be used to call functions which return Tasks. Here is an example of this:

```fsharp
    { name = fn "List" "map" 0
      parameters =
        [ Param.make "list" (TList varA) "The list to be operated on"
          Param.make
            "fn"
            (TFn([ varA ], varB))
            "Function to be called on each member" ]
      description =
        "Returns a list created by the elements of `list` with `fn` called on each of them in order"
      returnType = TList varB
      fn =
        (function
        | state, [ DList l; DFnVal b ] ->
            taskv {
              let! result =
                map_s
                  (fun dv ->
                    LibExecution.Interpreter.applyFnVal
                      state
                      (id 0)
                      b
                      [ dv ]
                      NotInPipe
                      NoRail)
                  l

              return Dval.list result
            }
        | _ -> incorrectArgs ())
      sqlSpec = NotYetImplementedTODO
      previewable = Pure
      deprecated = NotDeprecated }
```

This runs `map_s`, which applies the function to the list of arguments (`map_s`
is short for map sequentially, which completes each previous task before
starting the next one). `applyFnVal` calls the interpreter to run the passed in
function, which might return a Task.

### New types

The F# port also creates the ability to add type checking to Dark. Rather than
using a non-nested type like `TResult`, we use `TResult(DType, DType)` to
indicate the types used in the `Ok` and `Error` constructors used by Result. The
definition of a type has switched from this in OCaml:

```ocaml
module RuntimeT = struct
  type tipe = Serialization_format.tipe =
    | TAny
    | TInt
    | TFloat
    | TBool
    | TNull
    | TDeprecated1
    | TStr
    | TList
    | TObj
    | TIncomplete
    | TError
    | TBlock
    | TResp
    | TDB
    | TDate
    | TDbList of tipe
    | TPassword
    | TUuid
    | TOption
    | TErrorRail
    | TCharacter
    | TResult
    | TUserType of string * int
    | TBytes
```

to this in F#:

```fsharp
and DType =
  | TAny
  | TInt
  | TFloat
  | TBool
  | TNull
  | TStr
  | TList of DType
  | TDict of DType
  | TIncomplete
  | TError
  | TLambda
  | THttpResponse of DType
  | TDB of DType
  | TDate
  | TChar
  | TPassword
  | TUuid
  | TOption of DType
  | TErrorRail
  | TUserType of string * int
  | TBytes
  | TResult of DType * DType
  | TVariable of string
  | TFn of List<DType> * DType
  | TRecord of List<string * DType>
```

All of the polymorphic types like `List`, `Option`, and `Result` now take type
arguments.

Note in particular that it is possible to accurately provide types for
first-class functions, as opposed to `TLambda` which we used before. For
example, `(TFn([ TVariable "a" ], TVariable "b"))` means "this parameter takes a
function with one argument, which can be any type (we'll call it "a") and
returns any type (we'll call it "b"). Any name in a `TVariable` can then be
reused in the return type, such as `TList (TVariable "b")`, above.

## Concerns when porting

The most important thing when porting code over is to keep the exact same
behaviour between the old code and the new code. For example, that's why we're
porting deprecated functions, including those with known bugs or bad behaviour.

In particular, we often have multiple copies of a function because the old one
handled `DIncomplete` incorrectly and the new one handles it properly. If you
see something like `Dval.of_list`, pay special care to replace it with the new
equivalent (in this case, `Dval.list`), so as to handle these edge cases
properly.

## Tests

Many of the tests have been ported over already, and are commented out waiting
for their function to be implemented. You can find commented out tests for
functions using:

`cat fsharp-backend/tests/testfiles/*.tests | grep -v '^\[' | grep "^\/\/" | perl -n -e 'foreach ($_ =~ /([A-Za-z0-9]+)\.([A-Za-z0-9]+_v\d)/ ) { print "$1::$2\n" } ' | grep -v Test | sort | uniq`

That said, functions can never have enough tests, so if you think the existing
tests aren't adequate, feel free to add more. If you aren't sure of the expected
behaviour, run it on your canvas on `darklang.com`.

## Porting APIs

There are many APIs that need to be ported - these are used by the editor. The
APIs that need to still be implemented are commented out at the bottom of
[`ApiServer/Api.fs`](https://github.com/darklang/dark/blob/main/fsharp-backend/src/ApiServer/Api.fs#L478).

These are implemented in two parts:

- adding types to Api.fs which have the expected shape (you can find the shape
  in
  [`Analysis.ml`](https://github.com/darklang/dark/blob/main/backend/libbackend/analysis.ml))
- directly porting the OCaml code that back those functions

Look at existing examples for how to do this, especially for how to port SQL
calls from OCaml to Dark.

## Other work to be done

The remainder of the work is bring tracked in the issue tracker under the
[F# label](https://github.com/darklang/dark/issues?q=is%3Aopen+is%3Aissue+label%3Af%23).

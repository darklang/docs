---
title: F# for Darklang developers
---

This guide aims to introduce you to enough F# contribute to Darklang, assuming
you already know Darklang.

## Some simple F\# code

Darklang and F# are very similar. Here's an example function in F#:

```fsharp
let someFunction (intArgument : int) : string =
  let aString = "myString"
  let anInt = 65 + intArgument
  let aFloat = 6.72
  anotherFunction aString anInt aFloat
```

This is a function called `someFunction`, which takes one argument, an `int`
called `intArgument`, and returns a `string`. Three variables are defined in the
body, first a string, then an int, then a float, and finally we call the
`anotherFunction` function with all three parameters as arguments.

In Darklang this would be written:

```fsharp
someFunction
  intArgument : Int
  ↪ String

let aString = "myString"
let anInt = 65 + intArgument
let aFloat = 6.72
anotherFunction aString anInt aFloat
```

## Darklang vs F\#

Darklang and F# are all influenced by OCaml. Though Darklang is currently a
subset of these languages, Darklang will continue to grow some more of their
features. We'll discuss the similarities and differences as we go through
language features.

### Types

F# is a strongly typed-languages. Darklang aspires to be, but it doesn't have a
type-checker yet. This shows the biggest difference in between working in these
languages, that the compiler will refuse to compile if the types are wrong.

F# has type-inference, which means that the compiler will try and figure out
what the types are. Usually type errors actually contain useful information, but
they need to be read very carefully to find it.

We've found the best way to debug incorrect types is to add type annotations to
everything. We add them to all functions (we didn't always do this, but we do
now, but we are now), including all parameters and return types (see
[example](#functions) below).

In F#, you can actually add types in many places where they aren't required,
such as variable definitions:

```fsharp
let y = 6.7
let (x : int) = 6
x + 5
```

`x` here, despite being a normal variable definition, has a type signature. F#
allows this in many places, and it's useful for tracking down these errors.

We'll discuss declaring types below.

### Functions

Functions in F# are defined in the outer scope. Type signatures are optional but
we always use them:

```fsharp
let myFunction (arg1 : int) (arg2 : string) : string =
  if arg1 < (String.toInt arg2)
  then "just return a string"
  else arg2
```

Here, `myFunction` has two arguments, `arg1` and `arg2`, which are an `int` and
`string` respectively. It returns a `string`.

Like in Darklang, the body of a function is just an expression, and it
automatically returns the result of that expression.

(see [below](#advanced-functions) for more details on functions in F#)

### Standard library

Most of the code in Darklang uses
[Tablecloth](https://github.com/darklang/tablecloth).

Note: for implementing the standard libraries, we do not use Tablecloth as it is
still pretty new and may be in flux. Instead, we try to make sure that we use
libraries from `.NET`, FSharp.Core, or if necessary, the FSharpPlus library.

### Int

An `int` is the same in Darklang and F#, same syntax, same meaning. Note that
ints are 32-bit in F#, and 64-bit in Darklang.

```fsharp
let x = 5
x + 6
```

### Float

A `float` is the same in Darklang and F#, both of them are 64-bit floating point
numbers.

To convert from floats to ints use `Float.toInt`, or `Float.round`.

### Bool

Like in Darklang, `bool`s in F# are either `true` or `false`.

### String

Strings are Unicode in Darklang and F#. While you're unlikely to hit differences
in practice, they do actually use a different in-memory representation, with
Darklang using UTF-8, and F# using .NET's UTF-16.

```fsharp
let myString = "some string, escaping is allowed\nwhich dark doesn't support yet" in
myString
```

### String Interpolation

Darklang and F# support string interpolation. In F#:

```fsharp
let x = 6
let y = 7.8
let myString = $"some string with x: {x} and also {y}"
```

### List

Lists in Darklang and F# are almost the same. In F#, lists use `;` as
separators, like so:

```fsharp
[1; 2; 3; 4]
```

(However, F# allows separators to be omitted which the list elements are lined
up vertically, as it uses indentation as the separator).

While Darklang technically allows you to create lists that have different types
in them (which you should not do), F# emphatically does not.

To type check a list in F#, you use `List<int>`.

### Records

Records are mostly used as objects are in most languages. Like Darklang, they
only have fields, not methods, and you use functions to manipulate them.

F# uses a familiar syntax, but with `=` instead of `:`. It also allows you tes
use indentation instead of separators:

```fsharp
{
  field1 = 56
  field2 = true
  field3 = "asd"
}
```

Note that F# uses `=` to connect a field and a value, and `;` as row separator.
The types of the fields do not have to be declared.

Records are immutable, like almost everything in F#, and are updated using an
unusual syntax:

```fsharp
let x = { field1 = 56; field2 = true }
let updatedX = { x with field1 = 57 }
doSomethingWith updatedX
```

Note that records in Darklang are really dictionaries, which is why you update
them with `Dict::set`. We're trying to figure out how to split records and
dictionaries apart better in Darklang, after which they will be more like F#.

Type definitions for records look like this in F#:

```fsharp
type Person =
  {
    name : string
  ; age : int
  }
```

### Let

`let`s in F# are the same as in Darklang:

```fsharp
let x = 45
x + 23
```

`let` also allow destructing in F#, although we don't currently use that very
often.

### If

`if` statements in F# are extremely similar to Darklang, including that they
only allow `bool`s as the condition, and in their syntax.

In F#:

```fsharp
if hasAccess user
then "Welcome!"
else "Access denied"
```

### Operators

F# has some unusual operators. Most importantly, the equality operator is `=`
(that's just one equals sign), whereas in most languages it's `==` (including
Darklang). `=` is very strict equality, equivalent to `===` in languages that
have that, such as JS.

F# also has a `==` operator, but you should never use it.

F# use `<>` for inequality (`!=` in Darklang).

### Match

Darklang has a `match` statement that is very similar to F#, with slightly
different syntax. In Darklang you write:

```fsharp
match myValue
  Some x -> 5
  _ -> 6
```

while in F# you write

```fsharp
match myValue with
| Some x -> 5
| _ -> 6
```

Notice the `with` keyword, and starting the patterns with `|`.

F# also support more powerful `match`es, for example multiple patterns can match
a single branch:

```fsharp
match myValue with
| 4 | 5 | 6 -> "between 4 and 6"
| _ -> "not between 4 and 6"
```

F# also supports the `when` clause:

```fsharp
match myValue with
| Some myInt when myInt >= 4 && myInt <= 6 -> "between 4 and 6"
| _ -> "not between 4 and 6"
```

### Variants

Darklang has a handful of enums for `Option` and `Result` types: `Just`,
`Nothing`, `Ok` and `Error`. In the future we will expand this to allow
user-defined types as well.

F# supports the `Option` and `Result` types and we use them a lot. However, the
constructors for Option are named differently; both languages use: `Some` and
`None` instead of `Just` and `Nothing`.

These enums are typically called "variants". We use them frequently, especially
to represent expressions. For example in `FluidExpression.fs`:

```fsharp
type Expr =
  | EInteger of id * int64
  | EBool of id * bool
  | EString of id * string
  | EFloat of id * string * string
  | ENull of id
  | EBlank of id
  | ELet of id * string * Expr * Expr
  | EIf of id * Expr * Expr * Expr
  | EBinOp of id * string * Expr * Expr * sendToRail
  | ELambda of id * List<(analysisID * string)> * Expr
  | EFieldAccess of id * Expr * string
  | EVariable of id * string
  | EFnCall of id * string * List<Expr> * sendToRail
  | EList of id * List<Expr>
  | ERecord of id * (string * Expr) list
  | EPipe of id * List<Expr>
  | EConstructor of id * string * List<Expr>
  | EMatch of id * Expr * List<(MatchPattern * Expr)>
  | EPipeTarget of id
```

```fsharp
let expr = EInteger (id, "test")
```

To get values from them, you pattern match:

```fsharp
match expr with
| EInteger (_, str) -> str
| _ -> "not an int"
```

### Lambdas

F# supports lambdas and we use them frequently. They have a different syntax to
Darklang, F# uses:

```fsharp
list
|> List.map (fun elem -> elem + 2)
```

### Pipes

Both languages have pipes which are the same as in Darklang. In Darklang, the
passed argument goes into the first position. That is not true F#, where it goes
into the last position. As a result, we tend to put the "subject" of the
function in the pipeable position (first in Darklang, last in F#).

### Dictionaries

Dictionaries (hash-maps, etc) are called `Map` in F#.

### Unit

F# and Darklang have a `unit` type, whose only member is `()`. That's an actual
value, for example, all this is valid code:

```fsharp
let falseVar = () != () in
```

It's typically used to pass to a function which is impure but doesn't have any
meaningful arguments, such as `gid ()` (which generates IDs).

### Error handling

Typically we use `Result` or `Option`s for error handling. You'll very commonly
see something like

```fsharp
let isRailable (m : model) (name : string) =
  m.functions
  |> Functions.find name
  |> Option.map (fun fn ->
         fn.fnReturnTipe = TOption || fn.fnReturnTipe = TResult)
  |> Option.withDefault false
```

To find out if a function goes on the error rail, we search for a function,
which returns an Option. We then use a `map` to operate on the option, and
finally choose a default in case the Option returned `None`.

#### Exceptions

F# has exceptions - thought we'd like to use them less.

Unfortunately, it's hard to tell when an exception could be thrown.

### Imperative programming

F# supports imperative programming which Darklang does not support yet.

F# has mutable values that it prefers to refs (it has refs, but they're
deprecated). Mutable values are used like so:

```fsharp
let mutable myString = "old value"
myString <- "new value"
print(myString)
```

### Async/Tasks

For functions that perform IO, you'll need to use the `uply` or `task`
"computation expression". A "computation expression" is a special F# language
feature for writing abstractions with a nice syntax. The `uply` CE allows using
a specialized asynchronous structure called Ply (which is extremely similar to a
.Net Task) easily, and can best be illustrated with an example:

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

- `uply {`: this creates the CE, whose return value will be a `Ply<'any>`.
- `let db = state.dbs.[dbname]` - this is just regular F# code
- `let! _id = UserDB.set state true db key value` - the special thing here is
  the `let!` - this line calls `UserDB.set`, a function which returns a `Ply`,
  and unwraps the `Ply`. This means that `_id` can be treated as a normal value
  for the rest of this `taskv`.
- `return DObj value` - return takes an ordinary value and turns it into a
  `Ply`, in this case a `Ply<Dval>`.

Why do we go through all this trouble? Because this is an async runtime, and
`let!` and `return` are the enablers of the asynchronicity. A `Ply` is a
promise, and `let!` waits for the promise and then continues (running other code
while the IO is still pending). This is the exact same as the `async` keyword in
JS, Rust, C# or Python.

Note that while we primarily use `Ply` and `uply` inside the Interpreter, most
of our other async code use `Task` and `task`. These are interchangeable except
that Tasks are a little slower.

### Advanced functions

#### Partial application / currying

Occasionally you'll see a function called with fewer arguments than it has
parameters:

```fsharp
let myFunction (param1: int) (param2 : string) =
  ...body...

let myOtherFunction = myFunction 6
```

This is called "partial application", in that the function is only partially
called (this is often called _Currying_ in the functional language community).
This just means that some parameters are filled in, and you now have a function
which can be called with the remaining parameters:

```fsharp
let () =
  myOtherfunction "final argument"
```

This is the same as if it were defined as:

```fsharp
let myOtherFunction (param : string) =
  myFunction 6 param
```

## Darklang's codebase history

Darklang's backend was originally written in OCaml, and then ported to F# in
2021/2022. A lot of code is written the way it is because that made sense in
OCaml, especially code with the comment `// CLEANUP` in it.

Darklang's frontend was originally written in Elm, before being ported to
ReScript. It was removed in 2023.

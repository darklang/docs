---
title: OCaml for Dark developers
---

This guide aims to introduce you to enough OCaml to contribute to Dark, assuming you already know Dark.


## OCaml vs ReasonML vs Bucklescript - what's the difference?

The backend is in OCaml and the frontend is in Bucklescript. Also, something about ReasonML. What's the difference? The simplest answer is that these are all the same.

Bucklescript and OCaml are both compilers:
- the native OCaml compiler compiles programs to binaries. The backend uses native OCaml.
- the Bucklescript compiler compiles programs to JS. The editor uses Buckelscript.

ReasonML and OCaml are both syntaxes:
- ReasonML is a JS-like syntax for the OCaml language
- OCaml has a default syntax (we use this in the Dark repo for both the backend and the client)

ReasonML is also often used to refer to the community around compiling to JS using Bucklescript, and associated technologies.

Again, the simplest mental model is that all the words mean the same thing.

Specifically:
- the Dark backend uses the native OCaml compiler and the OCaml syntax
- the Dark client uses the Bucklescript compiler, and the OCaml syntax.

## Some simple OCaml code

Dark and OCaml are very similar. Here's an OCaml function:

```ocaml
let someFunction (intArgument : int) : string =
  let aString = "myString" in
  let anInt = 65 + intArgument in
  let aFloat = 6.72 in
  anotherFunction aString anInt aFloat
```

This is a function called `someFunction`, which takes one argument, an
`int` called `intArgument`, and returns a `string`. Three variables are
defined in the body, first a string, then an int, then a float, and
finally we call the `anotherFunction` function with all three
parameters as arguments.

In Dark this would be written:
```ocaml
someFunction
  intArgument : Int
  ↪ String

let aString = "myString"
let anInt = 65 + intArgument
let aFloat = 6.72
anotherFunction aString anInt aFloat
```

As you can see, apart from how the function is written, the only
difference is that `let` statements in OCaml have an `in` at the end of
the line.

## Dark vs OCaml

OCaml is a very large influence on Dark, and Dark will continue to grow some
more of OCaml's features. We'll discuss the similarities and differences as we
go through language features.

### Syntax

Since Dark doesn't let you type syntax, it doesn't have syntax errors.
OCaml has syntax errors, and the error messages are not good. I tend to
make sure that my code syntax checks by running OCamlformat in my
editor on save: if it reformats, then the syntax was good.

### Types

OCaml is a strongly typed-language. Dark aspires to be, but it doesn't
have a type-checker yet. This shows the biggest difference in working
in OCaml, that the compiler will refuse to compile if the types are
wrong.

OCaml has type-inference, which means that the compiler will try and
figure out what the types are. This is frequently the source of bad
compiler messages, often it will tell you something which seems wrong
because it guessed wrong about certain types.

Usually type errors actually contain useful information, but they need to be
read very carefully to find it.

We've found the best way to debug incorrect types is to add type annotations to
everything. We add them to all functions (we didn't always do this, but we do
now, but we are now), including all parameters and return types (see
[example](#functions) below).

You can actually add types in many places where they aren't required, such as
variable definitions:

```ocaml
let y = 6.7 in
let (x : int) = 6 in
x + 5
```

`x` here, despite being a normal variable definition, has a type
signature. OCaml allows this in many places, and it's useful for
tracking down these errors.

We'll discuss declaring types below.


### Functions

Functions in OCaml are defined in the outer scope. Type signatures are optional in OCaml
but required in the Dark codebase:

```ocaml
let myFunction (arg1 : int) (arg2 : string) : string = 
  if arg1 < (String.toInt arg2)
  then "just return a string"
  else arg2
```

Here, `myFunction` has two arguments, `arg1` and `arg2`, which are an
`int` and `string` respectively. It returns a `string`. 

Like in Dark, the body of a function is just an expression, and it
automatically returns the result of that expression.

(see [below](#advanced-functions) for more details on functions in OCaml)

### Standard library

Most of the code in Dark uses
[Tablecloth](https://darklang.com/darklang/tablecloth), which has the same
[interface](https://github.com/darklang/tablecloth/blob/master/bucklescript/src/tablecloth.mli)
for Bucklescript and native OCaml.

A lot of the backend uses Core, one of the most popular standard libraries for
OCaml. The Jane Street Core library has three flavors: Base, Core\_kernel and
Core, each with progressively more expansive functionality.  The native version
of Tablecloth is built on top of "Base". The Dark backend typically uses
[Core\_kernel](https://ocaml.janestreet.com/ocaml-core/v0.11/doc/core_kernel/Core_kernel/index.html)
as we have not transitioned to Tablecloth fully.

Note: we try to use Core\_kernel directly when implementing the language and
standard libraries, as Tablecloth is still in flux and has not yet reached
stability.


### Int

An `int` is the same in Dark and OCaml, same syntax, same meaning. While Dark
intends to one day support infinite precision integers, today it uses 63-bit
integers, which is the same as OCaml.

```ocaml
let x = 5 in
x + 6
```


### Float

A `float` is the same in Dark and OCaml, both of them are 64-bit floating point
numbers.

In OCaml, there are special operators to work on floats:

```ocaml
let x = 0.1 in
x +. 0.3
```

To convert from floats to ints use `Float.toInt`, or `Float.round`.

### Bool

Like in Dark, `bool`s in OCaml are either `true` or `false`.


### String

A String in Dark is Unicode (UTF-8), while a `string` in OCaml is just bytes
(we use the `Unicode_string` module to convert them to Unicode).

```ocaml
let myString = "some string, escaping is allowed\nwhich dark doesn't support yet" in
myString
```

### List

Lists in Dark and OCaml are almost the same. In OCaml, lists use `;` as separators, like so:

```ocaml
[1; 2; 3; 4]
```

While Dark technically allows you to create lists that have different
types in them, OCaml emphatically does not.

To type check a list, you specify it's type like so: `int list`, which is a list of ints.

### Records

Records are mostly used as objects are in most languages. Like Dark, they only
have fields, not methods, and you use functions to manipulate them.

A record in OCaml has unusual syntax:

```ocaml
{
  field1 = 56;
  field2 = true;
  field3 = "asd"
}
```

Note that they use `=` to connect a field and a value, and `;` as row
separator. The types of the fields do not have to be declared.

Records are immutable, like almost everything in OCaml, and are updated using an unusual syntax:

```ocaml
let x = { field1 = 56; field2 = true } in
let updatedX = { x with field1 = 57 } in
doSomethingWith updatedX
```

Note that records in Dark are really dictionaries, which is why you
update them with `Dict::set`. We're trying to figure out how to split
records and dictionaries apart better in Dark, after which they will be
more like OCaml (though hopefully with better syntax).

Type definitions for records look like this:

```ocaml
type person =
  {
    name : string
  ; age : int
  }
```

### Let

OCaml `let`s have a slightly different syntax to Dark:

```ocaml
let x = 45 in
x + 23
```

The `in` at the end is required.

`let` also allow destructing in OCaml, although we don't currently use that
very often.

### If

`if` statements in OCaml are extremely sumilar to Dark, including that they
only allow `bool`s as the condition, and in their syntax.

```ocaml
if hasAccess user
then "Welcome!"
else "Access denied"
```

### Operators

OCaml, in keeping with its odd syntax, has some unusual operators. Most
importantly, the equality operator is `=` (that's just one equals), whereas in
most languages it's `==` or `===`. `=` is very strict equality, equivalent to
`===` in languages that have that, such as JS.

Dark's `==` is the same as OCaml's `=`. OCaml also has a `==` operator, but you
should never use it.

OCaml's inequality operator (`!=` in Dark) is `<>`. Most of its comparison
operators (such as `<`, `>`, `<=`, etc) only operate on integers.


### Match

Dark has a `match` statement that is very similar to OCaml's, with slightly
different syntax:

```ocaml
match myValue with
| Some x -> 5
| _ -> 6
```

Notice the `with` keyword, and starting the patterns with `|`.

OCaml also supports more powerful `match`es, for example multiple patterns can match a single branch:

```ocaml
match myValue with
| 4 | 5 | 6 -> "between 4 and 6"
| _ -> "not between 4 and 6"
```

OCaml also supports the `when` clause:

```ocaml
match myValue with
| Some myInt when myInt >= 4 && myInt <= 6 -> "between 4 and 6"
| _ -> "not between 4 and 6"
```

Be careful of very subtle bugs when combining multiple patterns with `when`
clauses: the entire pattern will fail if the pattern matches when the clause
does not:

```ocaml
let myValue = Some 5 in
match myValue with
| Some 4 | Some myInt when myValue <> Some 4 -> "this will never succeed"
| _ -> "this will succeed as a fallback"
```


### Variants

Dark has a handful of enums for `Option` and `Result` types: `Just`, `Nothing`, `Ok` and `Error`. In the future we will expand this to allow user-defined types as well.

OCaml supports the `Option` and `Result` types and we use them a lot. However, the constructors for Option OCaml are named differently: `Some` and `None`.

OCaml calls enums "variants". We use them frequently, especially to represent expressions. For example in FluidExpression.ml:

```ocaml
type t =
  | EInteger of id * string
  | EBool of id * bool
  | EString of id * string
  | EFloat of id * string * string
  | ENull of id
  | EBlank of id
  | ELet of id * string * t * t
  | EIf of id * t * t * t
  | EBinOp of id * string * t * t * sendToRail
  | ELambda of id * (analysisID * string) list * t
  | EFieldAccess of id * t * string
  | EVariable of id * string
  | EFnCall of id * string * t list * sendToRail
  | EPartial of id * string * t
  | ERightPartial of id * string * t
  | ELeftPartial of Shared.id * string * t
  | EList of id * t list
  | ERecord of id * (string * t) list
  | EPipe of id * t list
  | EConstructor of id * string * t list
  | EMatch of id * t * (FluidPattern.t * t) list
  | EPipeTarget of id
  | EFeatureFlag of id * string * t * t * t
```

Type `t` (it's a common convention in OCaml to name the main type of a module
`t`) must be one of `EInteger`, `EBool`, `EString`, etc. `EInteger` takes two
parameters, an `id` and a `string` (we use a string to represent integers as
Bucklescript doesn't have a big enough integer type).

To create a `t`, you'd do something like this:

```ocaml
let expr = EInteger (id, "test")
```

To get values from them, you pattern match:

```ocaml
match expr with
| EInteger (_, str) -> str
| _ -> "not an int"
```


### Lambdas

OCaml supports lambdas and we use them frequently. They have a different syntax to Dark:

```ocaml
list
|> List.map ~f:(fun elem -> elem + 2)
```

It's very common to use functions like `List.map` which have a parameter called `f` which take a lambda.

### Pipes

OCaml has pipes which are the same as in Dark, except that in OCaml the pipe
goes into the final position (in Dark it goes into the first position):

```ocaml
list
|> List.map ~f:(fun elem -> elem + 3)
```

### Dictionaries

Dictionaries (hashmaps, etc) are typically called `Map` in OCaml, and are
unforuntately pretty hard to use, which is one reason you won't see them used
as much as they really should be.

### Unit

OCaml has a `unit` type, whose only member is `()`. That's an actual value, for example, all this is valid code:

```ocaml
let falseVar = () != () in
```

It's typically used to pass to a function which is impure but doesn't have any
meaningful arguments, such as `gid ()` (which generates IDs).

### Error handling

Typically we use `Result` or `Option`s for error handling. You'll very commonly see something like

```ocaml
let isRailable (m : model) (name : string) =
  m.functions
  |> Functions.find name
  |> Option.map ~f:(fun fn ->
         fn.fnReturnTipe = TOption || fn.fnReturnTipe = TResult)
  |> Option.withDefault ~default:false
```

To find out if a function goes on the error rail, we search for a function,
which returns an Option. We then use a `map` to operate on the option, and
finally choose a default in case the Option returned `None`.

#### Exceptions

OCaml also has exceptions - we hardly use them in the client, but unfortunately
use them a little bit on the backend, which we'd like to do less of.

Unfortunately, it's hard to tell in OCaml when an exception could be thrown.

### .mli files

OCaml code goes in .ml files - each file is a module. OCaml also has interface
files which describe the module in the .ml file of the same name.

While they aren't necessary, they make it easier to know what functions are
unused, they make APIs clearer, and they make compilation faster. As such, Dark
is moving towards an `.mli` for each `.ml` file.

### Imperative programming

OCaml supports imperative programming which is not in Dark yet. There are mutable values called refs, that can be updated:

```ocaml
let myString = ref "old value" in
myString := "new value"; (* update contents of myString *)
print_endline myString
```

To go along with it, OCaml has `for` and `while` loop, allowing you to use
imperative programming in places where it's clearer to do so:

```ocaml
for i = 1 to n_jobs () do
  do_next_job ()
done
```

### Advanced functions

#### Named parameters

Functions support named parameters, which you might see called like this (note the `~`):

```ocaml
Option.withDefault ~default:5 (Some 5)
```

These are useful as a named parameter can be placed in any order (this
is also useful for piping).

You declare functions with named paramters like so:

```ocaml
let myFunction (regularParamter : int) ~(namedParam : string) : int =
  ...body of function...
```

#### Optional parameters

OCaml also supports optional parameters

```ocaml
let myFunction (regularParamter : int) ~(namedParam : string) : int =
  ...body of function...
```

#### the `rec` and `and` keywords

By default, OCaml functions are not recursive: they cannot call themselves. To allow a function to call itself, add the `rec` keyword:

```ocaml
let rec myFunction (var : int) : int =
  if var > 6 then 6
  else myFunction (var + 2)
```

Similarly, if two functions need to call each other, they need to be aware of each other (OCaml programs require all functions to be defined before they are used). The `and` keyword allows this:

```ocaml
let firstFunction (var : int) =
  (secondFunction var) + 2

and secondFunction (var : int) =
  if var > 6
  then firstFunction 0
  else firstFunction (var + 1)
```

#### Partial application / currying

Occasionally you'll see a function called with fewer arguments than it has parameters:

```ocaml
let myFunction (param1: int) (param2 : string) =
  ...body...

let myOtherFunction = myFunction 6
```

This is called "partial application", in that the function is only partially called (this is often called Currying in the functional language community). This just means that some parameters are filled in, and you now have a function which can be called with the remaining parameters:

```ocaml
let () =
  myOtherfunction "final argument"
```

This is the same as if it were defined as:
```ocaml
let myOtherFunction (param : string) =
  myFunction 6 param
```

### Modules

OCaml has a complex module system, which takes some time to grasp. Modules can have parameters, have inheritence, and each other these features uses a complicated, difficult to grasp syntax.

We only barely use modules in the Dark codebase, so here's what you need to know:

- all files are automatically modules. Note that in the backend,
  modules need to have their directory names included, but not in the
  client.

- using a module is simple:

```ocaml
open MyModule1 (* all function and types are available *)
module M = MyModule2 (* access members as if the module was called M *)

let x = MyModule3.myFunction 6
```

- the syntax of creating a module is also straightforward:

```ocaml
module MyModule = struct
  type t = int
  let myfunction x = x + 2
end
```

We typically `open` the `Prelude` and `Types` modules at the top of all
files (which in turn open other modules, like `Tablecloth` on the
client).


### Classes and Objects

OCaml supports traditional object oriented programming, though it's not used
very much and very discouraged. The only place we really use it for
interacting with JS (the Bucklescript JS interop code compiles it to direct OO
in JS).



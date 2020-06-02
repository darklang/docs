---
title: OCaml for Dark developers
---

This guide aims to introduce you to enough OCaml to contribute to Dark, assuming you already know Dark.


## OCaml vs ReasonML vs Bucklescript

The backend is in OCaml and the frontend is in Bucklescript. Also, something about ReasonML. What's the difference? The simplest answer is that these are all the same.

Bucklescript and OCaml are both compilers:
- the native OCaml compiler compiles programs to binaries. The backend uses native OCaml.
- the Bucklescript compiler compiles programs to JS. The editor uses Buckelscript.

ReasonML and OCaml are both syntaxes:
- ReasonML is a JS-like syntax for the OCaml language
- OCaml has a default syntax (we use this in the Dark repo)

ReasonML is also often used to refer to the community around compiling to JS using Bucklescript, and associated technologies.

Again, the simplest mental model is that they're all the same.



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
```
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

## What do Dark and OCaml have in common?

OCaml and Elm (which is extremely similar) are both the biggest influences to Dark. Dark is aimed at having most of what's in OCaml, although it is currently a smaller subset than is planned.

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
figure out what the types are. This is the source of frequently bad
compiler messages, often it will tell you something which seems wrong
because it guessed wrong about certain types.

Usually type errors actually contain useful information, but they need to be read very carefully to find it.

The best way to debug incorrect types is to add type annotations to
everything. We add them to all functions (we didn't always, but we are
now), including all parameters and return types (see
[example](#functions) below). You can also add them to all statements:

```ocaml
let y = 6.7 in
let (x : int) = 6 in
x + 5
```

`x` here, despite being a normal variable defitition, has a type
signature here. OCaml allows this in many places, and it's useful for
tracking down these errors.


### Functions

Functions in OCaml are defined in the outer scope. Type signatures are optional but we use them everywhere.

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

Functions also support named parameters, which you might see called like this (note the `~`):

```ocaml
Option.withDefault ~default:5 (Some 5)
```

These are useful as a named parameter can be placed in any order (this
is also useful for piping).

### Standard library

Most of the code in Dark uses
[Tablecloth](https://darklang.com/darklang/tablecloth), which has the
same interface on the frontend and the backend. This allows us to reuse
a lot of functions - that said, the backend still often uses other
libraries where we have not ported it to use Tablecloth yet.


### Int

Ints are basically the same in Dark and OCaml, same syntax, same meaning.

```ocaml
let x = 5 in
x + y
```


### Float

Floats are the same in Dark and OCaml, both of them are 64-bit floating point numbers.

In OCaml, there are special operators to work on floats:

```ocaml
let x = 0.1 in
x +. 0.3
```

To convert from floats to ints use `Float.toInt` from 

### Bool

Like in Dark, `bool`s in OCaml are either `true` or `false`.

Because OCaml is statically typed, if statements only allow `bool`s as
arguments, you can't do something like `if 5 then ...`.



### String

Strings in Dark are Unicode (UTF-8), while strings in OCaml are just bytes (we use the `Unicode_string` module to convert them to Unicode).

### List

Lists in Dark and OCaml are almost the same. In OCaml, lists use `;` as separators, like so:

```
[1;2;3;4]
```

While Dark technically allows you to create lists that have different
types in them, OCaml emphatically does not.

### Records

A record in OCaml has this syntax:

```ocaml
{
  field1 = 56;
  field2 = true;
  field3 = "asd"
}
```

Note that they use `=` to connect a field and a value, and `;` as row
separator.

Records are mostly used as objects are in most languages. Like Dark, they only have fields, not methods, and you use functions to manipulate them.

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

### Let

OCaml `let`s have a slightly different syntax to Dark:

```ocaml
let x = 45 in
x + 23
```

The `in` at the end is required.

`let` also allow destructing in OCaml, although we don't currently use that very often/

### If


Dark currently supports int, bool, float, string, dictionaries (maps in OCaml), null (unit in OCaml), let, if, binary operators, lambdas (anonymous functions), fields, variables, records, pipes, enums (variants or sum types in OCaml)



## Stuff in OCaml that Dark doesn't have

- exceptions
- Mli-files
- refs / imperative programming
- modules
- named paramters
- optional parameters
- currying

## Stuff in OCaml we don't use very much
 
- Objects / classes


## OCaml vs ReasonML vs Bucklescript

The backend is in OCaml and the frontend is in Bucklescript. Also, something about ReasonML. What's the difference? The simplest answer is that these are all the same.

Bucklescript and OCaml are both compilers:
- the native OCaml compiler compiles programs to binaries. The backend uses native OCaml.
- the Bucklescript compiler compiles programs to JS. The editor uses Buckelscript.

ReasonML and OCaml are both syntaxes:
- ReasonML is a JS-like syntax for the OCaml language
- OCaml has a default syntax (we use this in the Dark repo)

ReasonML is also often used to refer to the community around compiling to JS using Bucklescript, and associated technologies.

Again, the simplest mental model is that they're all the same.



---
id: languagedetails
title: Language Details
sidebar_label: Language Details
---

This doc describes the Darklang language. Darklang is really a system - a
combination of the language, editor, framework and infrastructure. In this doc,
we'll focus on discussing the language itself, ignoring where possible the
editor and infrastructure.

This discusses both the language and the **intended** language. We have taken
many shortcuts to be able to ship Darklang, and so many parts of the language
are not currently at their end state. Here we discuss both what the language is,
and what we intend it to be.

Darklang is a statically-typed functional/imperative hybrid, based loosely on
ML. It is a high-level language, with immutable values, garbage collection, and
support for generics/polymorphic types.

Darklang is somewhat similar to OCaml or Elm. It has many similarities to Rust
and Haskell, and is also influenced by Clojure, Ruby, Python, CoffeeScript, as
well as our experience with (alphabetically) Bash, C, Clojure, CoffeeScript,
C++, Elm, Javascript, Java, Haskell, OCaml, Perl, PHP, Python, ReasonML,
Ruby/Rails, React, and Rust.

### Type system

Dark’s type system is most similar to Elm, Haskell, ReasonML, OCaml or Rust:
based on records, enums, list, and built-in generics/polymorphism. All values in
Darklang are immutable, except refs.

Darklang has some standard basic types: `int`, `string`, `boolean`, `float`,
`list`, and `dicts`.

We support typical functional types: `Option` and `Result`.

Currently, Darklang has a `null` type to support JSON values directly. In the
future, we intend to deprecate `null` and replace it with `Options`.

## Built-in types

### Integers

Integers are signed 63-bit integer.

In the future, Darklang will use infinite-precision integers. We also intend to
add unsigned 8-bit integers and bit-manipulation functions.

### Floats

Floats are double-precision 64-bit floating-point values (IEEE 754).

We intend for numeric operations to return Results, to handle situations which
are undefined on the datatype. For example, integer division would return
`Result Error Int`. Similarly, floating point values would never be `NaN`, and
instead would return `Result Error Float`. See
[Error Handling in Darklang](https://docs.darklang.com/discussion/error-handling)
for more.

### Booleans

Booleans are true or false.

### Strings

Strings are unicode, and character are unicode “characters” (if it appears as
one character on the screen, that’s a “character” in Darklang).

Specifically, string are immutable UTF-8 encoded sequences of Unicode code
points. Chars are “Extended Grapheme Clusters”. (A codepoint is some bytes that
implement unicode characters, a grapheme is some codepoints forming a unicode
entity, such as an emoji; an EGC is some graphemes, used to handle things like
emojis which combine to form a single emoji).

Darklang doesn't currently support string interpolation, but we plan to in the
future.

### Characters

A character in Darklang represents a character that you see on your screen, such
as `'a'`, `'1'`, `'Ż'`, `'🇵🇷'`, `'👩‍👩‍👧‍👦'`. This is in contrast to most languages,
where a character represents one byte, or perhaps a Unicode codepoint. We chose
this

The technical name for a Darklang character is an _Extended Grapheme Cluster_,
and can best be thought of as supporting the entire character you see in front
of you - in the case of emoji, this includes such things as combining characters
and skin tones. See [Strings](### Strings) above for additional context.

While the Darklang language has support for Characters, the Editor experience
with Characters is quite limited. For example, we do not yet support Character
literals using single quotes, such as `'a'`. Until proper support exists, you
can define a Char in Darklang rather indirectly:
`let charExample = "👩‍👩‍👧‍👦" |> String::toList |> List.head`.

### Lists/Arrays

Lists and Arrays use the same datatype, called Lists. The Darklang compiler will
in the future optimize their implementation to support good algorithmic
complexity and performance for whatever you use them for.

Lists should be used for all “I want a sequence of things” situations, including
iterating across them, random access, push/pop, etc.

```elm
let x = [8]
let y = List::append x [6]
y
```

```elm
[8, 6]
```

![List Example](/img/language/list_example.png)

### Tuples (In-Progress)

Darklang supports tuples: lists of defined length supporting heterogeneous
types.

Tuple support is currently a
[work-in-progress](https://github.com/darklang/dark/issues/4265), and only
available in the editor after opting in via the Settings dialog. Feedback is
welcome!

See Release 5 in the [changelog](https://docs.darklang.com/reference/changelog)
for a demo of opting in.

```fsharp
let x = (1, "string", { name: "Sam" })
```

- Tuples can be created in the editor by entering `(` in a blank.
- Inserting additional separators (`,`) extends the size of the tuple; removing
  separators/elements reduces the size, generally removing the element to the
  left of the separator
- Darklang's Standard Library includes `Tuple2` and `Tuple3` modules, which
  provide functions used to work with tuples of size 2 and 3.
- Pattern matching with `match` supports tuples:

  ```fsharp
  let headers = Dict::toList request.headers
  let contentTypePlain =
    List::findFirst headers \header ->
      let (key, value) = Tuple2::mapFirst (\key -> String::toLower key) header
      match (key, value)
        ("content-type", "application/json") -> Just "json"
        ("content-type", "text/html") -> Just "html"
        _ -> Nothing
  ```

  Tuple match patterns can be created and extended the same way as tuple
  expressions.

The following constructs are planned but not yet implemented:

- Tuples can be deconstructed into their parts via a `let` expression:

  ```fsharp
  let philadelphia = (39.9526, 75.1652)
  let (lat, long) = philadelphia
  ```

- User functions may accept and return Tuples (TODO: I'm not sure how to phrase
  this)

### Binary

Non-unicode sequences of bytes are supported as the `Binary` type.

### Options

Instead of allowing all values to potentially be null, as in most imperative
languages, Darklang uses an Option type:

```elm
Option a = Just a | Nothing
```

![Option Example](/img/language/option_example.png)

This is intended to convert effortlessly to null in JSON, but we don't quite
have enough of the type system to remove null, so they both exist right now.

Functions which return `Option` trigger the
[Error Rail](https://docs.darklang.com/discussion/error-handling).

### Results

Any functions which can have an error should use Results. We use results for Int
division, Float operations, HTTP operations, etc.

```elm
Result a = Ok a | Err Error
```

Darklang has no exceptions - all errors go through Results. See
[error handling](https://docs.darklang.com/discussion/error-handling) for more
details.

![Result Example](/img/language/result_example.png)

### Dicts

Dicts are maps from a certain key type to a certain value type. The key must
currently be a string. The value can be any type but all elements of the Dict
are the same type (not currently enforced).

Dicts are different than records: dicts can have arbitrary keys.

### UUID

Darklang supports UUIDs directly.

### Null

As a temporary hack, Darklang also supports `null`. This allows us handle JSON
while we build out enough type-system support to allow them to be replaced by
`Option`.

`Null` is mostly useful for comparing against incoming JSON and results of
`HttpClient` calls. When returning JSON or making `HttpClient` calls, you can
use `Option`s instead and they will be converted properly to `null` in the JSON
output.

## User defined types

Darklang currently has limited support for user-defined types. Currently, we
support inline definition of records, but do not support defining record types
explicitly.

Record types are actually implemented under the hood, and we intend to use them
to support typed Datastores, API contracts, and static types.

Darklang does not currently support user-defined enums.

User-defined types will be either records or enums, or combinations of other
type expressions.

Types in Darklang are out-of-line, meaning that they are not defined “on the
canvas”, in a similar way to functions.

All types in Darklang will be versioned.

In the future, we intend to support typeclasses or traits to allow ad-hoc
polymorphism.

### Records

Records are most akin to Classes in an imperative language.

Records are a set of keys and values. Each key name and type are defined, and
the types do not have to be the same.

```elm
let x = { name: "Robin"
          age: 32
          gender: "Other"
        }
```

Records can not be accessed dynamically; they are not Maps/Hashtables/Dicts.

Records are structurally typed, and are equivalent to records of the same shape
but a different name.

Note that at the moment, Dicts and Records share the same implementation and can
be accessed and modified in the same way. We intend to break these apart in the
future.

### Enums

Enums are a set of “constructors”, each of which has a set of typed arguments.

Currently, Darklang only supports `Option` and `Result` built-in enums. In the
future, we will support user-defined enums.

```elm
type Person = Human {age: Int, name: String, itin: String }
            | Corporation {age: Int, name: String, ein: String }
            | Puppers Int String
```

Enums can be made by building on existing types, especially records and other
enums.

Enums are nominally typed. (Two enums with the same field names and types are
not equivalent).

## Types unique to Darklang

### Incompletes

Programs in Darklang start as a single empty expression. As they get built up in
our structured editor, they can never become syntactically invalid. However, a
program may be incomplete if any its expressions are empty.

An empty expression is incomplete. A developer may write programs where some
parts are incomplete as they build out the code. As such, incomplete values
appear dynamically when the code is executed. Structures containing incompletes
are themselves incomplete. For example functions with incomplete arguments do
not execute, and return incomplete; and records with an incomplete field are
also incomplete.

Incompletes are never returned to end users, and cannot be stored in a
datastore. Returning an incomplete via a HTTP handler causes a 500 error.

### Error rail

You might occasionally see a value marked `<ErrorRail>`, this is used to
indicate that a value is on the Error Rail. See
[Railway Oriented Programming](https://blog.darklang.com/real-problems-with-functional-languages/)
for more details.

### Sensitive Types

Some values are sensitive, for example, passwords or credit card numbers.

Currently Darklang supports the `Password` type, which is never saved directly
or sent to the editor.

In the future, Darklang will allow you to specify types of sensitive values,
preventing them from being stored in logs, and allowing a team to limit who has
access to these values in the Darklang editor.

## Expressions

All Darklang language constructs are expressions. That means that they evaluate
to a value, rather than being used to set state.

### Let

Lets creates a name with an immutable value, and a scope in which that is
defined.

```elm
let name = "Stella"
name
```

We often refer to these names as variables, for simplicity. However, they never
vary: once they are defined, they never have any other value.

#### Variable Scope

```elm
if age > 18
then
  let height = 170
  height + 12
else
  let weight = 105
  weight / 2
```

In the example above, the scope of `height` and `weight` only extends to within
the `then` block and `else` block respectively. You cannot use either variable
below the `if` expression.

### If

Darklang supports if/else statement. The argument to an `if` is a boolean. We
currently support `truthy` types but intend to remove that ability.

We support `&&` and `||`, which short-circuit (only evaluate the second
expression if needed). However, we used to support versions of `&&` and `||`
that did not short-circuit; those are deprecated (the editor will show
documentation about how to move to the new versions).

An `if` is not currently allowed without a corresponding `else` - we will relax
this after we introduce statements.

![If Example](/img/language/if_example.png)

### Match

Darklang supports pattern matching, in particular, matching on `Enum`s.

```fsharp
let introduction =
  match name with
  | Nothing -> "Hi!"
  | Just name -> "Dear " ++ name
```

We expect to allow guards in the future. We also hope to add an `if-let`
construct to support `if` statements that destructure from Enums.

### Functions

Functions must have type declarations for inputs. We intend to support types on
return values soon.

```elm
fetch url name =
  { url: url
  , name: name
  }
```

Functions in Darklang are simple, and do not currently support functional
language concepts, such as partial application, functions as first-class values,
and defining functions in using points-free style.

Functions do not live in the “Canvas”, but rather are a little bit ethereal.

Built-in functions are all versioned: we frequently deprecate old functions and
add updates. When we deprecate old versions, your code does _not_ change, and
you keep using the old ones. We intend to support automated refactoring and
updating in the future.

In the future, we intend to support partial application/currying, and
default/optional parameters.

### Lambda

Lambdas are anonymous functions. They are used to pass to functions which take
`Block`s, typically used for iteration.

```elm
List::map [5, 10, 11] \var -> var + 2
```

```elm
[7, 12, 13]
```

In the future, we intend to support a syntax for shorthands for creating lambdas
to access fields: `.fieldname`. This can be included in a pipe or used as a
first class function.

We also intend to support passing functions where blocks are expected.

There is a syntax for shorthands for creating lambda’s to call constructors:
`ConstructorName`. This can be included in a pipe or used as a first class
function.

### Pipelining

Darklang programs are intended to be written, as much as possible, as pipelines
of data:

```elm
user
|> getFriends
|> List.map (\f -> (f, getFriends f))
|> List.filter (\f -> f.name == "Kevin Bacon")
|> (=) []
```

### Feature Flags

Feature flags are similar to `if`s:

```elm
flag myCondition
then 5
else 6
```

However, flags differ slightly from ifs in that any condition that is not `true`
will cause the `then` block to activate. This is especially important around
`incomplete`s, allowing you to take working code and edit the feature flag
without disturbing existing users. In an `if` statement, neither branch would
execute.

## Planned language features

### Sets

We intend for Darklang to support Sets: unordered collections of a single type.

### Unit

We intend to support the unit type, which indicates something that have no type,
such as an imperative function that doesn't return anything.

```elm
x = ()
```

### Imperative programming (Statements and refs)

It is intended that you write the program as you think it, not to shoehorn your
program into a functional style. As such, Darklang is planning to add a number
of imperative concepts to allow you to easily write imperative algorithms,
including statements, refs, and mutable data structures.

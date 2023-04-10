---
title: General concepts
---

## Editor vs Production (how code runs)

Code runs in two places in Darklang: in the Editor, and in Production. In
production, we have a Kubernetes cluster of interpreters with HTTP servers which
are connected to a database, connected to the internet via Google Cloud
infrastructure, that run Darklang programs.

When requests are made in production we save their inputs and intermediate
values (combined, these form a "trace", discussed below). Those are sent to the
client.

The Darklang interpreter is also compiled to WebAssembly and is available in the
browser in the client. The traces are sent to the WASM-compiled interpreter,
which uses their results to fill in for functions which can't be run on the
client (such as DB functions).

## Traces & Live values

When a request is made to a production server, the inputs (typically a HTTP
request) are saved. We also save intermediate results of functions which are
called during the request. Together, these comprise a trace. Traces are shown in
the editor and users can choose between them.

## Toplevels

"Toplevel" is the generic name for a part of a Darklang program, either a
handler (whether a HTTP handler, a Cron or a worker), a function, a type, or a
database.

Structural toplevels are toplevels which are part of the structure of your
program: handlers and DBs. These live on the canvas.

Other toplevels are non-structural, and they don't live on the canvas or really
anywhere. We have started to affectionately refer to the display for these as
the "function space". (There is a design for what should happen here, but we
have not done it yet).

## The path of an edit

Most characters that you type are immediately saved in our production database
(in, according to our claim, 50ms). Edits are either made to program code, which
is part of the "Fluid" editing system, or to handlers, databases, function
parameters, or similar metadata, which is part of the "Forms" editing system
(originally, all edits were of the "forms" variety - the name was added post-hoc
to differentiate it from "fluid").

For Fluid, this is the journey:

- the event processed by `FluidKeyboard.res`, creating a `FluidMsg`
- `Fluid.res` recognized the `FluidMsg`, calling `updateKey`
- `updateKey` looks at the current caret position, and at the "tokens" before
  and after the caret, to figure out what's happening
- `updateKey` makes a transformation based on whatever it decided
- the AST for that code is transformed
- `FluidAutocomplete` may be regenerated, if necessary
- the browser's animation event fires, causing a re-render. The AST is
  "tokenized", essentially pretty-printing it as HTML, which then renders
- an API call is made to send the change to the server (detailed below)

For forms, the journey is similar:

- the event is processed by `KeyPress.res`
- the contents of `m.complete.value` are updated (this is where the value in the
  forms box is stored)
- the `Autocomplete` values are regenerated
- after pressing enter, or clicking away, the change is made
- an API call is made to send the change to the server (detailed below)

### Sending the change to the server

When a change is made, typically an `AddOp` `modification` is made. That
`modification` is returned by many of the functions that edit programs, and it's
processed in `Main.res`. This passes into `API.res`, where it serializes the
`Op` change into a JSON via encoders (see `Enconders.res` and `Decoders.res`).

The change is accepted by `ApiServer.fs` in the backend, where it is decoded,
applied to the program, and then saved into the database. Saving the program
involves a special binary serialization format, in `BinarySerialization.fs`.

After being saved, it is sent to Pusher.com, the websockets vendor we use. This
is sent to other clients which then update their programs. It is also sent to
the original editor, who ignores it.

## ASTs

An "AST" is an "Abstract syntax tree". The simple explanation is that it's a set
of "classes" and "objects" representing programs. (Abstract syntax tree means
the programs representation (the "syntax tree") without the annoying syntactic
details like commas and semi-colons (hence "abstract")).

In Darklang, it's defined in `FluidExpression.res`, and at time of writing looks
like this:

```fsharp
type sendToRail =
  | Rail
  | NoRail

type expr  =
  | EInteger of id * string
  | EBool of id * bool
  | EString of id * string
  | EFloat of id * string * string
  | ENull of id
  | EBlank of id
  | ELet of id * string * expr * expr
  | EIf of id * expr * expr * expr
  | EBinOp of id * string * expr * expr * sendToRail
  | ELambda of id * (id * string) list * expr
  | EFieldAccess of id * expr * string
  | EVariable of id * string
  | EFnCall of id * string * expr list * sendToRail

  | EPartial of id * string * expr
  | ERightPartial of id * string * expr
  | ELeftPartial of id * string * expr
  | EList of id * expr list
  | ERecord of id * (string * expr) list
  | EPipe of id * expr list
  | EConstructor of id * string * expr list
  | EMatch of id * expr * (matchPattern * expr) list
  | EPipeTarget of id
  | EFeatureFlag of id * string * expr * expr * expr
  | ETuple of id * expr * expr * expr list

type matchPattern =
  | MPNull of id * id
  | MPBlank of id * id
  | MPBool of id * id * bool
  | MPVariable of id * id * string
  | MPInteger of id * id * string
  | MPFloat of id * id * string * string
  | MPString of id * id * string
  | MPConstructor of id * id * string * matchPattern list
  | MPTuple of id * id * matchPattern * matchPattern * matchPattern list
```

These definitions are in F# (we have a
[guide to F# for Darklang developers](fsharp-for-dark-developers)). Briefly,
this means that an `expr` is an integer (which is made up of an id and a string)
or a bool (made up of an id and a string), or a `match` (which is an id, an
expression to match on, and a list of patterns and expressions), etc

This definition is slightly simplified, but it's close. There's definitions for
literals like ints and strings, for definitions like `let`s, for function calls
with `EBinOp` and `EFnCall`, and also for various editor-specific intermediate
states like `EPartial` and `ERightPartial`.

Each expression has an `id` that is used to uniquely refer to the expression.
This is used when editing programs, and to relate live values from the analysis
engine to the display in the editor. If an ID is duplicated by accident, the
editor will act weirdly, but the program will work fine.

`FluidMatchPattern.res` and `FluidExpression.res` also contain functions for
changing match patterns and expressions easily, either by changing the by ID or
by traversing across the entire structure. Traversing the structure is generally
pretty fast.

---
title: Adding a language feature
---

There are a number of
[language features that we'd like to add](https://github.com/darklang/dark/issues?q=is%3Aissue+is%3Aopen+label%3Alanguage-feature)
to Dark. While there a quite a few steps involved in adding a language feature,
they're typically relatively straightforward to add once you've figured out the
Dark codebase.

It's important to note that the most important part of a language feature is
getting agreement on what it does. We typically write specs for features, and
ensure that we have resolved how edge cases should work, as well as ensuring it
meshes with the rest of the language and language definition. If you're
interested in creating a language feature, you should engage with Paul Biggar
early and often.

_See also:
[a pairing session where we added Tuples to the Dark client and backend](https://www.youtube.com/watch?v=HZk4yCF8DWQL)_

### Overview

Most language features will need to be added to our language definition. The
language definition is `Expr` in
[F#](https://github.com/darklang/dark/blob/main/fsharp-backend/src/LibExecution/RuntimeTypes.fs),
or `FluidExpression.t` in
[ReScript](https://github.com/darklang/dark/blob/main/client/src/libshared/FluidExpression.res),
which represent a Dark expression (which in turn contains other Dark
expressions). This is commonly known as an "Abstract Syntax Tree" (or AST).

At time of writing, the definition of `Expr` was

```fsharp
type Expr =
  | EInteger of id * bigint
  | EBool of id * bool
  | EString of id * string
  | ECharacter of id * string
  // allow the user to have arbitrarily big numbers, even if they don't make sense as floats
  | EFloat of id * Sign * bigint * bigint
  | ENull of id
  | EBlank of id
  | ELet of id * string * Expr * Expr
  | EIf of id * Expr * Expr * Expr
  | EBinOp of id * FQFnName.T * Expr * Expr * SendToRail
  | ELambda of id * List<id * string> * Expr
  | EFieldAccess of id * Expr * string
  | EVariable of id * string
  | EFnCall of id * FQFnName.T * List<Expr> * SendToRail
  | EPartial of id * string * Expr
  | ERightPartial of id * string * Expr
  | ELeftPartial of id * string * Expr
  | EList of id * List<Expr>
  | ERecord of id * List<string * Expr>
  | EPipe of id * Expr * Expr * List<Expr>
  | EConstructor of id * string * List<Expr>
  | EMatch of id * Expr * List<Pattern * Expr>
  | EPipeTarget of id
  | EFeatureFlag of id * string * Expr * Expr * Expr
```

The backend does the work of executing the expressions, and saving programs. The
execution engine is also compiled to Javascript in order to be available in the
client.

The client is responsible for editing programs. Typically, adding a language
feature means adding support for it to the many transformations that the client
does, including refactorings, renamings, etc. It will also need support in the
"Fluid" editor, which is where users actually type code.

## Backend

### Execution

The execution of the language is defined in
[`fsharp-backend/src/LibExecution/Interpreter.fs:eval`](https://github.com/darklang/dark/blob/main/fsharp-backend/src/LibExecution/Interpreter.fs).
`eval` does the work of converting an expressions into a `dval` -- a Dark value.

For example, `DInt` is the run-time value of an integer, while `EInteger` is the
expression that represents an integer. `eval` converts from an `EInteger` that
the programmer added to their program, into a `DInt` that can be operated on
(added, subtracted, etc).

As another example, an `ELet` is a `let` statement in Dark. When you see

```fsharp
let x = 6
x + 4
```

you have an `ELet ("x", EInteger 6, EBinOp ("+", EVariable "x", EInteger 4))`.
When we execute this `ELet`, we first execute the `6`, creating a `dval` of
`DInt 6`, which we then store as `x` in a "symbol table". We then execute
`x + 4` using the symbol table with our known value of `x = 6`.

`dval`s are defined in
[`fsharp-backend/src/LibExecution/RuntimeTypes.fs`](https://github.com/darklang/dark/blob/main/fsharp-backend/src/LibExecution/RuntimeTypes.fs)
and expressions are defined in
[`libshared/FluidExpression.res`](https://github.com/darklang/dark/blob/main/client/src/libshared/FluidExpression.res).

### Serialization

The other main purpose of the backend is to save programs. Dark uses a fast
binary serialization format, derived directly from expressions. This means you
do not have to do anything special to allow users to save your new expression.

#### Expressions are add-only

The automatic serialization has a caveat: the serializer has some rules to
maintain compatibility with existing Dark programs. You can add new expression
types to it, but you can't change existing ones. This means that if you want to
change a language feature to make it more powerful, you need to instead add a
new version of it, rather than editing the current version.

We do have the ability to remove old formats, but it is a little challenging to
coordinate. Whenever we do this, it is always after the new replacement feature
is live and stable, and then we go in and remove the old one.

These rules apply to anything using the serializers, which currently includes
both `expr`s and `tipe`s.

## Editor support

The editor is where the developer (a Dark user) actually creates code.

### Fluid Editor

The "fluid" editor is the subpart of the client where users type code. It
handles keypresses and the AST transformations that they cause.

For example: if you have the code (with the cursor denoted as `|`):

```fsharp
let x = |6
x + 4
```

Pressing `1` with your cursor here makes the editor look up the current
expression, and add a `1` to the front of it. Here that converts `6` into `16`.

Over time we intend to expand the Fluid Editor for all "coding" text entry.

#### Adding tokens

The FluidEditor works as a sort of "reverse parser". Instead of reading text and
figuring out meaning, it instead takes the AST and pretty-prints it into a set
of `FluidToken`s. These tokens are stringified, showing the user textual code.

The tokens also tied the current edit back to an expression. In the example
above, the cursor is at the start of a `TInteger` token, which ties the current
position back to the `EInteger` expression that defines it.

To add a language feature, you will often need to add new tokens. You will
occasionally reuse some tokens, but most features use dedicated tokens so that
there's no ambiguity.

You add tokens in
[`client/src/core/Types.res`](https://github.com/darklang/dark/blob/main/client/src/core/Types.res)
and keystrokes are handled in
[`client/src/fluid/Fluid.res:updateKey`](https://github.com/darklang/dark/blob/main/client/src/fluid/Fluid.res).

### AST transformations

Once you have added the expression and the tokens, you will need to support
existing features. Mostly, this means that existing AST transformations and
refactorings should continue to work. These are typically either explicit (via
the command palette) or implicit (by renaming a variable).

You will be able to find almost everywhere that this is needed when you add the
definition to `Expr`. The compiler will warn you at every place that you have
not handled it.

## Client/backend communication

The client sends ASTs to the backend to save and to run the programs in the
cloud. The client also fetches expressions from the backend to display and edit
them. It does this over JSON.

The F# backend has automatic JSON serializers and deserializers, using automatic
serializers of types in
[Api](https://github.com/darklang/dark/blob/main/fsharp-backend/src/ApiServer/Api).
The client has hand-written serializers in
[`client/src/core/Encoders.res`](https://github.com/darklang/dark/blob/main/client/src/core/Encoders.res)
and
[`client/src/core/Decoders.res`](https://github.com/darklang/dark/blob/main/client/src/core/Decoders.res).
The OCaml compiler will prompt you to add new encoders, but not decoders.
Writing new ones is straightforward by following other examples there.

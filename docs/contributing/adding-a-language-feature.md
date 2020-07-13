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

### Overview

Most language features will need to be added to our language definition. The
language definition is `FluidExpression.t`, which is a Dark expression (which in
turn contains other Dark expressions). This is commonly known as an "Abstract
Syntax Tree" (or AST).

At time of writing, the definition of `FluidExpression.t` was

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
  | ELambda of id * string list * t
  | EFieldAccess of id * t * string
  | EVariable of id * string
  | EFnCall of id * string * t list * sendToRail
  (* An EPartial holds the intermediate state of user-input when changing from
   * one expression to another. The [string] is the exact text that has been
   * entered and the [t] is the old expression that is being changed. *)

  | EPartial of id * string * t
  (* An ERightPartial is used while in the process of adding an EBinOp,
   * allowing for typing multiple characters as operators (eg, "++") after an
   * expression. The [string] holds the typed characters while the [t] holds
   * the LHS of the binop. *)
  | ERightPartial of id * string * t
  | EList of id * t list
  | ERecord of id * (string * t) list
  | EPipe of id * t list
  | EConstructor of id * string * t list
  | EMatch of id * t * (FluidPattern.t * t) list
  (* Placeholder that indicates the target of the Thread. May be movable at
   * some point *)
  | EPipeTarget of id
  (* EFeatureFlag: id, flagName, condExpr, caseAExpr, caseBExpr *)
  | EFeatureFlag of id * string * t * t * t
```

This definition is shared between client and backend.

The backend does the work of executing the expressions, and saving programs. The
execution engine is also compiled to Javascript in order to be available in the
client.

The client is responsible for editing programs. Typically, adding a language
feature means adding support for it to the many transformations that the client
does, including refactorings, renamings, etc. It will also need support in the
"Fluid" editor, which is where users actually type code.

## Backend

### Execution

The execution of the language is defined in `backend/libexecution/ast.ml:exec`.
`exec` does the work of converting an expressions into a `dval` -- a Dark value.

For example, `DInt` is the run-time value of an integer, which `EInteger` is the
expression that represents an integer. `exec` converts from an `EInteger` that
the programmer added to their program, into a `DInt` that can be operated on
(added, subtracted, etc).

As another example, an `ELet` is a `let` statement in Dark. When you see

```elm
let x = 6
x + 4
```

you have an `ELet ("x", EInteger 6, EBinOp ("+", EVariable "x", EInteger 4))`.
When we execute this `ELet`, we first execute the `6`, creating a `dval` of
`DInt 6`, which we then store as `x` in a "symbol table". We then execute
`x + 4` using the symbol table with our known value of `x = 6`.

`dval`s are defined in `backend/libexecution/types.ml` and expressions are
defined in `libshared/fluid_expression.ml`.

### Serialization

The other main purpose of the backend is to save programs. Dark uses a fast
binary serialization format, derived directly from expressions. This means you
do not have to do anything special to allow users to save your new expression.

#### expr

Well, not exactly. We currently actually serialize an old format, called `expr`.
We convert between `expr` and `FluidExpression.t` in order to save and execute.
The client only uses `FluidExpression.t`, however.

#### Expressions are add-only

The automatic serialization has a caveat: the serializer has some rules to
maintain compatibility with existing Dark programs. You can add new expression
types it, but you can't change existing ones. This means that if you want to
change a language feature to make it more powerful, you need to instead add a
new version of it, rather than editing the current version.

We do have the ability to remove old formats, but it is a little challenging to
coordinate. Whenever we do this, it is always after the new replacement feature
is live and stable, and then we go in and remove the old one.

These rules apply to anything using the `bin_io` derivers, which currently
includes both `expr`s and `tipe`s.

## Editor support

The editor is where the developer actually creates code.

### Fluid Editor

The "fluid" editor is the subpart of the client where users type code. It
handles keypresses and the AST transformations that they cause.

For example: if you have the code (with the cursor denoted as `|`):

```
let x = |6
x + 4
```

Pressing `1` with your cursor here makes the editor look up the current
expression, and add a `1` to the front of it. Here that converts `6` into `16`.

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

You add tokens in `client/src/core/Types.ml` and keystrokes are handled in
`client/src/fluid/Fluid.ml:updateKey`.

### AST transformations

Once you have added the expression and the tokens, you will need to support
existing features. Mostly, this means that existing AST transformations and
refactorings should continue to work. These are typically either explicit (via
the command palette) or implicit (by renaming a variable).

You will be able to find almost everywhere that this is needed when you add the
definition to `FluidExpression.t`. The OCaml compiler will warn you at every
place that you have not handled it.

## Client/backend communication

The client sends ASTs to the backend to save and to run the programs in the
cloud. The client also fetches expressions from the backend to display and edit
them. It does this over JSON.

The backend has automatic JSON serializers and deserializers, using the `yojson`
derivers. The client has hand-written serializers in
`client/src/core/Encoders.ml` and `client/src/core/Decoders.ml`. The OCaml
compiler will prompt you to add new encoders, but not decoders. Writing new ones
is straightforward by following other examples there.

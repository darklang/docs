---
id: language-overview
title: Language Overview
sidebar_label: Language Overview
---

At heart, Dark is an *expression-oriented* programming language. This aspect of Dark enables powerful features like live values and trace-driven development, but it may seem unfamiliar if you're used to imperative programming langauges like Javascript.

This section introduces a simple way to think about the structure of Dark programs and covers the core elements of the Dark programming language: basic types, **... TODO**

## The Structure of Dark Programs

When we say that Dark is an *expression-oriented* programming language, we mean that expressions are the building blocks of all Dark programs.

For example, `2` is an integer expression with the value `2`.
`2 * 3` is a compound expression with the binary operator `*` and two subexpressions as operands: `2` and `3`:

**TODO: image showing labeled parts made of boxes. There's a box around the 2 and the 3 and a big box around everything.**

The value of the expression `2 * 3` is `6`.

Since `2 * 3` is an expression, it can itself be a subexpression of a compound expression.
Consider the expression `1 + 2 * 3`, which has the value `7`. It is a compound expression with a binary operator `+` and two subexpressions as operands: `1` and `2 * 3`.

This nesting of expressions applies to all parts of the language, not just to mathematical expressions.
When defining a variable in Dark, you use a `let` expression, which has 3 parts: a variable *name*, a *value* (an expression!) bound to that variable, and a *body* within which you can use the *name* as an expression to stand in for the value.

```
let language = "Dark"
"Hello " ++ language
```

In the example above, the *name* is `language`, the *value* is `"Dark"`, and the *body* is `"Hello " ++ language`. Note that `++` is the string concatenation operator.
Since a `let` expression is itself an expression, it must itself have a value. The value of a `let` expression is always the value of its *body* (in this case `Hello Dark`).
We can take advantage of that to create more intricate expressions.

For example, we can nest `let` expressions to bind more than one name to a value in an expression:

```
let greeting = "Hello "
let language = String::toUppercase "dark"
greeting ++ language
```

**TODO: graphic illustrating the breakdown of this**

The rest of this section is intended as a reference for the expressions that are part of the Dark language. 

## Basic Expressions

### Blank
Blank expressions are special in that you never create them explicitly, but they're also the most common type of expression you'll encounter. A blank expression acts as a placeholder where you can type to create a different expression. The *value* of a blank expression is `Incomplete`, because it needs to be completed in order to be useful. Once it's filled in, it won't be a blank anymore.

### Partial
While you are typing or deleting, you'll often see partially completed expressions like this:

**TODO: insert image as example**

These expressions will evaluate to whatever was there before until you complete them.

### Int
Int expressions represent whole numbers and have the value of the whole numbers they represent.

**TODO: examples and limits -- note that negative numbers are confusing because you can't write negative literals. Also note that min+max integers, overflow, and underflow are not currently well defined.**

### Bool
There are two boolean expressions, `true` and `false`. They evaluate to the corresponding boolean value, as you would expect.

### String
String expressions like `"Hello"` and `"Dark is a programming language."` represent text sequences.

**TODO: discuss quirks of string literals, escape sequences, emoji, string length**

### Float
Float expressions like `1.5`, `.51`, and `3.` have a (potentially empty) whole and a fractional part separated by a `.`. They evaluate to single-precision IEEE floating point values. **TODO: is this true?**

**TODO: examples and limits -- note that you can't write negative literals. Also note that literals have infinite precision but the representation is IEEE float when peforming calculations.**

### Null
The `null` expression has the "nothing" value `Null`.

**TODO: note about suggesting that people not use it; eventual deprecation?**

## Variable Binding with `let` Expressions

You use `let` expressions when you want to use a variable name in place of a value inside another expression.
A `let` expression has 3 parts: a variable *name*, a *value* expression, and a *body* expression. The *value* expression is evaluated once, and any uses of the *name* within the *body* expression will share that value.

**TODO: example and block diagram**

## Control Flow

### If Expressions

You use `if` expressions in situations where you want conditional evaluation.
`if` expressions have 3 parts: a boolean *conditional* expression, a *then* expression, and an *else* expression.
The value of an `if` expression as a whole depends on the value of the *conditional* expression. If it evaluates to `true`, the value of the `if` expression is the evaluation of the *then* expression. Otherwise (if the *conditional* evaluates to `false`), the expression as a whole evaluates to the value of the *else* expression.

### Match Expressions

`match` expressions are similar to `if` expressions in that they provide conditional evaluation. However, via a technique called *pattern matching*, they enable more power




lambda





binop

field access

pipe

constructor




variable

fncall

list

record



Patterns:
variable
constructor
int
bool
string
float
null
blank
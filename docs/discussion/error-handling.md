---
id: error-handling
title: Error Handling
sidebar_label: Error Handling
---

The Darklang code you write in your handlers is available as soon as you type
(deployless). We have a number of built-in features to support this style of
writing, as well as dealing with errors.

## Incomplete Code

Darklang executes code as you write it, and sometimes the code you execute won't
be fully written yet. We call code like this "incomplete". Anytime incomplete
code is executed, it results in a value of `<Incomplete>`.

**Example:** Here, the block has not been completed because the final expression
is not filled in. Therefore the handler returns `<Incomplete>`.

![error/image11.png](/img/error/image11.png)

Incomplete values are allowed to co-exist with other values--whenever they
interact, the result is another `<Incomplete>`. If they do not interact, often
the valid value will continue, perhaps being returned to your user in a HTTP
handler, or saved in a datastore.

**Example:** Here we left the query parameter blank in a call to
`HttpClient::get`. The result of the function is therefore `<Incomplete>`.

![error/image13.png](/img/error/image13.png)

When something is incomplete, it will be shown with a red underline. An
expression may be incomplete even if it seems fine: this is because something it
depends on is incomplete. For example, in the case below we are returning `var`
but never defined it:

![error/image10.png](/img/error/image10.png)

In these cases, we provide a link to the source of the incomplete. Click on
"click to locate source" and it will take you the source of the error.

### The finer details

Incompletes are intended to allow you write code without disrupting the code
around it. You can add an empty `let` statement -- which will have an
`<Incomplete>` value on the right -- and because that new value doesn't interact
with anything else, you code will continue to run just fine.

Similarly, `<Incomplete>`s are ignored in lists. If you have an empty list, and
start to add an entry to that list, the new code will result in `<Incomplete>`
until you have completed the code. The list will evaluate to `[]`. This is so
that you can add entries to lists to without temporarily breaking your code.

The same is true of fields in a record: they will be ignored until the field's
value is complete.

If a HTTP handler results in an `<Incomplete>`, your user will get a 500 status
code with an error message.

## Type errors

When you see "invalid code", it means that your program is complete but has
issues (which are almost always type error). The error message should have
enough . Carefully read the message to see what's wrong.

**Example:**

Here we tried to use `DB::set` with an Int for the `key` parameter, even though
`key` needs to be a string.

![error/image14.png](/img/error/image14.png)

To resolve this problem, we can use a string instead. `"123"` or
`123 |> toString` will both work.

## Error Rail

The error rail is a unique feature of Darklang. It's purpose is to allow you
easily prototype code without having to deal with every error.

### Background: Result and Option types

Darklang has two types that model errors. The `Option` type allows you to model
a value or the lack of a value. For example, when fetching a value from a
dictionary or Datastore, if the value doesn't exist, the function will return
`Nothing`. If it does exist, the function will return the value wrapped in a
`Just`.

In this case it unwraps to `Just val` and the behavior would be the same for
functions that would return `Ok val`.

![unique/offrail_value.png](/img/unique/offrail_value.png)

![unique/offrail_value.png](/img/unique/offrail_error.png)

Similarly, to handle errors, you can use a `Result`: `Ok val` wraps a successful
operation, and `Error err` wraps a failure value (possibly a string, or some
other value with information about the error).

### Background: matches

Getting the value from an `Option` or `Result` can be irritating. You need to
use `match` to check both possible values. This gives you certainty that you've
handled the different options, but means you need to do this cumbersome step for
any function which doesn't always succeed (which is a lot of them).

![unique/match.png](/img/unique/match.png)

### Prototyping using the Error Rail

When you are prototyping, you don't want to write tedious error checking code
that you might subsequently delete anyway. To make prototyping easier, functions
that result `Option` and `Result` types can be automatically unwrapped. It's as
if these functions threw exceptions in the error case instead of using our more
structured error handling mechanism.

Functions that return `Option` and `Result` are automatically "put on the
errorrail" This means that they are automatically unwrapped in the success case.
In the failure case, execution stops in the handler or function and the bad
value is immediately returned.

A grey circle (🔘) on the right indicates that a success value was unwrapped.

![unique/railnotyetrun.png](/img/unique/errorrail_success.png)

A red error sign (🚫) on the right indicates that the function failed and that
execution was stopped.

![unique/railnotyetrun.png](/img/unique/errorrail_failure.png)

If the function has not yet been run, there will be a dotted line (⦙) on the
right to indicate that an error could happen.

![unique/railnotyetrun.png](/img/unique/railnotyetrun.png)

### Handling errors exhaustively

While this is useful in prototyping, once you've figured out what your code is
supposed to do, you'll want to handle potential errors. The ErrorRail indicators
will show you places where an error might happen, allowing you to add error
handling code.

When you are ready to handle error cases, you remove them from the rail by using
the editor command `take-function-off-rail` (open the Command palette by hitting
`Ctrl-\` **on the function name**). The result will no longer be unwrapped, and
you can handle the `Option` or `Result` value directly. You will typically do
this using a `match`.

![unique/match.png](/img/unique/match_just.png)

See [our sample canvas](https://darklang.com/a/sample-match) for examples.

## Error rails with Incomplete and Type Errors

Incompletes and type errors are not the same as `Option` and `Result` types, and
cannot be used together. You cannot handle `<Incomplete>`s or type error using
the error rail.

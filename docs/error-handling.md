---
id: error-handling
title: Error Handling
sidebar_label: Error Handling
---

The Dark code you write in your handlers is available as soon as you type (deployless). We have a number of built-in features to support this style of writing, as well as dealing with errors.

## Incomplete Code

Dark is expression based. When you see "incomplete code", it means that your program isn't complete - that is, an expression hasn't been filled in. Once you've filled in every expression in the associated code block, the problem will be resolved.

**Example:** Here we've bound a string to the new variable `msg` within an empty block, using a `let`. Since the body of the `let` is empty, the expression as a whole is incomplete. To resolve the problem, fill in the body of the `let` (for example, with `msg`).

![assets/error/image11.png](assets/error/image11.png)

**Example:** Here we left the query parameter blank in a call to `HttpClient::get`:

![assets/error/image13.png](assets/error/image13.png)

We need to fill in all parameters, here we can use `{}`.

When something is incomplete, it will be shown with a red underline. An expression may be incomplete even if it seems fine: this is because something it depends on is incomplete. For example, in the case below we are returning `var` but never defined it:

![assets/error/image10.png](assets/error/image10.png)

In these cases, we provide a link to the source of the incomplete. Click on "click to locate source" and it will take you to the first blank that has propagated until the result you are looking for.

## Type errors

When you see "invalid code", it means that your program is complete but has issues (which are almost always type error). The error message should have enough . Carefully read the message to see what's wrong.

**Example:**

Here we tried to use **DB::set** with an Int for the `key` parameter, even though `key` needs to be a string.

![assets/error/image14.png](assets/error/image14.png)

To resolve this problem, we can use a string instead. "123" or 123 |> **toString** will both work.

## Error Rail

The error rail allows you to keep writing code along the “happy path,” without stopping to handle errors. This is based on [Railway Oriented Programming](https://medium.com/darklang/real-problems-with-functional-languages-efe668c5264a) and the UI elements are unique to Dark.

You can learn more about [which functions go to the error rail and how it works](https://darklang.github.io/docs/unique-aspects#functions-that-use-error-rail).

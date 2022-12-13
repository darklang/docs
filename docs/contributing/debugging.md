---
title: Debugging
---

## Log statements

TODO these are both out of date

Both the frontend and backend have simple log statements, which return `()`.

- Frontend (prints in the browser console): `Js.log2 "my message" anyValue`
- Backend (prints in `rundir/logs/server.log` in purple; search for
  **"INSPECT"**): `Log.inspecT "my message" any_value`

If you have existing code like this:

```rescript
let x = 5 in
let y = 6 in
x + y
```

You can add log statements like so:

```rescript
let x = 5 in
Log.inspecT "my message" x; (* or Js.log2, in the client)
let y = 6 in
x + y
```

## Fuzzer

## Contributor Editor Debugging Tools

There are some tools built into the Editor to help with debugging. These include
a Fluid debugger and the ability to view the AST of your handlers' code. You may
turn these on by going to the Contributing tab of the Settings menu within the
Editor.

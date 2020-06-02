---
title: Debugging
---

## Log statements

Both the frontend and backend have simple log statements, which return `()`.

- Frontend (prints in the browser console): `Js.log2 "my message" anyValue`
- Backend (prints in `rundir/logs/server.log` in purple; search for **"INSPECT"**): `Log.inspecT "my message" any_value`

If you have existing code like this:

```ocaml
let x = 5 in
let y = 6 in
x + y
```

You can add log statements like so:

```ocaml
let x = 5 in
Log.inspecT "my message" x; (* or Js.log2, in the client)
let y = 6 in
x + y
```



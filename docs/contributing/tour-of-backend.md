---
title: A tour of the Backend
---

## The journey of a HTTP request

When the users of a Dark developer's app (we refer to them as "grand-users")
makes a request to a Dark app, it makes it's way directly to the developer's
editor.

Here's the journey it takes:

- Google Load Balancer
- Nginx sidecar container
- the Dark
  [BwdServer](https://github.com/darklang/dark/blob/main/fsharp-backend/src/BwdServer/BwdServer.fs)
  (`bwd` stands for `BuiltWithDark`)
- our webserver is built on top of ASP.NET, and it directs the request to
  [BwdServer](https://github.com/darklang/dark/blob/main/fsharp-backend/src/BwdServer/BwdServer.fs)[runDarkHandler].
- if it's a 404, the event is stored in the `stored_events_v2` table and sent to
  the client via Stroller (a sort of reverse proxy written in Rust)
- if a page is found, the request is turned into an "input value", which is
  turned into a set of variables and passed to `Execution.runHttp` which calls
  `Interpreter.eval`, first running the code through the Dark Middleware in
  [LibMiddleware](https://github.com/darklang/dark/blob/main/fsharp-backend/src/LibExecution/StdLib/LibMiddleware.fs).
- `AST.eval` runs the Dark code, saving parts of the trace as it goes. Input
  values, function arguments and return values are saved in Postgres tables
  `stored_events_v2`, `function_arguments` and `function_results_v2`
- A trace is pushed to [Pusher](https://pusher.com), which forwards it to the
  editor, where it appears as a dot on the canvas.
- When a user clicks on the trace, the trace is loaded from the server. A web
  worker named `Fetcher` fetches the trace in the background, decodes it, and
  sends the value to the editor. On the server-side, it is fetched from the
  [ApiServer](https://github.com/darklang/dark/blob/main/fsharp-backend/src/ApiServer/Api.fs)

## Traces

A trace is a combination of an event (referred to in Dark as an "input value"
and in the code as `StoredEvent`), and the arguments and results of functions
called during the trace:

- event refers to the HTTP request, worker event, or in the case of Crons, an
  empty value, that is used to trigger the event handler
- the trace includes information for every call to every function during the
  event. For built-in functions, we record a hash of the arguments and the
  result. For canvas functions, we also store the arguments to the function.

## Serialization

Dark programs are directly serialized in our database, and loaded for any
requests that come in. Each change in the editor creates an Op for that toplevel
(DB, handler, function, etc). That is appended to the list of previous ops for
that handler, and serialized into the DB in an efficient binary format.

The ops contain the entire handler or function, which is much slower than it
could be (part of the reason that `undo` is so slow.

We cache/denormalize the current code for each handler, which makes requests
fast.

One downside of this is that we have to be very careful what changes we make the
Dark AST definition. There is a doc in the dark repo discussing this in more
detail.

## `Libexecution` and the editor

[`LibExecution`](https://github.com/darklang/dark/tree/main/fsharp-backend/src/LibExecution)
is the "execution engine" of Dark. The same code is compiled to native code to
respond to HTTP handlers, and is also compiled to WASM to run in the editor.

The play button on functions and on handlers executes the code on the server,
returning updates to the trace of those functions. In all other cases, the
editor runs code in the JS version, filling in the results of the functions it
doesn't have access to from the traces.

## Standard library

The standard library is split between
[`fsharp-backend/src/LibExecution/StdLib`](https://github.com/darklang/dark/tree/main/fsharp-backend/src/LibExecution/StdLib)
(for functions which are available on the client and backend) and
[`fsharp-backend/src/LibBackend/StdLib`](https://github.com/darklang/dark/tree/main/fsharp-backend/src/LibBackend/StdLib)
for functions which are only available on the backend (typically functions where
we cannot compile some library to JS).

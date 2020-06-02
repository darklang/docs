---
id: working-in-the-dark-repo
title: Working in the Dark repository
---

## Debugging:

### Log statements

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

## Writing a successful Pull Request message

When writing a pull request, there are some steps you can take to make it easier to accept the contribution:

- explain the problem you're solving. If this is explained elsewhere, link to it
- explain how your solution addresses the problem
- highlight any choices you've made in the implementation
- make clear what the product and user-facing changes are, especially if it could break anything for existing users
- if the change is in the editor, include a before/after screenshot or gif

Highlighting these will make it much easier to know that this code is safe.


## General concepts

**Coming soon**
### ASTs

### Traces & Live values

### Toplevels


## Editor / Client 

The editor is in `client/`. It started life as an Elm application, and still
uses the Elm Architecture (which we like). The current app is in Bucklescript.

### Elm architecture

The Elm architecture is a simple render loop, very similar to React (and especially redux):
- the entire application state is a single value called `model`
- each user action creates a `Msg`, which is passed to `Main.update`
- `Main.update` produces a new `model`, as well as some `Cmd`, which are interactions with the outside world.
- Executing the `Cmd` may introduce other `Msg`s, such as a `Cmd` which makes an API call - the API response would be handled using a `Msg`.
- Regularly, the `Main.view` command is called to generate HTML. The HTML uses a Virtual DOM, like Elm and React do, and diffs the new Virtual DOM against the old one, applying the diffs to the real DOM.

TODO: give an example of a lifecycle here

The implications are interesting:
- all changes are functional - there are no changes to the model except through the update,
- no callbacks - every event generates a message, which makes an orderly update,
- static typing - you are pretty much forced to handle all the events you create.

There are also some downsides:
- components aren't as neat as in React; often a change is spread across the application. Single changes often require changing 6 different files
- when you need something outside these bounds, it can be quite challenging to find out how to do it
- does not always play well with traditional JS libraries (however, for an app like ours which is often quite custom, this isn't that big a deal)

This is how Elm architectures typically work. Our app mostly works like this, but there are some exceptions:
- `Main.update` delegates most of the work to `Main.update'`. `Main.update'` produces a `Modification` instead of a `(Model, Cmd)`, and a modification then produces the `(Model, Cmd)` pair you expect.
- we do sometimes directly read from the DOM or other global state (like the random number generator or the History API)

And there are some downsides to our app as well:
- Main.ml is a mess
- modifications were a bad idea
- a single change can be spread far across the codebase

Fortunately, we have started componentizing a little bit, and this has helped. The Fluid codebase (actually editing the UI) for example is quite separated from unrelated code.

### The fluid editor

Whenever you type code, you are using the "fluid" editor. This is a structured editor that is designed to feel like text when typing.

A structured editor is means that you cannot write invalid code. The editor edits the AST of the program

**More coming soon**
### Command palette

### Autocomplete

### "Forms" editor

### Analysis

### Ops

### An API call, end-to-end


## A tour of the backend

**Coming soon**
### HTTP framework

### Traces

### The journey of a http request

### Serialization


## Glossary

**Coming soon**

- Toplevel
- Structural toplevel
- Function space
- Caret
- Cursor


## Repo layout

- .circleci - CI config file
- auth0-branding - has some assets for our login provider
- _build - build dir for OCaml (empty, this is a docker volume)
- backend - this is the main part of our backend, written in OCaml, including the language definition and execution engine, the "framework" (HTTP, DB, queues, etc), the editor's HTTP API, and the execution engine which runs in the client (compiled to JS from OCaml)
    - bin - "main" files for executables
    - jsanalysis - "main" file for client-side analysis/execution-engine
    - libbackend - the main HTTP server, and framework functionality (HTTP, DB, queues)
    - libcommon - some utilities shared between JS- and OCaml-compiled versions of backend
    - libexecution - the Dark language, including types, the runtime, most of the standard library, and of course the execution engine
    - libservice - library with some common functionality for OCaml services (backend, queues, cron)
    - libtarget - library to support certain functions in native and JS modes. Interface only.
    - libtarget.js - JS implementation of libtarget
    - libtarget.ocaml - OCaml implementation of libtarget
    - libunshared - platform specific (native) version of libunshared, which is used to provide types to libshared
    - migrations - SQL for migrations
    - node_modules - installation dir for Esy (package manager-ish thing for OCaml)
    - serialization - definition of a binary serialization format we use to store Dark programs
    - static - static HTTP assets (icons, fonts, etc)
    - swagger - deprecated old functionality
    - templates - where the single editor HTML template is stored
    - test - all backend unit tests
    - test_appdata - serialized mocked data for integration tests
- client - the editor, and the entire frontend application that is found under [darklang.com/a/yourcanvas](http://darklang.com/a/yourcanvas) (note, not darklang.com or the docs). Written in Bucklescript/ReasonML. All frontend functionality, except the server-side APIs used for it, are here
    - src/analysis - handles code related to live values - requesting from the server, storing, sending to the client-side execution engine
    - src/api - most requests to the HTTP API live here
    - src/app - important scaffolding for the application (settings, exception tracking, Main.ml)
    - src/canvas - misc files pertaining to layout
    - src/components - a number of parts of Dark have been componentized. They live here.
    - src/core - all the frontend types are defined here, also JSON  encoders and decoders for them
    - src/fluid - fluid is the "editing" portion of the editor, the thing you type code in. All editing of Dark code happens in here
    - src/forms - the "forms" editor, used for editing any form-like boxes (HTTP handler headings, DB fields, etc). Still recovering from when it was also how we wrote Dark code
    - src/package -the Dark package manager
    - src/prelude - builtin functions that are available in most other files (which start with `open Prelude`)
    - src/toplevels - HTTP handler, workers, REPLs, DBs, functions, etc, are all "toplevels"
    - src/util - generic utility code
    - static - some assets
    - styles - CSS
    - test - unit tests
    - workers - web workers used for analysis and fetching data from the server in the background
- config - a set of env vars for each environment. You'll be interested in the `dev` environment
- docs - sporadic documentation
- docs/production - documentation about how we run the Dark service
- integration-tests - integration tests, written in JS using testcafe. Flaky and brittle. Help welcome!
- lib - build directory used by Bucklescript
- libshared - a small set of types that are shared between the backend and client. New and in-progress.
- node_modules - installation dir for `npm`
- postgres-honeytail - a backend service used to send postgres logs to honeycomb (our observability vendor). The only Go in our repo.
- queue-scheduler - a Rust backend service that runs our queues.
- rundir - anything that runs and stores something stores it here
    - integration_test_logs
    - logs - logs from running services, especially server.log (backend)
    - screenshots - for integration tests
    - videos - for integration tests
- stroller - a Rust backend service that sits next to our OCaml backend. When the OCaml backend sends data to Pusher (websockets vendor) or Rollbar (exception tracking), it sends it to Stroller to send to the vendor instead. This allows execution to continue running immediately (our backend does not have efficient concurrency, so this is a hack to allow it)
- scripts - bash scripts to do common (and sometimes uncommon and therefore forgettable) actions on the repo. Using scripts is very very common.

## Changes to avoid

- Never change an existing function. Make a new one (with a new version) and deprecate the old one. It is however safe to fix the types on an existing function, or to change it's docstring.



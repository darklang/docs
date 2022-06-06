---
title: Repository directory structure
---

The Dark repo contains multiple services and compilation targets. For OCaml,
here's how the various directories intersect, and what language they use:

![Compilation targets and their respective directories](/img/contributing/compilation-targets.png)

## Directory listing

- `.circleci` - CI config file
- `.ionide` - config for F# VsCode plugin
- `.vscode` - VsCode config
- `auth0-branding` - has some assets for our login provider
- `_build` - build dir for OCaml (empty, this is a docker volume)
- `_esy` build dir for OCaml (empty, this is a docker volume)
- `backend` - this is the old backend, written in OCaml (the new backend is in
  fsharp-backend), including the language definition and execution engine, the
  "framework" (HTTP, DB, queues, etc), the editor's HTTP API, and the execution
  engine which runs in the client (compiled to JS from OCaml)
  - `bin` - "main" files for executables
  - `jsanalysis` - "main" file for client-side analysis/execution-engine
  - `libbackend` - the main HTTP server, and framework functionality (HTTP, DB,
    queues)
  - `libcommon` - some utilities shared between JS- and OCaml-compiled versions
    of backend
  - `libexecution` - the Dark language, including types, the runtime, most of
    the standard library, and of course the execution engine
  - `liblegacy` - libraries to help the F# backend reuse OCaml code
  - `libserialization` - binary serialization for Dark types
  - `libservice` - library with some common functionality for OCaml services
    (backend, queues, cron)
  - `libtarget` - library to support certain functions in native and JS modes.
    Interface only.
  - `libtarget.js` - JS implementation of `libtarget`
  - `libtarget.ocaml` - OCaml implementation of `libtarget`
  - `libunshared` - platform specific (native) version of `libunshared`, which
    is used to provide types to `libshared`
  - `migrations` - SQL for migrations
  - `node_modules` - installation dir for Esy (package manager-ish thing for
    OCaml)
  - `serialization` - definition of a binary serialization format we use to
    store Dark programs
  - `static` - static HTTP assets (icons, fonts, etc)
  - `swagger` - deprecated old functionality
  - `templates` - where the single editor HTML template is stored
  - `test` - all backend unit tests
  - `test_appdata` - serialized mocked data for integration tests
- `client` - the editor, and the entire frontend application that is found under
  [darklang.com/a/yourcanvas](http://darklang.com/a/yourcanvas) (note, not
  darklang.com or the docs). Written in Bucklescript/ReasonML. All frontend
  functionality, except the server-side APIs used for it, are here
  - `src/analysis` - handles code related to live values - requesting from the
    server, storing, sending to the client-side execution engine
  - `src/api` - most requests to the HTTP API live here
  - `src/app` - important scaffolding for the application (settings, exception
    tracking, `Main.ml`)
  - `src/canvas` - misc files pertaining to layout
  - `src/components` - a number of parts of Dark have been componentized. They
    live here.
  - `src/core` - all the frontend types are defined here, also JSON encoders and
    decoders for them
  - `src/fluid` - fluid is the "editing" portion of the editor, the thing you
    type code in. All editing of Dark code happens in here
  - `src/forms` - the "forms" editor, used for editing any form-like boxes (HTTP
    handler headings, DB fields, etc). Still recovering from when it was also
    how we wrote Dark code
  - `src/package` -the Dark package manager
  - `src/prelude` - builtin functions that are available in most other files
    (which start with `open Prelude`)
  - `src/toplevels` - HTTP handler, workers, REPLs, DBs, functions, etc, are all
    "toplevels"
  - `src/util` - generic utility code
  - `static` - some assets
  - `styles` - CSS
  - `test` - unit tests
  - `workers` - web workers used for analysis and fetching data from the server
    in the background
- `config` - a set of env vars for each environment. You'll be interested in the
  `dev` environment
- `docs` - sporadic documentation
- `docs/production` - documentation about how we run the Dark service
- `fsharp-backend` - The new backend written in F# and .NET. including the
  language definition and execution engine, the "framework" (HTTP, DB, queues,
  etc), the editor's HTTP API, and the execution engine which runs in the
  client.
  - `.paket` - Used by the paket/nuget package manager
  - `Build` - where the compiler puts compiled code. This is inside the
  - `paket-files` - Used by the paket/nuget package manager
  - `src/ApiServer` - webserver serving the editor and the API used by the
    editor
  - `src/BackendOnlyStdLib` - impl. of functions which need to be run on the
    backend, due to their connection to the DB, queues, etc.
  - `src/Benchmark` - a benchmark executable to measure the performance of Dark
    code
  - `src/BwdServer` - webserver that is grand-user facing (at builtwithdark.com)
  - `src/CronChecker` - trigger events for scheduled work
  - `src/LibBackend` - the framework functionality (HTTP, DB, queues, traces,
    secrets, serialization), including standard library functions which only run
    on the backend (and not in the client)
  - `src/LibExecution` - the Dark language, including types, the runtime, and of
    course the execution engine
  - `src/LibExecutionStdLib` - most of the standard library functions (anything
    that doesn't _need_ to be run on the backend)
  - `src/LibService` - library with some common functionality for F# services
    (currently just the backend, soon queues and cron)
  - `src/Prelude` - utilities, libraries, common types; used everywhere
  - `src/QueueWorker` - pulls user events from the queue and runs them
  - `src/Scripts` - some simple command-line programs that use F# libraries
  - `src/Tablecloth` - a standard library which matches the one we use in OCaml
    and bucklescript.
  - `src/Wasm` - "main" file for client-side analysis/execution-engine
  - `tests/FuzzTests` - code to fuzztest different parts of Dark
  - `tests/TestUtils` - utilities used in Tests and FuzzTests
  - `tests/Tests` - mostly unit tests for backend and libexecution functionality
  - `tests/testfiles` - unit test definitions for language and standard library
  - `tests/httptestfiles` - tests for the Dark HTTP server and middleware
  - `tests/httpclienttestfiles` - tests for the HTTP Library functions
- `integration-tests` - integration tests, written in JS using TestCafe. Flaky
  and brittle. Help welcome!
- `lib` - build directory used by Bucklescript
- `node_modules` - installation dir for `npm`
- `rundir` - anything that runs and stores something stores it here
  - `integration_test_logs`
  - `logs` - logs from running services, especially `fsharp-bwdserver.log` and
    `fsharp-apiserver.log` (backend)
  - `screenshots` - for integration tests
  - `videos` - for integration tests
- `scripts` - bash scripts to do common (and sometimes uncommon and therefore
  forgettable) actions on the repo. Using scripts is very very common. Anytime
  there's something interesting, we add a script to do it. Scripts are
  occasionally out of date.

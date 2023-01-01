---
title: Repository directory structure
---

The Dark repo contains multiple services and compilation targets. For OCaml,
here's how the various directories intersect, and what language they use:

![Compilation targets and their respective directories](/img/contributing/compilation-targets.png)

## Directory listing

- `.circleci` - CI config file
- `.ionide` - config for F# VSCode plugin
- `.vscode` - VSCode config
- `auth0-branding` - has some assets for our login provider
- `client` - the editor, and the entire frontend application that is found under
  [darklang.com/a/yourcanvas](http://darklang.com/a/yourcanvas) (note, not
  darklang.com or the docs). Written in ReScript. All frontend functionality,
  except the server-side APIs used for it, are here
  - `src/analysis` - handles code related to live values - requesting from the
    server, storing, sending to the client-side execution engine
  - `src/api` - most requests to the HTTP API live here
  - `src/app` - important scaffolding for the application (settings, exception
    tracking, `Main.res`)
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
  - `src/package` - the Dark package manager
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
- `backend` - The backend written in F# and .NET. including the language
  definition and execution engine, the "framework" (HTTP, DB, queues, etc), the
  editor's HTTP API, and the execution engine which runs in the client.
  - `.paket` - Used by the Paket/NuGet package manager
  - `Build` - where the compiler puts compiled code
  - `paket-files` - Used by the Paket/NuGet package manager
  - `src/ApiServer` - webserver serving the editor and the API used by the
    editor
  - `src/BackendOnlyStdLib` - implementation of functions which need to be run
    on the backend, due to their connection to the DB, queues, etc.
  - `src/Benchmark` - a benchmark executable to measure the performance of Dark
    code
  - `src/BwdServer` - webserver that is grand-user facing (at builtwithdark.com)
  - `src/ClientTypes` - type definitions of types that are used in client-server
    communication
  - `src/ClientTypes2BackendTypes` and `src/ClientTypes2ExecutionTypes` -
    mappings between 'internal' types and our client-facing types
  - `src/CronChecker` - trigger events for scheduled work
  - `src/HttpMiddleware` - where we define our middlewares used in Dark HTTP
    handlers
  - `src/LibAnalysis` -
  - `src/LibBackend` - the framework functionality (HTTP, DB, queues, traces,
    secrets, serialization), including standard library functions which only run
    on the backend (and not in the client)
  - `src/LibBinarySerialization` - types that we use to store Dark programs to
    our Postgres database
  - `src/LibExecution` - the Dark language, including types, the runtime, and of
    course the execution engine
  - `src/LibExecutionStdLib` - most of the standard library functions (anything
    that doesn't _need_ to be run on the backend)
  - `src/LibService` - library with some common functionality for F# services
    (currently just the backend, soon queues and cron)
  - `src/Prelude` - utilities, libraries, common types; used everywhere
  - `src/QueueWorker` - pulls user events from the queue and runs them
  - `src/Scripts` - some simple command-line programs that use F# libraries
  - `src/Wasm` - "main" module for client-side analysis/execution-engine
  - `tests/FuzzTests` - code to fuzztest different parts of Dark
  - `tests/TestUtils` - utilities used in Tests and FuzzTests
  - `tests/Tests` - mostly unit tests for backend and libexecution functionality
  - `testfiles/data` - text and binary files used during various backend tests
  - `testfiles/execution` - unit test definitions for language and standard
    library
  - `testfiles/httphandler` - tests for the Dark HTTP server and middleware
  - `testfiles/httpclient` - tests for the HTTP Library functions
- `integration-tests` - integration tests, written in JS using TestCafe. Flaky
  and brittle. Help welcome!
- `lib` - build directory used by ReScript
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

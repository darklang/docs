---
title: Repository directory structure
---

The Dark repo contains multiple services and compilation targets. For OCaml,
here's how the various directories intersect, and what language they use:

![Compilation targets and their respective directories](/img/contributing/compilation-targets.png)

# Directory listing

- `.circleci` - CI config file
- `auth0-branding` - has some assets for our login provider
- `_build` - build dir for OCaml (empty, this is a docker volume)
- `backend` - this is the main part of our backend, written in OCaml, including
  the language definition and execution engine, the "framework" (HTTP, DB,
  queues, etc), the editor's HTTP API, and the execution engine which runs in
  the client (compiled to JS from OCaml)
  - `bin` - "main" files for executables
  - `jsanalysis` - "main" file for client-side analysis/execution-engine
  - `libbackend` - the main HTTP server, and framework functionality (HTTP, DB,
    queues)
  - `libcommon` - some utilities shared between JS- and OCaml-compiled versions
    of backend
  - `libexecution` - the Dark language, including types, the runtime, most of
    the standard library, and of course the execution engine
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
- `integration-tests` - integration tests, written in JS using TestCafe. Flaky
  and brittle. Help welcome!
- `lib` - build directory used by Bucklescript
- `libshared` - a small set of types that are shared between the backend and
  client. New and in-progress.
- `node_modules` - installation dir for `npm`
- `postgres-honeytail` - a backend service used to send Postgres logs to
  Honeycomb (our observability vendor). The only Go in our repo.
- `queue-scheduler` - a Rust backend service that runs our queues.
- `rundir` - anything that runs and stores something stores it here
  - `integration_test_logs`
  - `logs` - logs from running services, especially `server.log` (backend)
  - `screenshots` - for integration tests
  - `videos` - for integration tests
- `stroller` - a Rust backend service that sits next to our OCaml backend. When
  the OCaml backend sends data to Pusher (websockets vendor) or Rollbar
  (exception tracking), it sends it to Stroller to send to the vendor instead.
  This allows execution to continue running immediately (our backend does not
  have efficient concurrency, so this is a hack to allow it)
- `scripts` - bash scripts to do common (and sometimes uncommon and therefore
  forgettable) actions on the repo. Using scripts is very very common.

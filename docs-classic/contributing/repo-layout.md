---
title: Repository directory structure
---

The Darklang repo contains multiple services and compilation targets

## Directory listing

- `.circleci` - CI config file
- `.ionide` - config for F# VSCode plugin
- `.vscode` - VSCode config
- `config` - a set of env vars for each environment. You'll be interested in the
  `dev` environment
- `docs` - sporadic documentation
- `docs/production` - documentation about how we run the Darklang service
- `backend` - The backend written in F# and .NET. including the language
  definition and execution engine, the "framework" (HTTP, DB, queues, etc), the
  editor's HTTP API, and the execution engine which runs in the client.
  - `.paket` - Used by the Paket/NuGet package manager
  - `Build` - where the compiler puts compiled code
  - `paket-files` - Used by the Paket/NuGet package manager
  - `src/BackendOnlyStdLib` - implementation of functions which need to be run
    on the backend, due to their connection to the DB, queues, etc.
  - `src/BwdServer` - webserver that is grand-user facing (at builtwithdark.com)
  - `src/ClientTypes` - type definitions of types that are used in client-server
    communication
  - `src/ClientTypes2BackendTypes` and `src/ClientTypes2ExecutionTypes` -
    mappings between 'internal' types and our client-facing types
  - `src/CronChecker` - trigger events for scheduled work
  - `src/ExecHost` - allow executing admin tasks (such as migrations) in
    production
  - `src/HttpMiddleware` - where we define our middlewares used in Darklang HTTP
    handlers
  - `src/LibBackend` - the framework functionality (HTTP, DB, queues, traces,
    secrets, serialization), including standard library functions which only run
    on the backend (and not in the client)
  - `src/LibBinarySerialization` - types that we use to store Darklang programs
    to our Postgres database
  - `src/LibExecution` - the Darklang language, including types, the runtime,
    and of course the execution engine
  - `src/LibExecutionStdLib` - most of the standard library functions (anything
    that doesn't _need_ to be run on the backend)
  - `src/LibRealExecution` - Small wrapper around LibExecution for running in
    production
  - `src/LibService` - library with some common functionality for F# services
    (currently just the backend, soon queues and cron)
  - `src/Prelude` - utilities, libraries, common types; used everywhere
  - `src/Parser` - parser for Darklang language
  - `src/QueueWorker` - pulls user events from the queue and runs them
  - `tests/TestUtils` - utilities used in Tests and FuzzTests
  - `tests/Tests` - mostly unit tests for backend and libexecution functionality
  - `testfiles/data` - text and binary files used during various backend tests
  - `testfiles/execution` - unit test definitions for language and standard
    library
  - `testfiles/httphandler` - tests for the Darklang HTTP server and middleware
  - `testfiles/httpclient` - tests for the HTTP Library functions
- `rundir` - anything that runs and stores something stores it here
  - `logs` - logs from running services, especially `bwdserver.log` (backend)
- `scripts` - bash scripts to do common (and sometimes uncommon and therefore
  forgettable) actions on the repo. Using scripts is very very common. Anytime
  there's something interesting, we add a script to do it. Scripts are
  occasionally out of date.

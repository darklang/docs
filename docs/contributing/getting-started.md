---
id: getting-started
title: Contributor Getting started guide 
---

# Get set up

- Sign the [CLA](https://cla-assistant.io/darklang/cla)
- Join the #contributors channel in the [Dark Slack](https://darklang.com/slack-invite)
- Go to #contributors and ask Paul Biggar to be added to the repo
- Follow the [First contribution](#first-contribution) guide below to make your first contribution
- Then, if you have a specific thing you'd like to build, talk to Paul
  in Slack and he can help you get that shipped. If you don't have a specific
  thing, Paul can help you get one.

# Set up the repo

***Reminder: Dark is proprietary software, not open source! Do not share it.***

Once you've been added to the repo, you'll be able to access https://github.com/darklang/dark, which is a monorepo containing the main OCaml backend, the editor (client in Bucklescript), as well as some auxilliary services used to run the Dark infrastructure.

- Run through the installation instructions in the [README](https://github.com/darklang/dark/blob/master/README.md)
- You should now be running `./scripts/builder --compile --test --watch` and seeing a completed build.

# First contribution

Let's talk you through the first contribution. You'll write a small unit test for a built-in function. This will get you through the process of contributing and get you familiar with how to get code into Dark.

### Make the change

We'll assume you have the repo set up as discussed above. Now we want to make the contribution. First, find a function which needs testing. Let's make some lists. First let's see what functions exists:

`grep -hoP "[A-Z][A-Za-z]+::[_a-zA-Z0-9]+" backend/libexecution/ -R | sort | uniq > exists`
And now which ones are tested

`grep -hoP "[A-Z][A-Za-z]+::[_a-zA-Z0-9]+" backend/test -R | sort | uniq > tested`

(Note that if these commands don't work for you, you can open a shell in the dev container with `./scripts/run-in-docker bash`, and run them there).

Now compare them:

`diff tested exists`

You'll see stuff liek this (with a `>`):

```ocaml
136a169
> List::member
137a171
> List::pushBack
139a174,175
> List::repeat
> List::reverse
```

OK, these functions need tests. Let's add one for `List::member`.

By looking through `backend/test/test_other_libs.ml` I see that `t_list_stdlibs_work` is the right place to add this test. An existing test looks like this:

```ocaml
check_dval
  "List::singleton works"
  (DList [Dval.dint 1])
  (exec_ast' (fn "List::singleton" [int 1])) ;
```

Let's go through this:

- `check_dval` is a test that checks that its 2nd and 3rd arguments are the same dval (a `dval` is a Dark value; every string, int, option, list, etc, are all represented as `dvals`. See [backend/libexecution/types.ml](https://github.com/darklang/dark/blob/master/backend/libexecution/types.ml) for the definition).
- `(DList [Dval.dint 1])` is a run-time Dark value with a list containing an int. In Dark, this would be `[1]`
- `exec_ast'` is a function to execute a given AST (`AST` means "abstract syntax tree" and is a compiler-y term for "some classes that represent a program".). *Note, there's also an `exec_ast` (no `'` at the end) which we are phasing out.*
- The AST being executed is a Function call to `List::singleton`, taking a single parameter, the integer `1`
- So this test checks that calling `List::singleton 1` gets you `[1]`. That seems right.

Let's make one for `List::member`:

```ocaml
check_dval
  "List::member works for empty lists"
  (DBool false)
  (exec_ast' (fn "List::member" [list []; int 1])) ;
```

So this checks whether `List::member [] 1` is `false` as we expect.

Add your function to `t_list_stdlibs_work` and save the file. It should automatically recompile and run the test.

Great, we're done!

### OCamlformat

We use a prettifier on all our files, and this is tested during CI on all PRs. To format, call `scripts/format format file_or_directory`. There is also a git hook you can use: installation instructions at https://github.com/darklang/dark/blob/master/scripts/pre-commit-hook.sh.


### Make a pull request

If you haven't already done so, make a fork of the Dark repo to allow you to make a PR. Go to [https://github.com/darklang/dark](https://github.com/darklang/dark) and click `fork`. Then change your remote in your git repo:

```bash
git remote rm origin
git remote add origin git@github.com:myGitHubUsername/dark.git
```

Then commit and push

```bash
git add backend
git commit -m "Add test for List::member"
git push --set-upstream origin first-contribution
```

Go back to github and make a pull request. Here's a good message for your pull request:

> "Hi - this is my first pull request. I noticed that List::member didn't have any tests so I added one."

While this doesn't follow our [Pull Request
guidelines](#writing-a-successful-pull-request-message), it's fine for a first
contribution (and you can ignore the checklist for this PR).

**And that's your first PR - congratulations!**

# How to contribute

## Picking a project

Dark is a project with a vision for where it is going. Unfortunately, that vision is not as documented as it could be. We'll work on that!

In the meantime, the best thing to align well with that vision is to be very communicative. While many projects will take drive-by contributions, we are only going to take contributions which move in the same direction we are going. So start by talking to us in #contributors, letting us know what you're thinking you need.

The best thing to do is something that is personally blocking you. Our main goal with opening Dark is to enable users to unblock themselves or to improve their experience. Many users have shown us long laundry lists of things that bother them - you might have one too. Bring us the list, and we'll talk about where to start.

If you don't have something personally blocking you, but want to contribute, we have an endless list of bugs and small features that have been asked for!

The important thing is to start small. Dark is nearly 100,000LOC. And we have the constraints of supporting users' production apps in a continuous delivery manner. You should aim for your first few contributions to be small and non-controversial, before trying to design a big feature or product change.

# Repo layout

- .circleci - CI config file
- ./auth0-branding - has some assets for our login provider
- ./_build - build dir for OCaml (empty, this is a docker volume)
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
    - src/app - importat scaffolding for the application (settings, exception tracking, Main.ml)
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

# Important coding techniques

## Debugging:

### Log statements

Both the frontend and backend have simple log statements, which return `()`.

- Frontend (prints in the browser console): `Js.log2 "my message" anyValue`
- Backend (print in rundir/logs/server.log in purple; search for *"INSPECT"*): `Log.inspecT "my message" any_value`

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

# Example contributions

## Adding a test

See **First contribution** above.

## Adding a function to the query compiler

Dark supports a subset of functions to be used in the query compiler. Those functions can be seen by reading the source in backend/libbackend/sql_compiler. To add new functions, look at binop_to_sql - those are functions that map directly from Dark's builtin types and standard library to Postgres 9.6's builtins. Functions which are easy to add will also have a direct mapping.

More complex functions need to be handled in lambda_to_sql directly.

Query compiler functions should all be tested. They have pretty good tests of basic functionality, but could do with more tests. If you want to start small, adding a test for an existing function is very welcome.

## Adding a standard library function

It's pretty easy to add functions to Dark's standard library. Not all functions should be added though, if it's dealing with a third party API for instance, that should be added in the package manager (coming soon).

Good candidates to be added in the standard library are functions which:

- are standard. If they feel like they belong in the List, String, Int, Float, Result, Option, UUID, Date, Dict, Bool, Bytes, DB, HTTPClient or HTTP (response) modules, they're welcome. We're interested in a broad set of functions here, so
- provide cryptographic functions: these are hard and slow to do in userspace. We wrap several OCaml libraries to provide our Crypto functions, and in one case a rust library. We want to expand our ability to support calling HTTP APIs, so any functions which support this are welcome

## Helping an initiative

We are in the midst of converting from several old ways of doing things to new ways of doing things. This process can be helped by small, straightforward contributions. These are especially good for a first-time contributor, especially one just learning OCaml. One example:

### Converting from old AST tests to new AST tests

All of our original language tests were written like this:

```ocaml
let t_string_trim_noop () =
  check_dval
    "stringTrimNoop"
    (exec_ast "(String::trim 'foo')")
    (Dval.dstr_of_string_exn "foo")
```

See the `exec_ast` call which reads that Lisp-y string? I thought I was clever, but that got really hard once it got to 2 or 3 lines.

Now we write these tests like this:

```ocaml
let t_string_trim_noop () =
  check_dval
    "stringTrimNoop"
    (exec_ast' (fn "String::trim" [str "foo"]))
    (Dval.dstr_of_string_exn "foo")
```

There are 263 tests that are written the new way, and 162 written the old way. Converting some to the new way would be very helpful

### Convert from yarn to npm

We started with yarn, but we get confused as some of our repos use `npm`, so we've decided to standardize on `npm`. Sadly, a few scripts rely on the yarn format, and there are yarn lock files. Quite a simple project to start though, esp for the Node/scripting inclined. Grep for `yarn` to get started.

### Stabilize integration tests

Our integration tests (./integration_tests) are written in test cafe. They are quite slow and reasonably flaky, and we have found that testcafe's technology does not let us test interesting parts of our code. Some ideas here:

- we are interested in potentially converting from testcafe to playwright. Doing a technical evaluation (converting 1 test perhaps) to start our conversion would be useful
- We are also interested in speeding these tests up and making them more reliable. We have not really looked at speed yet, we periodically look at reliability.

## Changes to avoid

- Never change an existing function. Make a new one (with a new version) and deprecate the old one. It is however safe to fix the types on an existing function, or to change it's docstring.

## Writing a successful Pull Request message

When writing a pull request, there are some steps you can take to make it easier to accept the contribution:

- explain the problem you're solving. If this is explained elsewhere, link to it
- explain how your solution addresses the problem
- highlight any choices you've made in the implementation
- make clear what the product and user-facing changes are, especially if it could break anything for existing users
- if the change is in the editor, include a before/after screenshot or gif

Highlighting these will make it much easier to know that this code is safe.



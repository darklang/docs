---
id: what-to-contribute
title: What to contribute
---

# List of reported bugs

We made  alist of the [bugs that have been reported] in the last month (alongside the bug reporter - please feel free to fix one of these even if you aren't the reporter).

We're going to move this list into the GitHub issues in the Dark repo, along with the backlog of bug reports we keep in our Trello.

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

# Larger Projects

Dark is a project with a vision for where it is going. Unfortunately, that vision is not as documented as it could be. We'll work on that!

In the meantime, the best thing to align well with that vision is to be very communicative. While many projects will take drive-by contributions, we are only going to take contributions which move in the same direction we are going. So start by talking to us in #contributors, letting us know what you're thinking you need.

The best thing to do is something that is personally blocking you. Our main goal with opening Dark is to enable users to unblock themselves or to improve their experience. Many users have shown us long laundry lists of things that bother them - you might have one too. Bring us the list, and we'll talk about where to start.

If you don't have something personally blocking you, but want to contribute, we have an endless list of bugs and small features that have been asked for!

The important thing is to start small. Dark is nearly 100,000LOC. And we have the constraints of supporting users' production apps in a continuous delivery manner. You should aim for your first few contributions to be small and non-controversial, before trying to design a big feature or product change.

# Helping an initiative

We are in the midst of converting from several old ways of doing things to new ways of doing things. This process can be helped by small, straightforward contributions. These are especially good for a first-time contributor, especially one just learning OCaml. One example:

## Converting from old AST tests to new AST tests

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

## Convert from yarn to npm

We started with yarn, but we get confused as some of our repos use `npm`, so we've decided to standardize on `npm`. Sadly, a few scripts rely on the yarn format, and there are yarn lock files. Quite a simple project to start though, esp for the Node/scripting inclined. Grep for `yarn` to get started.

## Stabilize integration tests

Our integration tests (./integration_tests) are written in test cafe. They are quite slow and reasonably flaky, and we have found that testcafe's technology does not let us test interesting parts of our code. Some ideas here:

- we are interested in potentially converting from testcafe to playwright. Doing a technical evaluation (converting 1 test perhaps) to start our conversion would be useful
- We are also interested in speeding these tests up and making them more reliable. We have not really looked at speed yet, we periodically look at reliability.


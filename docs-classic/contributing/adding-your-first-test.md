---
title: Adding your first test
---

Let's talk you through the first contribution. You'll write a small unit test
for a built-in function. This will get you through the process of contributing
and get you familiar with how to get code into Darklang.

_We're assuming you've got the repo is set up and the `builder` script is
running (or if you're running the devcontainer in VSCode, that the devcontainer
is running)!_

## Adding the test

We keep a list of functions which need tests an the
[Test Every Function issue](https://github.com/darklang/dark/issues/3262) - pick
your favorite.

As an example, let's add one for `Float::add_v0`.

Unit tests for Darklang functions are in `backend/testfiles/execution/*.tests"`,
typically named after the module we're in (e.g., in this case, we want
`float.tests`). See
[testfiles/README.md](https://github.com/darklang/dark/tree/main/backend/testfiles/README.md)
to see detailed notes on the options of how to write tests. An example test is:

```fsharp
Float.multiply_v0 26.0 0.5 = 13.0
```

This tests the function `Float::multiply_v0` by giving it parameters and an
expected result. We can write much more complicated functions too

Let's make one for `Float::add_v0`:

`Float.add_v0 26.0 0.5 = 26.5`

Add this to `float.tests`, save the file, and it should automatically recompile
and run the test.

(If you're running the container in VSCode, run
`./scripts/run-fsharp-tests --filter-test-list float` instead)

Great, we're done!

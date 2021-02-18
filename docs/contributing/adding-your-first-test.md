---
title: Adding your first test
---

Let's talk you through the first contribution. You'll write a small unit test
for a built-in function. This will get you through the process of contributing
and get you familiar with how to get code into Dark.

## Find a function that needs tests

Assuming the repo is set up and the `builder` script is running, let's find
something to test.

First let's see what functions exist:

`cat fsharp-backend/src/*/StdLib/*.fs | grep -v "//" | perl -n -e 'foreach ($_ =~ /name = fn "([A-Za-z0-9]+)" "([A-Za-z0-9]+)" (\d)/ ) { print "$1::$2_v$3\n" } ' | sort | uniq > exists`

And now which ones are tested:

`cat fsharp-backend/tests/testfiles/*.tests | grep -v '^\[' | grep -v "^\/\/" | perl -n -e 'foreach ($_ =~ /([A-Za-z0-9]+)\.([A-Za-z0-9]+_v\d)/ ) { print "$1::$2\n" } ' | grep -v Test | sort | uniq > tested`

_(Note that if these commands don't work for you, you can open a shell in the
dev container with `./scripts/run-in-docker bash`, and run them there)._

Now compare them:

`diff -u tested exists`

You'll see stuff like this:

```ocaml
@@ -157,9 +115,7 @@
 String::dropLast_v0
 String::endsWith_v0
 String::first_v0
-String::foreach_v0
 String::foreach_v1
-String::fromChar_v0
 String::fromChar_v1
 String::fromList_v0
 String::fromList_v1
```

The functions with a `-` in front of them do not have tests. Pick your favorite.

## Adding the test

As an example, let's add one for `Float::add_v0`.

Unit tests for Dark functions are in `fsharp-backend/Tests/testfiles/*.tests"`,
typically named after the module we're in (eg, in this case, we want
`float.tests`). See testfiles/README.md to see the format. An example test is:

```fsharp
Float.multiply_v0 26.0 0.5 = 13.0
```

This tests the function `Float::multiply_v0` by giving it parameters and an
expected result. We can write much more complicated functions too

Let's make one for `Float::add_v0`:

`Float.add_v0 26.0 0.5 = 26.5`

Add this to `float.tests`, save the file, and it should automatically recompile
and run the test.

Great, we're done!

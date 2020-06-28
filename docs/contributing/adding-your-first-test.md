---
title: Adding your first test
---

Let's talk you through the first contribution. You'll write a small unit test
for a built-in function. This will get you through the process of contributing
and get you familiar with how to get code into Dark.

## Find a function that needs tests

Assuming the repo is set up and the `builder` script is running, let's find
something to test.

First let's see what functions exists:

`grep -hoP "[A-Z][A-Za-z]+::[_a-zA-Z0-9]+" backend/libexecution/ -R | sort | uniq > exists`

And now which ones are tested:

`grep -hoP "[A-Z][A-Za-z]+::[_a-zA-Z0-9]+" backend/test -R | sort | uniq > tested`

(Note that if these commands don't work for you, you can open a shell in the dev container with `./scripts/run-in-docker bash`, and run them there).

Now compare them:

`diff tested exists`

You'll see stuff like this (with a `>`):

```ocaml
136a169
> List::member
137a171
> List::pushBack
139a174,175
> List::repeat
> List::reverse
```

These are the functions that need tests, so pick your favorite.

## Adding the test

As an example, let's add one for `List::member`.

By looking through `backend/test/test_other_libs.ml` I see that `t_list_stdlibs_work` is the right place to add this test. An existing test looks like this:

```ocaml
check_dval
  "List::singleton works"
  (DList [Dval.dint 1])
  (exec_ast (fn "List::singleton" [int 1])) ;
```

Let's go through this:

- `check_dval` is a test that checks that its 2nd and 3rd arguments are the
  same `dval` (a `dval` is a Dark value; every string, int, option, list, etc,
  are all represented as `dvals`. See
  [`backend/libexecution/types.ml`](https://github.com/darklang/dark/blob/main/backend/libexecution/types.ml)
  for the definition).
- `(DList [Dval.dint 1])` is a run-time Dark value with a list containing an
  int. In Dark, this would be `[1]`
- `exec_ast` is a function to execute a given AST (`AST` means "abstract
  syntax tree" and is a compiler-y term for "some classes that represent a
  program".). 
- The AST being executed is a function call (`fn`) to `List::singleton`, taking a
  single parameter, the integer `1`
- So this test checks that calling `List::singleton 1` gets you `[1]`. That
  seems right.

Let's make one for `List::member`:

```ocaml
check_dval
  "List::member works for empty lists"
  (DBool false)
  (exec_ast (fn "List::member" [list []; int 1])) ;
```

So this checks whether `List::member [] 1` is `false` as we expect.

Add your function to `t_list_stdlibs_work` and save the file. It should
automatically recompile and run the test.

Great, we're done!



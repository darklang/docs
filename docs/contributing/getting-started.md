---
title: Getting started
---

## Get repository access

- Sign the [CLA](https://cla-assistant.io/darklang/cla)
- Join the #contributors channel in the [Dark Slack](https://darklang.com/slack-invite)
- Go to #contributors and ask Paul Biggar to be added to the repo
- Follow the [First contribution](#first-contribution) guide below to make your first contribution
- Then, if you have a specific thing you'd like to build, talk to Paul
  in Slack, and he can help you get that shipped. If you don't have a specific
  thing, Paul can help you get one.

## Set up the repo

***Reminder: Dark is proprietary software, not open source! Do not share it.***

Once you've been added to the repo, you'll be able to access https://github.com/darklang/dark, which is a monorepo containing the main OCaml backend, the editor (client in Bucklescript), as well as some auxiliary services used to run the Dark infrastructure.

- Run through the installation instructions in the [README](https://github.com/darklang/dark/blob/master/README.md)
- You should now be running `./scripts/builder --compile --test --watch` and seeing a completed build.

## First contribution

Let's talk you through the first contribution. You'll write a small unit test for a built-in function. This will get you through the process of contributing and get you familiar with how to get code into Dark.

### Make the change

We'll assume you have the repo set up as discussed above. Now we want to make the contribution. First, find a function which needs testing. Let's make some lists.

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



---
title: Making your first Pull Request
---

Right now you've got uncommitted code, let's get that into a Pull Request on
GitHub.

## Formatting the code

We use a code formatter on all our files, and this is tested during CI on all
PRs. To format, call `scripts/formatting/format format`. There is also a
[git hook you can use](https://github.com/darklang/dark/blob/56a800909195829ef757e9a4444409af14c171ac/scripts/formatting/pre-commit-hook.sh).

## Set up your fork

Darklang uses a fork model for contributions, like many GitHub projects. Go to
the [Dark repo](https://darklang.com/darklang/dark) in your browser and click
`fork` to add a fork.

Then change your local repo to use the fork:

```bash
git remote rm origin
git remote add origin https://github.com/myGitHubUsername/dark.git
```

## Push

Finally commit and push

```bash
git add backend
git commit -m "Add test for List::member"
git push --set-upstream origin first-contribution
```

## Make the Pull Request

Go back to GitHub and make a pull request. Here's a good message for your pull
request:

> "Hi - this is my first pull request. I noticed that List::member didn't have
> any tests so I added one."

While this doesn't follow our
[Pull Request guidelines](making-a-pull-request.md#writing-a-successful-pull-request-message),
it's fine for a first contribution (and you can ignore the PR template too for
now).

**And that's your first PR - congratulations!**

(Note that if you haven't signed the CLA, a bot will prompt you to do so now.)

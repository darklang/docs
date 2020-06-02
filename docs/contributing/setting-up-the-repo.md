---
title: Setting up the Dark repo
---

## Get repository access

- Sign the [CLA](https://cla-assistant.io/darklang/cla)
- Join the [#contributors
  channel](https://darkcommunity.slack.com/archives/C014H6H6BB3) in the [Dark
  Slack](https://darklang.com/slack-invite)
- Go to [#contributors](https://darkcommunity.slack.com/archives/C014H6H6BB3)
  and ask Paul Biggar to be added to the repo
- Follow the [First contribution](#first-contribution) guide below to make your
  first contribution
- Then, if you have a specific thing you'd like to build, talk to Paul in
  Slack, and he can help you get that shipped. If you don't have a specific
  thing, Paul can help you get one.

## Set up the repo

***Reminder: Dark is proprietary software, not open source! Do not share it.***

Once you've been added to the repo, you'll be able to access https://github.com/darklang/dark, which is a monorepo containing the main OCaml backend, the editor (client in Bucklescript), as well as some auxiliary services used to run the Dark infrastructure.

- Run through the installation instructions in the [README](https://github.com/darklang/dark/blob/master/README.md)
- You should now be running `./scripts/builder --compile --test --watch` and seeing a completed build.



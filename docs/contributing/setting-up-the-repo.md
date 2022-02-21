---
title: Setting up the Dark repo
---

You can access the Dark repo at
[https://github.com/darklang/dark](https://github.com/darklang/dark). This is a
monorepo containing the main F# backend, the editor (client in ReScript), as
well as some auxiliary services (Rust mostly) used to run the Dark
infrastructure.

- **Note**: Dark is in a transition: the backend is changing from OCaml to F#,
  and the frontend language was called Bucklescript but is now called ReScript.
- Run through the installation instructions in the
  [README](https://github.com/darklang/dark/blob/main/README.md)
- You should now be running `./scripts/builder --compile --test --watch` and
  seeing a completed build.

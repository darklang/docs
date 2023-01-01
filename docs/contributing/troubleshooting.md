---
id: troubleshooting
title: Troubleshooting
---

If you're having problems contributing, we want to help:

- ask for help in [Discord](https://darklang.com/discord-invite). Or DM Paul
  Biggar directly if you prefer.
- make an [issue](https://github.com/darklang/dark/issues) describing the
  problem, and someone will come help.

Common fixes:

- Sometimes there are compilation problems where the build caches from various
  package managers we use (NPM, NuGet) develop problems. They can be fixed by
  clearing the build directories (which are in Docker volumes) by running the
  related scripts:
  - for client errors, use `./scripts/clear-bs-cache` and
    `./scripts/clear-node-modules`
  - for other errors, use `./scripts/clear-builder-volumes`
- Integration tests can be flaky and sometimes fail. In CI, we retry them before
  declaring failure.

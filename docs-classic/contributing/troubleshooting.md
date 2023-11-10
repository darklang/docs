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
  package managers we use (NuGet) develop problems. They can be fixed by
  clearing the build directories (which are in Docker volumes) by running the
  related scripts:
  - for dotnet errors, use `./scripts/build/clear-dotnet-build` (run in the
    container when it is running)
  - to clear the database, use `./scripts/build/clear-all-local-dbs` (run from
    the host when the container is stopped)
  - for other errors, use `./scripts/build/clear-builder-volumes` (run from the
    host when the container is stopped)
- If you're having issues with building the dockerfile (or opening the remote
  dockerfile in VSCode):
  - Update FORCE_BUILD in the Dockerfile to the next highest number, which will
    force a fresh build
  - Ensure you are not running as root (including calling `script/builder` using
    `sudo`)

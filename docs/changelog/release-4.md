# Darklang Release 4

August 1, 2022

_See the [blog post](https://blog.darklang.com/darklang-release-4/) for further
discussion._

## Standard library improvements

- Many standard library functions now have better descriptions, including much
  better formatting ([#4273](https://github.com/darklang/dark/pull/4273)).
  ![Better formatting](/img/changelog/pretty-descriptions.png)

- Add new version of `Result::fromOption`, which allows non-string errors
  ([#4272](https://github.com/darklang/dark/pull/4272)).

- Add new version of `Bytes::base64Decode`, which fails properly on invalid
  input ([#4287](https://github.com/darklang/dark/pull/4287)).

- Bug fix: In the editor, Dates were incorrectly offset based on your timezone
  ([#4260](https://github.com/darklang/dark/pull/4260)).

- Improved handling of 64-bit ints in editor
  ([#4257](https://github.com/darklang/dark/pull/4257)).

## Contributor improvements

- Allow contributors with ARM64 Macs to build Dark codebase
  ([#4237](https://github.com/darklang/dark/pull/4237)).

## Internal improvements

- We are in the process of rewriting the backend of the editor on top of Dark,
  including exposing more Editor-related functions
  ([#4278](https://github.com/darklang/dark/pull/4278)), and moving existing
  functionality to the new `dark-editor` canvas
  ([#4294](https://github.com/darklang/dark/pull/4294)).

- Tuples are not ready ready to release, but much of the behind the scenes work
  is done, including adding standard library functions
  ([#4311](https://github.com/darklang/dark/pull/4311)).

- We are working to expose more useful information in the editor, especially
  making the backend metadata accessible from the client
  ([#4277](https://github.com/darklang/dark/pull/4277),
  [#4254](https://github.com/darklang/dark/pull/4254),
  [#4284](https://github.com/darklang/dark/pull/4284),
  [#4288](https://github.com/darklang/dark/pull/4288),
  [#4281](https://github.com/darklang/dark/pull/4281),
  [#4282](https://github.com/darklang/dark/pull/4282),
  [#4252](https://github.com/darklang/dark/pull/4252),
  [#4256](https://github.com/darklang/dark/pull/4256),
  [#4279](https://github.com/darklang/dark/pull/4279),
  [#4331](https://github.com/darklang/dark/pull/4331)).

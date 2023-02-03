# Darklang Release 3

July 1, 2022

Darklang Release 3 is focused primarily on taking advantage of the recent
changes, including new StdLib functions, small languages changes, and sunsetting
old features.

_See the [blog post](https://blog.darklang.com/darklang-release-3/) for further
discussion._

## Language improvements

- When a function is called with a runtime error as an argument, return the
  runtime error instead of a new error
  ([#4095](https://github.com/darklang/dark/pull/4095)). This was a significant
  source of annoyance for devs trying to figure out why their code wasn't
  working.

- 64-bit ints now work end-to-end (previously we had two separate issues with
  numbers above `2^53` and numbers above `2^63`)
  ([#4209](https://github.com/darklang/dark/pull/4209))

## Stdlib improvements

- Allow `HttpClient::basicAuth_v0` and `HttpClient::basicAuth_v1` to run in the
  editor ([#4147](https://github.com/darklang/dark/pull/4147))

- Allow `Crypto::sha256_v0`, `Crypto::sha384_v0` to run in the editor
  ([#4146](https://github.com/darklang/dark/pull/4146))

- rename `String::toInt` to `Int::parse_v0`, making it work for 64 bit ints
  (previous version only supported 63-bit ints)
  ([#4191](https://github.com/darklang/dark/pull/4191))

- add `List::all` ([#4150](https://github.com/darklang/dark/pull/4150))

- Mark `Date::today` as impure
  ([#4149](https://github.com/darklang/dark/pull/4149))

- Add new versions of Date functions `Date::hour_v1`, `Date::minute_v1`, and
  `Date::second_v1`, which unlike the previous versions do not return negative
  results for dates before 1970!
  ([#4133](https://github.com/darklang/dark/pull/4133))

- Rename the `f` parameter of functions using first-class functions to `fn`
  ([#4156](https://github.com/darklang/dark/pull/4156),
  [#4150](https://github.com/darklang/dark/pull/4150))

- Use camelCase in all standard library parameters
  ([#4201](https://github.com/darklang/dark/pull/4201))

- Fix typos and poor wording in a lot of error messages and functions
  descriptions ([#4096](https://github.com/darklang/dark/pull/4096),
  [#4200](https://github.com/darklang/dark/pull/4200))

## Editor improvements

- Fix using secrets when run in the editor
  ([#4128](https://github.com/darklang/dark/pull/4128),
  [#4129](https://github.com/darklang/dark/issues/4129))

- Fix occasional crash in editor analysis
  ([#4117](https://github.com/darklang/dark/pull/4117),
  [#4098](https://github.com/darklang/dark/pull/4089),
  [#4070](https://github.com/darklang/dark/pull/4070))

- Remove the old (OCaml-based) analysis, reducing the size of the editor
  download and speeding up startup
  ([#4148](https://github.com/darklang/dark/pull/4158))

- Remove the canvas minimap which was causing a long hang when switching to edit
  functions ([#4106](https://github.com/darklang/dark/pull/4106))

## HTTP Framework improvements

- Load programs faster by removing 3-4 fewer DB requests during load
  ([#4051](https://github.com/darklang/dark/pull/4051))

## Internal improvements

- Make the Dark repo build on Mac with M1/M2 (arm) chips
  ([#4237](https://github.com/darklang/dark/pull/4237)).

- Remove a lot of old OCaml code
  ([#4140](https://github.com/darklang/dark/pull/4140),
  [#4138](https://github.com/darklang/dark/pull/4138),
  [#4195](https://github.com/darklang/dark/pull/4195),
  [#4158](https://github.com/darklang/dark/pull/4158),
  [#4074](https://github.com/darklang/dark/pull/4074),
  [#4225](https://github.com/darklang/dark/pull/4225))

- Remove all Rust from the codebase
  ([#4057](https://github.com/darklang/dark/pull/4057))

- Remove all Go from the codebase
  ([#4039](https://github.com/darklang/dark/pull/4039))

- Refactor the client (Rescript) codebase
  ([#4199](https://github.com/darklang/dark/pull/4199),
  [#4203](https://github.com/darklang/dark/pull/4203),
  [#4206](https://github.com/darklang/dark/pull/4206),
  [#4218](https://github.com/darklang/dark/pull/4218),
  [#4220](https://github.com/darklang/dark/pull/4220))

- Many steps to speed up the CI/CD pipeline
  ([#4090](https://github.com/darklang/dark/pull/4090),
  [#4088](https://github.com/darklang/dark/pull/4088),
  [#4087](https://github.com/darklang/dark/pull/4087),
  [#4083](https://github.com/darklang/dark/pull/4083),
  [#4068](https://github.com/darklang/dark/pull/4068))

- Allow multiple deploys more safely in our CI/CD pipeline
  ([#4082](https://github.com/darklang/dark/pull/4082),
  [#4076](https://github.com/darklang/dark/pull/4076),
  [#4073](https://github.com/darklang/dark/pull/4073),
  [#4072](https://github.com/darklang/dark/pull/4072),
  [#4067](https://github.com/darklang/dark/pull/4067))

- Refactor integration tests away from being one big file
  ([#4167](https://github.com/darklang/dark/pull/4167))

- Fail deploy if assets don't upload
  ([#4186](https://github.com/darklang/dark/pull/4186))

- Fix flaky tests ([#4205](https://github.com/darklang/dark/pull/4205),
  [#4207](https://github.com/darklang/dark/pull/4207),
  [#4222](https://github.com/darklang/dark/pull/4222))

- Remove unused DarkInternal functions
  ([#4056](https://github.com/darklang/dark/pull/4056))

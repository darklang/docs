---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## Darklang Release 5 (September 1, 2022)

Darklang Release 5 includes support for Tuples, a revamped settings panel with
new settings for contributors, and significant internal reworks.

### Major feature: experimental tuple support

Dark now has work-in-progress support for tuples
([#4265](https://github.com/darklang/dark/issues/4265),
[#4425](https://github.com/darklang/dark/pull/4425),
[#4404](https://github.com/darklang/dark/pull/4404),
[#4311](https://github.com/darklang/dark/pull/4311)) - unstructured lists of
heterogeneous data:

- Tuple expressions can be created by entering `(` in a blank expression
- Tuples may be deconstructed in `match` patterns
- New standard library functions have been added to work with Tuples:
  - `Tuple2::create`, `::first`, `::second`, `::swap`, `::mapFirst`,
    `::mapSecond`, `::mapBoth`
  - `Tuple3::create`, `::first`, `::second`, `::third`, `::mapFirst`,
    `::mapSecond`, `::mapThird`, `::mapAllThree`
- Tuple deconstruction (`let (lat long) = (39.9526, 75.1652)`) is not yet
  available, so creating tuples of size greater than 3 is not recommended at
  this time, unless you plan to use `match` expressions to deconstruct the
  values.
- Tuples are only available after opting in via Settings (see next section)
- More details on using tuples can be found in
  [Language Details](languagedetails###Tuples).

### Major feature: contributor settings

A new Contributor Settings page has been added, allowing devs to look under the
hood and use the same tools that employees are using to develop Darklang.

![contributor settings and tuple demo](/img/changelog/release-5-contrib-settings.gif)

In particular, devs can now build a local version of the Darklang editor, and
use it against their production Darklang codebase
([#4387](https://github.com/darklang/dark/pull/4387),
[#4402](https://github.com/darklang/dark/pull/4402))

We have also made it possible to enable the in-Editor debugger (note: this is
useful for the debugging the Darklang editor, not for debugging Darklang
programs) ([#4343](https://github.com/darklang/dark/pull/4343))

Finally, in-progress features can now be enabled for devs, starting with Tuples
([#4429](https://github.com/darklang/dark/pull/4429))

### Language improvements

- Allow floats where the whole number part is empty
  ([#4371](https://github.com/darklang/dark/pull/4371))

### Editor Improvements

- Allow pressing enter in more expression bodies
  ([#4438](https://github.com/darklang/dark/pull/4438))

- Fixed Undo functionality, which was briefly broken
  ([#4392](https://github.com/darklang/dark/pull/4392))

- Prevent Analysis errors due to using Tasks incorrectly
  ([#4436](https://github.com/darklang/dark/pull/4436))

- Revamping settings UI, adding reusuable components, animations, toggle
  switches, and switching to TailwindCSS
  ([#4375](https://github.com/darklang/dark/pull/4375),
  [#4401](https://github.com/darklang/dark/pull/4401),
  [#4420](https://github.com/darklang/dark/pull/4420),
  [#4426](https://github.com/darklang/dark/pull/4426))

### In-progress features - HttpClient and Http framework

The current HttpClient and Http framework are quite limited, only supporting
text request/response bodies, among many other problems. They also lack the
flexibility to control and compose their behaviour.

As part of rewriting the Static Assets feature in Dark itself
([#4259](https://github.com/darklang/dark/issues/4259)), we are creating
"thinner", more flexible, and more composable HttpClient
([#4366](https://github.com/darklang/dark/pull/4366)) and Http handlers
([#4353](https://github.com/darklang/dark/pull/4353))

### Internal Improvements

- Huge refactor of client types
  ([#4326](https://github.com/darklang/dark/pull/4326))
- Remove OCamlTypes (used for interop with the old OCaml backend)
  ([#4396](https://github.com/darklang/dark/pull/4396),
  [#4398](https://github.com/darklang/dark/pull/4398))
- Add internal function to load Ops for a TopLevel
  ([#4391](https://github.com/darklang/dark/pull/4391))
- Tidy F# fuzztests ([#4412](https://github.com/darklang/dark/pull/4412))
- Consolidate F# testfiles ([#4411](https://github.com/darklang/dark/pull/4411))

## Darklang Release 4 (August 1, 2022)

### Standard library improvements

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

### Contributor improvements

- Allow contributors with ARM64 Macs to build Dark codebase
  ([#4237](https://github.com/darklang/dark/pull/4237)).

### Internal improvements

- We are in the process of rewriting the backend of the editor on top of Dark,
  including exposing more Editor-related functions
  ([#4278](https://github.com/darklang/dark/pull/4278)), and moving existing
  functionality to the new `dark-editor` canvas
  ([#4294](https://github.com/darklang/dark/pull/4294)).

- Tuples are not ready ready to release, but much of the behind the scenes work
  is done, including adding standard library fuctions
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

## Darklang Release 3 (July 1, 2022)

Darklang Release 3 is focused primarily on taking advantage of the recent
changes, including new stdlib functions, small languages changes, and sunsetting
old features.

### Language improvements

- When a function is called with a runtime error as an argument, return the
  runtime error instead of a new error
  ([#4095](https://github.com/darklang/dark/pull/4095)). This was a significant
  source of annoyance for devs trying to figure out why their code wasn't
  working.

- 64bit ints now work end-to-end (previously we had two separate issues with
  numbers above `2^53` and numbers above `2^63`)
  ([#4209](https://github.com/darklang/dark/pull/4209))

### Stdlib improvements

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

### Editor improvements

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

### Http Framework improvements

- Load programs faster by removing 3-4 fewer DB requests during load
  ([#4051](https://github.com/darklang/dark/pull/4051))

### Internal improvements

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

## Darklang Release 2 (June 6th, 2022)

Darklang Release 2 is the culmination of 20 months work of rewriting the backend
from OCaml to F#. This was done to give us more productivity by allowing us use
more 3rd party SDKs, to solve operational issues, and to make it easier to
contribute. Our reasons for making the change were discussed at the time:
[1](https://blog.darklang.com/new-backend-fsharp/),
[2](https://blog.darklang.com/why-dark-didnt-choose-rust/),
[3](https://blog.darklang.com/leaving-ocaml/).

- The editor backend was fully migrated by April 2nd.
- HTTP backends (for builtwithdark.com) were finished converting on May 3rd.
- The migration to the new queues was fully converted on May 27th.
- The execution engine in the editor was switched over on June 5th.

The change was documented in a series of blogposts:
[1](https://blog.darklang.com/hows-the-dark-rewrite-going/),
[2](https://blog.darklang.com/changes-the-the-dark-rewrite/),
[3](https://blog.darklang.com/optimizing-tasks-in-fsharp/),
[4](https://blog.darklang.com/benchmarking-fsharp6-tasks/),
[5](https://blog.darklang.com/darklang-year-in-review-2021/),
[6](https://blog.darklang.com/try-out-the-new-darklang-backend/), and
[7](https://blog.darklang.com/backend-rewrite-complete/).

Thanks to everyone who contributed, including
[Araceli Sánchez](https://github.com/Athinanarof),
[Lev Lazinskiy](https://github.com/levlaz),
[María José Dávila](https://github.com/mariajdab),
[Matthew Jeffryes](https://github.com/mjeffryes),
[jwalter](https://github.com/jwalter),
[Daniela Campagna](https://github.com/danicampagna),
[Sean Manton](https://github.com/sxmanton), and especially
[Stachu Korick](https://github.com/stachudotnet).

### Major changes

- Darklang's implementation is now asynchronous, meaning that your programs will
  no longer be stuck behind other users' programs making HTTP or DB calls. This
  was a major source of slow Dark programs experienced by most users.

  As well as massively reducing latency for programs written in Dark, the editor
  now loads much faster.

  We have also switched from dozens of tiny machines to a smaller number of much
  more powerful machines. This makes your programs run faster on average, even
  when accounting for the switch to an asynchronous implementation.

- You can now put a lambda in a variable and pipe into it.

- Most error messages are improved, especially for bad input.

- The queues have been rewritten and should not longer suffer from the old
  sources of occasional downtime and slow-down.

- During a deploy of the Dark service, cron jobs no longer run the risk of
  running twice.

- There is now a [Status page](https://status.darklang.com).

- Dark's internal firewalls have been significantly improved

- Several bottlenecks to outbound HTTP requests have been identified and removed

- `String::length` is now `O(1)` instead of `O(N)`

- JSON output is now significantly faster

- When reading strings from a user, the string is only passed over once.

- Traces are now stored in the background, after a request has completed,
  greatly reducing response time on HTTP requests to Dark programs.

- Dark has moved to more powerful cloud machines, going from Google' Cloud's
  deprecated N1 machines to extremely powerful T2D machines (2.3x faster)

- The rewrite also addressed some underlying issues that will come out in new
  features soon, including a better type system, support for characters and
  tuples, fixes for poor behaviour in Date and String functions, and more. These
  issues are tracked in our new
  [project tracker](https://github.com/darklang/dark/projects/1#column-15173588).

#### Error messages

All error messages have been renovated, attempting to make them more consistent
and to reuse error message machinery. As a result, a majority of Dark error
messages have changed. If you were relying on the explicit format of a Dark
language or stdlib error message, expect that it will be different.

If you do any error handling which relies specifically on the text of an error
message coming from Dark, we recommend you no longer do that, and just use the
presence of the error instead of the text.

There are two places in Dark which use string error messages:

##### `Result.Error`s

The `Error` enum (referred to as `Result.Error` below for clarity), will contain
a string error in most cases, which you might be using directly or indirectly.

You might be accessing `Result.Error`s and their text contents directly using
the `match` statement.

You might also be accessing their text contents indirectly, using `toString`, or
other stringifying functions, such as `toString`, `JSON::` functions and
`HTTPClient::` functions. This is only true if you taken the function returning
the `Result.Error` off the error rail. This text may also make it to your
web/mobile clients or API consumers.

`Result.Error`s returned via a HTTP handler are not presented to the user, so
text cannot leak that way.

##### Runtime errors

Runtime errors (including type errors) are not accessible via Dark programs, and
will always terminate the Dark program when they are accessed. As a result, the
text of any runtime error should not be accessible to your programs or your
users.

### Minor improvements and fixes

- Dark used to return the `Access-Control-Allow-Origin` header in lower-case, it
  is now returned in mixed case.

- When making a web request to your Dark application, if you did not specific a
  'user-agent' header, Dark used to add a 'user-agent' header of
  'ocaml-cohttp/1.2.0'. We no longer add this header.

- When making a web request to your Dark application with a 'content-type'
  header of "text/ping", Dark used to ignore the code and immediately return a
  response of status code 418. It now processes the request instead.

- `HttpClient::*` functions called with usernames and passwords in the url can
  now support arbitrary UTF8 (in the past, Unicode was not supported.)

- `X509::pemCertificatePublicKeys` used to only work for RSA keys. It now also
  supports DSA and ECDsa keys. The old version would read ECDsa keys and return
  an incorrect answer - it now returns a correct answer.

- `String::split` would fail if the 2nd argument was `""` and the first argument
  was a complex Unicode character, such as `String::split "👨‍❤️‍💋‍👨👩‍👩‍👧‍👦🏳️‍⚧️‍️🇵🇷" ""`. This
  is now split correctly.

- `String.trim`, `String::trimEnd` and `String::trimStart` worked incorrectly in
  some Unicode situations, they now work correctly.

### Breaking changes

These breaking changes were documented and announced many months in advance of
switching over to the new version of Darklang. We also very careful deployed the
new code, watching for suspisious changes in any Dark programs that were
running. In the rare case where something went awry, we contacted the users and
worked with them to ensure a seamless transition.

#### String casing

- `String::toLowercase_v0` and `String::toUppercase_v0` worked correctly in the
  old version of Dark, for all unicode. In the new version, the library we are
  using does not correctly handle some case changes, instead keeping the
  original character. This happens when the replacement is a different length
  than the character being replaced (for example, `"և"` should be `"ԵՒ"` when
  converted to upper case, which the old version did correctly and the new
  version does not). We plan to fix this at a later point.

#### String ordering

- Functions whose output relies on the internal ordering of a `Dict` may have
  different outputs, specifically, the output Lists may be in a different order.
  Examples include `Dict::keys`, `Dict::values`, and `Dict::toList` which return
  `List`s of values which are ordered based on the internal ordering in the
  original `Dict`.

- When calling `List::uniqueBy`, and there is a duplicate, the new version of
  Dark may pick a different value for the duplicate. For example:

```dark
List.uniqueBy_v0 [1;2;3;4] (fun x -> Int.divide_v0 x 2) = [ 1, 3, 4 ] // old Dark
List.uniqueBy_v0 [1;2;3;4] (fun x -> Int.divide_v0 x 2) = [ 1, 2, 4 ] // new Dark
```

#### Http Clients

- `HttpClient::*` functions no longer support making requests with arbitrary
  `Content-Type`s. They must now be
  [valid](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type),
  for example `"application/json"` or `"application/json; charset=utf-8"`.

#### Generating JSON

We have changed how JSON is generated in many cases. All the JSON generated by
Dark is now standards compliant, and uses a different formatting style.

In the old version of Dark, we would generate invalid JSON for the Float values
`NaN`, `Infinity` and `-Infinity`. The old version of Dark generates them as
bare identifiers, while the new version puts them in a string (eg `NaN` vs
`"NaN"`).

This may occur in any of the places in which we generate JSON, which are:

- when responding to a HTTP request in the HTTP framework
- when making a request with HttpClient (any version)
- when calling any of:
  - `Dict::toJson_v0`
  - `Object::toJson_v1` (_deprecated_)
  - `Object::toJson_v0` (_deprecated_)
  - `Twilio::sendText_v1`
  - `Twilio::sendText_v0` (_deprecated_)

Note that the following `JWT` functions do not use this new behaviour, and
should have the exact same behaviour as before, including:

- `JWT::signAndEncode_v0` (_deprecated_)
- `JWT::signAndEncode_v1`
- `JWT::signAndEncodeWithHeaders_v0` (_deprecated_)
- `JWT::signAndEncodeWithHeaders_v1`

#### Parsing JSON

When parsing JSON, we no longer accept the following invalid JSON:

- bare field names, such as in `{ id : 5 }`. You need to quote field names:
  `{ "id": 5 }`
- newlines and invalid bytes in JSON strings
- the bare identifiers `NaN`, `Infinity` and `-Infinity` are no longer parsed
  into valid floats (note that the old version of Dark might have generated JSON
  with these values in it)

Dark now also allows parsing 64-bit integers (as opposed to 63-bit integers
before).

Dark parses JSON:

- when receiving a HTTP request in the HTTP framework
- when receiving a response to a request made with HttpClient (any version)
- when calling any of:

  - `JSON::parse_v1`
  - `JSON::parse_v0` (_deprecated_)
  - `JSON::read_v0` (_deprecated_)
  - `JSON::read_v0` (_deprecated_)

Note that `JWT::verifyAndExtract_v0` and `JWT::verifyAndExtract_v1` are not
affected by this change, as they have been kept deliberately compatible with the
old versions.

#### HTTP stack

Dark has switched to using Kestrel, a high-performance HTTP server from .NET,
for its HTTP server. There are some differences between the new Kestrel-based
server and the previous OCaml `cohttp`-based server:

Large differences:

- Dark programs can no longer set the HTTP `Content-Length` header and it will
  be set automatically. A `Content-Length` header will be ignored if provided
  via `Http::response` or similar functions.

- Dark is now less lenient to receiving incorrect `Content-Length` headers. If
  the data sent does not match the expected `Content-Length`, the HTTP server
  will return a 400 Bad Request error. Omitting the `Content-Length` header is
  still OK.

- JSON returned from HTTP requests is now formatted differently, as discussed
  above.

Minor differences:

- When making HTTP requests to Dark:
  - Clients must send at least 256 bytes every 5 seconds or be timed-out
  - All headers must be sent in first 10 seconds
  - There must be fewer than 100 headers and they must fit in 32KB
  - The maximum size of HTTP requests to Dark is 10MB
- Http responses sent by Dark
  - Headers will be returned in a different order
  - Headers are not always lowercase anymore
  - The `Date` header is now always present
  - The `Server` header is now `darklang` and always present

### Testing changes

We have gone from about 250 backend tests to over 5,000. We now have custom test
frameworks for:

- [language and standard library testing](https://github.com/darklang/dark/tree/main/fsharp-backend/tests/testfiles)

- [Http server testing](https://github.com/darklang/dark/tree/main/fsharp-backend/tests/httptestfiles)

- [Testing Http clients](https://github.com/darklang/dark/tree/main/fsharp-backend/tests/httpclienttestfiles)

- [Fuzz testing](https://github.com/darklang/dark/tree/main/fsharp-backend/tests/FuzzTests)

- [Integration tests](https://github.com/darklang/dark/tree/main/integration-tests)
  were ported to [Playwright](https://playwright.dev/), from TestCafe. They now
  run much faster and are somewhat easier to write.

### Operational changes

Behind the scenes, Dark has greatly improved its operations.

- Switched to massively more powerful servers (requests now get 2 CPUs of a
  [Google Cloud T2D](https://cloud.google.com/blog/products/compute/compute-engine-tau-t2d-vms-now-available-for-scale-out-workloads),
  vs 0.1 CPUs of a n1d -- T2Ds are about 2.3x more powerful than N1Ds)

- Separated the servers used by the Darklang editor from the ones running
  production applications.

- Massively increased use of [observability](https://honeycomb.io) and error
  tracking to catch errors and customer issues

- Moved queues from running in the database (often taking over 50% of the CPU,
  to relying on our cloud vendor (Google PubSub). Also greatly increased
  reliability of the queues.

- Nodes are now autoscaled, leading to significant cost savings.

- Updated to latest version of kubernetes, cert-manager (which powers our
  [custom domains](https://docs.darklang.com/how-to/custom-domains) feature),
  nginx, and other tools that we use.

- Added internal [feature flagging](https://launchdarkly.com) to give us more
  control over how our infrastructure runs in production

- Significantly increased use of kubernetes' security features, in particular
  internal firewalls.

- Standardized our production deployment process using a tool we wrote called
  [shipit](https://github.com/darklang/dark/blob/8082df91676de2f26a0661bf20827a60976bb3c0/scripts/deployment/shipit)

- Removed nginx from our builtwithdark.com backends

- Move migrations out from startup code

- All certs except darksa.com and darkstaticassets.com are now managed
  automatically

### Documentation changes

- moved docs to docs.darklang.com
- [refactored docs](https://github.com/darklang/docs/pull/220) to use the Divio
  documentation system, categorizing all docs into Tuotials, Reference, How-tos,
  Walk-throughs and Discussion.
- fixed all links
- redo the
  [Error Rail discussion](https://docs.darklang.com/discussion/error-handling)
- add a discussion of
  [how the Queues work](https://docs.darklang.com/discussion/queues)
- improved and expanded
  [keyboard shortcuts docs](https://docs.darklang.com/reference/keyboard-mapping)

### Contributing changes

- Added
  [coding guidelines](https://github.com/darklang/dark/blob/main/CODING-GUIDE.md)

- Added significant documentation, especially READMEs and design decisions,
  throughout the [darklang repo](https://github.com/darklang/dark)

- Moved 99% of project collaboration to our
  [public github](https://github.com/darklang/dark) and
  [public community slack](https://darklang.com/slack-invite)

- ported our
  [contributor guides](https://docs.darklang.com/contributing/rescript-and-fsharp-for-dark-developers)
  to F#

## July 13th, 2020

### Product changes

- Secrets now work in Functions
  ([#2724](https://github.com/darklang/dark/pull/2724))
- When copying strings from live values, Dark now omits the quotes
  ([Brian Chen](https://github.com/br1anchen),
  [#2723](https://github.com/darklang/dark/pull/2723))
- Renaming rebound variables now properly renames the variables in the
  right-hand side of the rebinding expression
  ([Brian Chen](https://github.com/br1anchen),
  [#2722](https://github.com/darklang/dark/pull/2722))
  ![Renaming a variable](/img/changelog/2722.gif)
- Added support for `Date::atStartOfDay`, `Date::day` ,
  `Date::minute`,`Date::month` ,`Date::second`, and `Date::year` to the query
  compiler. ([David Cooley](https://github.com/cooleydw494),
  [#2720](https://github.com/darklang/dark/pull/2720))
- Ensure the autocomplete menu covers the play button
  ([Brian Chen](https://github.com/br1anchen),
  [#2717](https://github.com/darklang/dark/pull/2717))
- Show unused functions in a different color (to signify that they are unused
  and can be deleted) ([#2713](https://github.com/darklang/dark/pull/2713))
  ![Unused functions in a different color](/img/changelog/2713.png)
- Show canvas name in the browser's title (useful if you've multiple canvases
  open) ([#2708](https://github.com/darklang/dark/pull/2708))
- Highlight duplicate fields in records in red to indicate an error
  ([Brian Chen](https://github.com/br1anchen),
  [#2705](https://github.com/darklang/dark/pull/2705))
  ![Duplicate fields, highlighted in red](/img/changelog/2705.png)
- Add support for `String::replaceAll` to the query compiler
  ([David Cooley](https://github.com/cooleydw494),
  [#2692](https://github.com/darklang/dark/pull/2692))
- Typing a comma in a list will now complete the autocomplete
  ([Mehmet Aydin Bahadir](https://github.com/actuallymab),
  [#2650](https://github.com/darklang/dark/pull/2650))

### Documentation and tutorial changes

- The footer on [https://darklang.com](https://darklang.com) now points to many
  more Learning and Community pages
  ![The new homepage footer](/img/changelog/footer.png)
- Documentation now supports a Dark mode

### Contributor-related changes

- Greatly expand the "General Concepts" documentation
  ([#175](https://github.com/darklang/docs/pull/175))
- Improve documentation around using vim with merlin
  ([Felipe Milani](https://github.com/fmilani),
  [#2685](https://github.com/darklang/dark/pull/2685))
- The repo has standardized on "allowlist" and "blocklist"
  [#2636](https://github.com/darklang/dark/pull/2636))
- Change the default branch on Dark repos to `main`
  [#2635](https://github.com/darklang/dark/pull/2635))
- New PR template ([#2632](https://github.com/darklang/dark/pull/2632))
- Update the Pull Request
  [code checklist](https://darklang.com/docs/contributing/making-a-pull-request)

## Weeks of 6/15/2020 and 6/22/2020

- There has been a
  [significant restructure](https://blog.darklang.com/dark-and-the-long-term/)
  to the Dark project. We'll write more about this going forward: Paul has
  [a new devlog](https://dev.to/darklang/dark-devlog-1-fresh-start-1i2) that
  talks about it.
- We now have a
  [status channel](https://darkcommunity.slack.com/archives/C016LAW6W73/) in the
  community Slack. You can join the Slack community
  [here](https://darklang.com/slack-invite)!
- The [Dark repo](https://github.com/darklang/dark) is now _source available_.
  This hasn't been publicly announced yet, but you can now
  [file issues](https://github.com/darklang/dark/issues) directly, and also
  [contribute](https://docs.darklang.com/contributing/getting-started).
- Added a contributing doc, showing how you can help if
  [you don't know OCaml](https://docs.darklang.com/contributing/if-you-dont-know-our-stack).
- `Date::hour_v1` is now supported in the query compiler.
  ([David Cooley](https://github.com/cooleydw494),
  [#2639](https://github.com/darklang/dark/pull/2639))
- When code is not synced due to the server being unavailable, an error message
  correctly explains what happened ([Felipe Milani](https://github.com/fmilani),
  [#2605](https://github.com/darklang/dark/pull/2605))
- `HTTPClient` requests coming from Dark now time out after 30 seconds
  [#2661](https://github.com/darklang/dark/pull/2661)

## Week of 6/12/2020

- Secrets are now available! Now you can store API keys, passwords and other
  sensitive information separately from the rest of your canvas. Secrets will
  appear in autocomplete in handlers across your entire canvas. They will appear
  redacted in traces and live values, so it's now easier to stream and
  screenshot your Dark code!

  ![changelog/June12/secrets.png](/img/changelog/June12/secrets.png)

- Onboarding and tooltip updates

  - The styling of our tooltips and initial tutorial has been updated

  ![changelog/June12/tooltips.png](/img/changelog/June12/tooltips.png)

  - Tips are now available in the function space.
  - More helpful links have been added to the avatar menu.

- The SQL compiler now supports `Date::add` and `Date::subtract`
  ([Aash Anand](https://github.com/aashanand))
- The newest version of a function will now always appear first in autocomplete
  ([Felipe Milani](https://github.com/fmilani))
- Standard library functions added:
  - `Date::atStartOfDay` ([Michael Wizner](https://github.com/mwz))
  - `Date::today` ([Thomas Alcala Schneider](https://github.com/ThomasMarcel))
  - `List::dropWhile`
    ([Thomas Alcala Schneider](https://github.com/ThomasMarcel))
- The following contributors wrote and updated tests and made CSS improvements:
  [billy1kaplan](https://github.com/billy1kaplan),
  [Brian Chen](https://github.com/br1anchen)

### Documentation

- Detailed documentation is now available around
  [workers](https://docs.darklang.com/reference/framework/workers) and
  [crons](https://docs.darklang.com/reference/framework/cron)
- We've begun to create short videos explaining Dark concepts. They will be
  added throughout the documentation, and a
  [full playlist](https://www.youtube.com/playlist?list=PLpcgNq_UYVoNZVoPEdqoNVemixjkrye83)
  is available on our
  [Youtube channel](https://www.youtube.com/channel/UCYUv1H0ENhZa4lNjOL-EiYg/featured).

## Week of 6/5/2020

- Function references now appear when you're using a
  [package manager](https://docs.darklang.com/reference/packages) function.

![changelog/June5/Screen_Shot_2020-06-05_at_2.08.39_PM.png](/img/changelog/June5/Screen_Shot_2020-06-05_at_2.08.39_PM.png)

- We've updated some tips and error messages.

  - On 404s

  ![changelog/June5/Screen_Shot_2020-06-05_at_2.10.46_PM.png](/img/changelog/June5/Screen_Shot_2020-06-05_at_2.10.46_PM.png)

  - On functions that have not yet been run

  ![changelog/June5/Screen_Shot_2020-06-05_at_2.14.05_PM.png](/img/changelog/June5/Screen_Shot_2020-06-05_at_2.14.05_PM.png)

  - When attempting field access on a datastore

![changelog/June5/Screen_Shot_2020-06-05_at_2.16.10_PM.png](/img/changelog/June5/Screen_Shot_2020-06-05_at_2.16.10_PM.png)

- If you attempt to access Dark via a browser other than Chrome we now link you
  to our [experimental desktop client](http://darklang.com/desktop-client).
- Variables can now be converted to lists by pressing `[`
  ([Jelle Besseling](https://github.com/pingiun))

![changelog/June5/2020-06-05_14.19.05.gif](/img/changelog/June5/2020-06-05_14.19.05.gif)

- Added a `convert-if-to-match` option to the command palette
  ([Jelle Besseling](https://github.com/pingiun))

![changelog/June5/2020-06-05_14.21.05.gif](/img/changelog/June5/2020-06-05_14.21.05.gif)

- References are now shown in the order in which they appear
  ([Jelle Besseling](https://github.com/pingiun))
- `String::trim` functions are now supported in the query compiler
  ([David Cooley](https://github.com/cooleydw494))
- `DB::getMany` now returns an `Option`
  ([Caleb H](https://github.com/naclcaleb))
- Added font-ligature for lambas ([Daniel Sokil](https://github.com/s0kil))
- Copy to cURL now uses single quotes instead of double quotes
  ([Jelle Besseling](https://github.com/pingiun))

### Standard library

- Standard library functions added:
  - `Crypto::md5` ([Jelle Besseling](https://github.com/pingiun))
  - `List::member` ([Christopher Brandt](https://github.com/xtopherbrandt))
  - `List::takeWhile` ([Jelle Besseling](https://github.com/pingiun))
  - `DB::queryCount` ([Brandon Hamilton](https://github.com/brandonhamilton))
  - `DB::getExisting` ([Caleb H](https://github.com/naclcaleb))
  - `String::prepend` ([Brandon Hamilton](https://github.com/brandonhamilton))

### External contributions

We have started taking external contributions, thanks so much to all the folks
who contributed. In addition to the user facing changes above, contributors also
added:

- Switched the Dark repo from using `yarn` to `npm`
  ([Shahriyar Nasir](https://github.com/snasirca))
- Updated Linux defaults to make it easier for Linux users to compile and
  rebuild Dark ([Grzegorz Gajos](https://github.com/ggajos))
- Added tests ([Felipe Milani](https://github.com/fmilani),
  [David Cooley](https://github.com/cooleydw494),
  [Jesse Besseling](https://github.com/pingiun),
  [Justus Moeller](https://github.com/JustusMoeller),
  [Christopher Brandt](https://github.com/xtopherbrandt),
  [Aash Anand](https://github.com/aashanand))
- Made documentation fixes ([Daniel Afonso](https://github.com/danieljcafonso),
  [Jesse Besseling](https://github.com/pingiun))

### Documentation

- Added a guide to help contributors with
  [writing code in OCaml](https://docs.darklang.com/contributing/rescript-and-fsharp-for-dark-developers)
- Added a tutorial around writing
  [clean error messages using the error rail](https://docs.darklang.com/tutorials/handle-error-errorrail)

## Week of 5/29/2020

- It's now possible to set a return type for functions. The return type will
  appear in the autocomplete and type errors will be displayed when necessary,
  making it easier to know that your functions work, and making it easier to use
  and understand functions. This means that your functions can also now use the
  Error Rail, if you set their return type to Result or Option.

![changelog/returntypes.png](/img/changelog/returntypes.png)

- Datastores can now have fields named id. This was contributed by our first
  external contributor, [Caleb H](https://github.com/naclcaleb)!

### Documentation

- Added:
  - A section around
    [submitting external contributions](/contributing/getting-started)
    ([134](https://darklang.com/docs/contributing/getting-started))
  - A guide around [when and when not to use Dark](/discussion/when-dark)
    ([133](https://github.com/darklang/docs/pull/133))
  - Expanded information about
    [Datastore migrations](/reference/framework/datastores#migrations-locking-and-unlocking)
    ([141](https://github.com/darklang/docs/pull/141))
  - A [From Javascript page](/reference/cheatsheets/javascript-cheatsheet) to
    help developers familiar with Javascript learn Dark
    ([132](https://github.com/darklang/docs/pull/132))
  - Documentation for the
    [`Slack::createCheckoutSession`](./packages#createcheckoutsession) package
    ([139](https://github.com/darklang/docs/pull/139))
- Made a few improvements to the
  [Your First App](/tutorials/first-dark-application) tutorial
  ([129](https://github.com/darklang/docs/pull/129),
  [130](https://github.com/darklang/docs/pull/130))
- Misc. spelling fixes ([128](https://github.com/darklang/docs/pull/128),
  [136](https://github.com/darklang/docs/pull/136))

## Week of 5/22/2020

- We've added more information to the sidebar! If you're not sure what a section
  in the sidebar is for, click on its name and more details will appear on the
  right side of your canvas.

![changelog/sidebar.gif](/img/changelog/sidebar.gif)

- We've done some major infrastructure work behind the Cron scheduler, which
  significantly improved its performance. You should now see all Crons,
  including those with a 1 minute interval, running on time again.
- Return values and execution fade are no longer stale when taking functions
  on/off the
  [error rail](https://docs.darklang.com/discussion/error-handling#error-rail)
  or when committing [feature flags](/how-to/feature-flags).

### Documentation

Thank you to everyone who contributed to our docs this week! As a reminder, our
docs repo is public and all you need to do to contribute is
[submit a pull request](https://github.com/darklang/docs/pulls).

- Added instructions for [hosting static assets](/how-to/static-assets) when not
  using an external framework.
  ([119](https://github.com/darklang/docs/pull/119))
- Fixed a broken link on the [Language Details](/reference/languagedetails)
  page. ([117](https://github.com/darklang/docs/pull/117))
- Added instructions on how to pause your cron once you're done with the
  [Your First App](/tutorials/first-dark-application) tutorial.
  ([122](https://github.com/darklang/docs/pull/122))
- New how-to pages:
  - [Feature flags](/how-to/feature-flags)
    ([118](https://github.com/darklang/docs/pull/118))
  - [Writing tests](/how-to/write-tests)
    ([120](https://github.com/darklang/docs/pull/120))
    ([126](https://github.com/darklang/docs/pull/126))
- New tutorials:
  - [Using an external DB](https://docs.darklang.com/walk-throughs/external-db)
    ([124](https://github.com/darklang/docs/pull/124))
  - [Alerting with IFTTT](https://docs.darklang.com/walk-throughs/ifttt-events)
    ([125](https://github.com/darklang/docs/pull/125))

## Week of 5/15/2020

- We've added a Hello World tutorial that will show automatically for new
  accounts. It can also be accessed via the avatar menu.

![changelog/helloworld.png](/img/changelog/helloworld.png)

- [Package manager functions](https://docs.darklang.com/reference/packages) and
  their underlying code can now be accessed via the sidebar. These functions
  will appear in the autocomplete, and can be used like any other built-in
  function.

![changelog/packagemanager.png](/img/changelog/packagemanager.png)

- It's now easier to add 404s to your canvas - the entire line is now clickable,
  instead of just the plus sign.
- Made a ton of small fixes to feature flags:
  - The correct docstring now shows when a feature flag is selected
  - Feature flag expressions now show the correct live value
  - Feature flags are now correctly created after pressing `Cmd+a` to select
    everything.
  - Feature flags no longer incorrectly display the "code was not run executed
    in this trace" error message.
- 404s should no longer appear off-screen when added to your canvas.
- When possible, we now display more information where we were previously
  showing `<Incomplete>` messages.
- Clicking to go to an error on an infix function now works as expected.
- The command palette will no longer appear behind other handlers when opened.

### Documentation

- Reorganized our documentation site, breaking tutorials & samples into their
  own section.
- Added a
  [From Python](https://docs.darklang.com/reference/cheatsheets/python-cheatsheet)
  page to help developers familiar with Python learn Dark.
- Added three sample canvases:
  - [GCP Bucket](https://darklang.com/a/sample-gcpbucket)
  - [Firebase Auth](https://darklang.com/a/sample-firebaseauth)
  - [CRUD app](https://darklang.com/a/sample-crud)
- Added a [Setting Up OAuth](https://docs.darklang.com/walk-throughs/slack-app)
  page to the
  [Building Slack Apps](https://docs.darklang.com/category/walk-throughs)
  section.

## Week of 5/8/2020

- We now have Dark badges for your sites! Add a
  [Made With Dark badge](https://docs.darklang.com/reference/sharing-dark) to
  your apps to establish your early Dark expertise 🎉

![changelog/badge.png](/img/changelog/badge.png)

- Clicking on a link in the sidebar will now always jump you to the correct
  place on the canvas. This was a super annoying bug that we internally referred
  to as "the dreaded positioning bug", and it is finally fixed. A blog post will
  be out describing the horror show behind this next week.
- Copying & pasting now works properly for pipes! We'll no longer lose arguments
  when copying between piped and non-piped expressions.
- Re-ordering function parameters works again. You can drag a function parameter
  to change its order (and we'll reorder the callers too).
- When you invite people (go to Settings), we'll error properly if the invite
  failed.
- When you try to access Dark in Firefox or other browsers, we'll tell you it
  won't work instead of crashing.
- You can now drag much more of a handler to move it (now including the
  docstring and return value boxes)
- When clicking on traces with errors, we'll no longer incorrectly color the
  trace dots.
- `Result::map2` and 5 other `Result` functions now goes to the error rail.
- When you press `,` to add another entry to a list, we'll now support it on
  both sides of an existing `,`.

## Week of 5/1/2020

- We now show you the exact execution path of a trace, making it easy to
  understand what happened in that trace. See which code paths are executed,
  whether `if`s return `true` or `false`, and which patterns are matched. This
  should make it much easier to understand code at a glance.

![changelog/codeexecution.gif](/img/changelog/codeexecution.gif)

- Fixed a bug that caused text to sometimes be selected in multiple handlers.
- It is now possible to drag both the return value and docstring fields on a
  handler.
- We have disabled the visual identifier for error traces, due to them turning
  all trace dots red. We plan to fix and re-enable in the future.

## Week of 4/24/2020

- We've added `Http::setCookie_v2` which handles the `expires` parameter
  properly. It also has much better error messages
- Added `Dict::member`, `Date::<=` and `Date::>=` to the standard library
- Updated a few standard library functions:
  - `String::isSubstring` is now `String::contains`
  - `List::contains` is now `List::member`
- `String::contains` is now supported in `DB::query*` functions
- It is now no longer possible to create multiple datastores with the same name.
- Fixed an issue that causes Dark to crash when selecting while the autocomplete
  was available.
- We now support recursion! While it's been supported for a long time on the
  backend, you were unable to get live values for recursive functions in the
  editor. Now you can!
- When new traces are created while your editor is open, we'll now replace old
  traces with the new one (before we added all traces, which caused large
  canvases to crash).
- We've improved the loading time of the editor for apps with lots of 404s
- Some function docstrings now link to relevant documentation - more to come!

### Documentation

- Improved the documentation around
  [setting up a custom domain](https://docs.darklang.com/how-to/custom-domains)
- Added a tutorial around
  [creating new Asana projects and tasks via Slack](https://docs.darklang.com/walk-throughs/slack-asana)

## Week of 4/17/2020

- Traces can now be linked to directly.
- Pasting JSON into Dark now works in more cases
- The command palette keyboard shortcut has changed: you should now use `ctrl+s`
  (we also support `alt+x`, and `ctrl+\`, should it be helpful for folks with
  non-US keyboard)
- Updated `String::slugify_v1` to slugify correctly in all cases.
- `DB::query` functions now support `String::contains` in their query block.
- The docstrings for `List::sortBy` and `List::sortByComparator` were updated to
  improve clarity.
- Fixed the return type for `DB::queryOne` - it now correctly returns an
  `Option`, and works properly with the error rail
- Fixed a bug with selecting dicts in feature flags
- [darklang.com](http://darklang.com) now displays properly on Safari

### Package Manager

- Added and documented many
  [Asana package manager functions](https://docs.darklang.com/reference/packages#asana-package).
- Added and documented a
  [Mailchimp subscribe function](https://docs.darklang.com/reference/packages#mailchimp-package)

### Documentation

- Lots of small typos and corrections were made - thank you to everyone who
  reported them!
- Improved the documentation around `match`, thanks to Nathan Lloyd Smith!
- Added a tutorial around
  [creating new Trello cards via Slack](https://docs.darklang.com/walk-throughs/slack-trello)

## Week of 4/10/2020

- We've done a lot of work to improve how quickly we can set up custom domains -
  if you want a custom domain to point to your Dark app,
  [read the documentation](https://docs.darklang.com/how-to/custom-domains) to
  see how to do it.
- More standard library functions! We're ramping down our concentrated effort to
  add more all at once, so if you have any requests post in the
  [Community Slack](https://darklang.com/slack-invite) or email
  feedback@darklang.com
  - `Float::clamp`
  - `Int::clamp`
  - `Int::mod`
  - `Int::remainder`
  - `String::dropFirst`
  - `String::dropLast`
  - `String::first`
  - `String::last`
  - `String::trimStart`
  - `String::trimEnd`
- We've realized that people had difficulty knowing that they need traces when
  they're editing functions, so we've added some in-editor pointers to it (call
  the function from elsewhere!)

  ![changelog/functions.png](/img/changelog/Apr10/functions.png)

- We're working a lot on performance of the editor, especially when typing.
  We've optimized a lot of different parts of the app, mostly related to typing
  and changing code, some of which are 3x faster. We'll continue working on
  this.
- The Dark CLI now suggests some common problems and solutions when auth fails,
  in response to a few instances of shell string handling surprising users
- Bug fix: typing an infix operator will now always open autocomplete.
- Bug fix: `extract-variable` now works correctly with right to left selection.
- Worker names no longer allow quotes - we noticed this causing ambiguity
  between sending and receiving of messages
- Updated the return type for `db::queryOne`

### Documentation

- Added a separate section to the documentation for
  [Building Slack Apps](https://docs.darklang.com/walk-throughs/slack-app)
- Added a tutorial for
  [building a slack app that checks for new channels and posts them](https://docs.darklang.com/walk-throughs/slack-channel-check)
- Added and documented many
  [Trello package manager functions](https://docs.darklang.com/reference/packages#trello-package)

## Week of 4/3/2020

- New Dark accounts are now auto-populated with a USERNAME-gettingstarted canvas
  that demonstrates basic Dark functionality.
- Even more functions have been added to the standard library:
  - `List::indexedMap`
  - `Math::pi`
  - `Math::tau`
  - `Math::degrees`
  - `Math::turns`
  - `Math::radians`
  - `Math::cos`
  - `Math::sin`
  - `Math::tan`
  - `Math::acos`
  - `Math::asin`
  - `Math::atan`
  - `Math::atan2`
  - `Math::cosh`
  - `Math::sinh`
  - `Math::tanh`
- We've done a redesign of the sidebar to be more consistent and prettier!

![changelog/sidebar.png](/img/changelog/Apr3/sidebar.png)

- The `add-feature-flag` option in the command palette is now context aware
- The feature flag panel is now auto-focused when adding a new feature flag
- Added an autocomplete option for `OPTIONS` in HTTP. This is especially useful
  for people doing preflight requests as part of `CORS`

![changelog/option.png](/img/changelog/Apr3/option.png)

- Made it clearer that return values apply specifically to a trace

![changelog/returntext.png](/img/changelog/Apr3/returntext.png)

- Adding a function at the start of a pipe now works properly (before this, we
  lost the first argument)
- Text selection has been reworked and should work a lot better and have fewer
  bugs. In particular, double-clicking on a function name properly selects the
  function, and selecting with the mouse now works in all cases (that we could
  find!)
- Typing "." to make a field now always works, even if the autocomplete isn't
  ready
- Bug fix: double-clicking in text boxes now keeps your cursor there
- Bug fix: in a `match` with a `Just` pattern, the variable now has the right
  type in autocomplete
- `Error:toString` has been deprecated (you can't call functions on type errors)

### Documentation

- Added a doc about how to use
  [CORS in Dark](https://docs.darklang.com/how-to/cors)
- Added and documented many
  [Slack package manager functions](https://docs.darklang.com/reference/packages#slack)

## Week of 3/27/2020

We released a lot this week, hope you enjoy!

- We have re-released feature flags! Feature flags allow you change live code
  safely: write the new code that you want, choose the condition to use that
  code instead (just for your user? just if a header is passed? Just if a
  particular query string is provided?). Then switch to the new code or discard
  it, safely, without breaking anything.
- Feature flags can be created from the command palette.

![changelog/Mar27/Screen_Shot_2020-03-27_at_12.44.20_PM.png](/img/changelog/Mar27/Screen_Shot_2020-03-27_at_12.44.20_PM.png)

- The keyboard shortcut for the command palette has changed to `Ctrl-\`

![changelog/Mar27/2020-03-27_12.27.23.gif](/img/changelog/Mar27/2020-03-27_12.27.23.gif)

- We've added a ton of standard library functions:
  - `Date::weekday`
  - `Dict::toList`
  - `Dict::fromList`
  - `Dict::filterMap`
  - `Dict::size`
  - `Dict::singleton`
  - `List::filterMap`
  - `List::map2`
  - `List::map2shortest`
  - `List::tail`
  - `List::singleton`
  - `List::unzip`
  - `List::zip`
  - `List::zipShortest`
  - `Option::map2`
  - `Result::map2`
  - `String::slice`
  - `String::padStart`
  - `String::padEnd`
- Hyphens are now allowed in records/dicts, to make it easier to set HTTP
  headers

![changelog/Mar27/Screen_Shot_2020-03-27_at_12.33.06_PM.png](/img/changelog/Mar27/Screen_Shot_2020-03-27_at_12.33.06_PM.png)

- `HTTP::respond` was renamed to `HTTP::response`, to make it clearer that it
  creates a value.
- A bunch of edge cases around calling functions were fixed, especially for
  functions which currently return `<Incomplete>`
- Tab now moves you to the next editable space
- Disabled a few features while we re-work them:
  - Create new function option in the autocomplete
  - Mouse over database stats

### Documentation

- Added
  [Your First Function](https://docs.darklang.com/tutorials/extract-function)
  and
  [Your First External API Call](https://docs.darklang.com/tutorials/call-external-api)
- Updated the
  [Slack tutorial](https://docs.darklang.com/walk-throughs/slack-app) to discuss
  OAuth v2

## Week of 3/20/2020

- Now you can give us more information about your Dark projects, and let us know
  if they're live. This helps us understand how we can make Dark better for you!

![changelog/Mar20/about.png](/img/changelog/Mar20/about.png)

- Significantly faster HTTP requests and canvas loading. We "fixed" this a few
  weeks ago, but only saw modest improvements. Yeah, there was a bug. So now
  it's fixed fixed: some HTTP requests have dropped from 3s to 70ms.
- We've added lots of standard library functions:

  - `Float::absoluteValue`
  - `Float::negate`
  - `Float::power`
  - `Float::min`
  - `Float::max`
  - `Float::truncate`

    ![changelog/Mar20/float.png](/img/changelog/Mar20/float.png)

  - `Int::negate`
  - `Int::absoluteValue`
  - `Dict::isEmpty`
  - `String::isEmpty`
  - `Date::weekday`
  - `Bool::xor`

## Week of 3/13/2020

### Features

- We now tell you how to deal with the ErrorRail in the docstrings for functions
  that returns `Options` and `Results`

![changelog/Mar13/errorrail.png](/img/changelog/Mar13/errorrail.png)

- We've started narrowing down the types in the autocomplete using types, and we
  now have some nice error messages for options which don't match the types

![changelog/Mar13/autocomplete.png](/img/changelog/Mar13/autocomplete.png)

- `DB::query` (and other `DB::query` functions) now support `Date` operations
- Performance: We've improved the load speed of your code on our servers by
  about 3x over the last few weeks, with the final change landing this week.
  This has the largest impact when loading the editor as all of your code loads
  then (though it is also less noticeable there as the JS overhead is higher
  than the DB overhead so 🤷🏽‍♀️)
- We have launched an alpha
  [package manager](https://docs.darklang.com/reference/packages), which allows
  re-using Dark functions from other users or canvases. Today, only Dark
  employees can add functions to the package manager. We've started with some
  commonly used Slack functions, but let us know via Slack or email if you have
  any requests - or your own functions you'd like to share.

![changelog/Mar13/slackfunctions.png](/img/changelog/Mar13/slackfunctions.png)

### Bug fixes

- Entering `+` no longer causes extraneous characters to be placed
- Uploading static assets on Windows no longer fails for nested directories
- Adding a `let` above a pipe no longer results in unexpected behavior

### Documentation

We added a bunch of improved documentation, including:

- better docs for hosting
  [static assets](https://docs.darklang.com/how-to/static-assets)
- a new doc describing
  [Datastores](https://docs.darklang.com/reference/framework/datastores) in more
  detail
- a new doc describing our (very limited) support for
  [packages](https://docs.darklang.com/reference/packages)
- [a new doc describing the HTTP client library](https://docs.darklang.com/reference/httpclient)
- a new doc describing how to
  [respond to HTTP requests](https://docs.darklang.com/reference/framework/http-framework)

## Week of 3/6/2020

- Invites! You can now invite people to Dark from within the app. (If you want
  your invitees to collaborate in your canvases, you still need to ask us though
  — coming soon). Click "Share Dark" to invite people!

  ![Profile menu showing link to "Share Dark" and "Documentation"](/img/changelog/Mar6/account.png)

- There is now a link to documentation in the profile menu
- You can now move around the canvas using your mouse. Just click and drag!
- Added a bunch of functions:
  - `Int::max`
  - `Int::min`
  - `String::startsWith`
  - `String::endsWith`
- Fixed a bunch of bugs:
  - you couldn't type a comma in a list within a `match` statement.
  - you couldn't type `|>` to pipe at the end of functions with no arguments
  - scrolling in the sidebar works again
  - When calling `StaticAssets::serveLatest` with JSON files, we now return the
    JSON properly
  - If you press enter at the end of a line in an `if` statement, we no longer
    take you to the next line (this simplifies code like `if i < 10`)
  - Show when traces were not executed in `match`es (we already do this
    elsewhere)
- The command palette's documentation appears properly (press `ctrl-\` to show
  the command palette)
- You can now use `Date::<` and `Date::>` and `Float::lessThanOrEqualTo` in
  `DB::query` (and also in `DB::queryOne`, `DB::queryWithKey`, etc)

![DB::query call using Date::<](/img/changelog/Mar6/dbquery.png)

- We now give better error messages when you try to use `Int` functions (like
  `+` and `-`) on `Floats` or `Strings`

![Float addition showing error message](/img/changelog/Mar6/floaterror.png)

- When you try to use invalid canvas names (e.g. with capital letters), we now
  error much better
- When backspacing function names, we now delete the version automatically,
  which makes it clearer what's being deleted.

## Week of 2/28/2020

- Backspacing a comma in a list no longer deletes text to the right of the comma
- Fixed an issue where Crons occasionally continued to run after they were
  deleted
- Lists now wrap when they pass 120 characters
- A few fixes to traces that caused people to get really stuck:
  - Fixed an issue where traces could occasionally vanish
  - Fixed an issue where clicking a Play button on a function in a REPL would
    not cause a trace to appear

### Documentation

- Docs can now be accessed at
  [https://darklang.com/docs](https://darklang.com/docs)
- [Your first Cron](https://docs.darklang.com/reference/framework/cron) and
  [Your first Worker](https://docs.darklang.com/reference/framework/workers)
  sections have been added to the Getting Started guide

## Week of 2/21/2020

- The canvas list has been moved into a Settings modal, accessed by mousing over
  your avatar and clicking Account.

  ![changelog/Feb21/settings.png](/img/changelog/Feb21/settings.png)

- A variety of issues were fixed around autocomplete:
  - New variables now correctly display their type instead of Incomplete.
  - Autocomplete now appears correctly for single-character variables.
  - It was possible to get into a state where your variable was not added to
    autocomplete - this is no longer possible.
- Added improved error messaging for missing return values on HTTP handlers and
  user functions.

![changelog/Feb21/error.png](/img/changelog/Feb21/error.png)

- Having the experimental web platform flag turned on in Chrome should no longer
  cause broken functionality.
- The Delete Handler menu option has been changed to Delete, for clarity.
- A complete [documentation](https://darklang.com/docs/introduction)
  restructure, including URL changes - old bookmarks may no longer work.

## Week of 2/14/2020

- Added a Welcome to Dark modal for new users

  ![changelog/Feb14/Screen_Shot_2020-02-14_at_4.59.31_PM.png](/img/changelog/Feb14/Screen_Shot_2020-02-14_at_4.59.31_PM.png)

- You can now click on the Command Palette
- Function arguments can now be reordered

![Changelog%20Draft/2020-02-14_13.04.03.gif](/img/changelog/Feb14/2020-02-14_13.04.03.gif)

- You can now delete recursive functions
- We now show you when a value was not executed in this trace

![Changelog%20Draft/Screen_Shot_2020-02-14_at_1.06.20_PM.png](/img/changelog/Feb14/Screen_Shot_2020-02-14_at_1.06.20_PM.png)

- Live values are now shown in unexecuted `match` branches
- Fixed a bunch of redirection bugs after log-in
- Support pasting more JS objects into records
- Fixed the documentation for `Date::parse` (it returns a `Result`)
- Fixed a few bugs around autocomplete appearing too little or too much
- Fixed a carat placement bug in pipes
- Loaded our font (Fira Mono) even if you don't have it installed locally
- Fixed some issues causing the editor to freeze:
  - Dragging up to select text
  - Repeated clicking in a variable
- Fixed some issues around copying `match`es
- Added a [Getting Started](introduction.md) tutorial to the documentation

## Week of 2/07/2020

- You can now reset your password (thanks to a switch to Auth0)
- Released a new version of the Dark CLI (0.5). This is a required upgrade to
  upload static assets.
  - [https://dark-cli.storage.googleapis.com/0.5.0/dark-cli-apple](https://dark-cli.storage.googleapis.com/0.5.0/dark-cli-apple)
  - [https://dark-cli.storage.googleapis.com/0.5.0/dark-cli.exe](https://dark-cli.storage.googleapis.com/0.5.0/dark-cli.exe)
  - [https://dark-cli.storage.googleapis.com/0.5.0/dark-cli-linux](https://dark-cli.storage.googleapis.com/0.5.0/dark-cli-linux)
  - Going forward, the Dark CLI will tell you when your CLI is out of date.
- Added `wrap-in-match` to the command palette

  ![changelog/2020-02-07_15.27.43.gif](/img/changelog/2020-02-07_15.27.43.gif)

- Added new functions:

  - `List::sortByComparator`

  ![changelog/Screen_Shot_2020-02-07_at_12.28.47_PM.png](/img/changelog/Screen_Shot_2020-02-07_at_12.28.47_PM.png)

  - `Bytes::length`

  ![changelog/Screen_Shot_2020-02-07_at_12.33.46_PM.png](/img/changelog/Screen_Shot_2020-02-07_at_12.33.46_PM.png)

- Changing functions now keeps the old function's error rail setting
- Significant improvement in cursor position
- Moved our documentation to a
  [new, more readable format](https://darklang.com/docs/)
- Documented [how to set CORS in Dark](https://docs.darklang.com/how-to/cors)

## Week of 1/31/2020

- You can now see a list of all of your canvases by mousing over your avatar.

  ![changelog/Screen_Shot_2020-01-31_at_12.18.35_PM.png](/img/changelog/Screen_Shot_2020-01-31_at_12.18.35_PM.png)

- Typing when text is highlighted now causes text to be replaced instead of
  inserted

  ![changelog/2020-01-31_12.23.30.gif](/img/changelog/2020-01-31_12.23.30.gif)

- Many function improvements, including:

  - We now create functions without a default parameter. Apparently that was
    annoying.
  - Functions now have a menu, and you can delete functions from there if they
    are unused)
  - Sometimes the Add New Parameter action didn't work - fixed it.

  ![changelog/2020-01-31_12.30.30.gif](/img/changelog/2020-01-31_12.30.30.gif)

- User-created functions now show parameters in blanks

  ![changelog/Screen_Shot_2020-01-31_at_12.33.38_PM.png](/img/changelog/Screen_Shot_2020-01-31_at_12.33.38_PM.png)

- Improved load time of canvases with many traces
- The cursor now stays in the right place when we reflow/reformat code
  dynamically, in almost every case.
- Prevented you from creating two datastores with identical names
- Added `HTTP::setCookie_v1` - v0 incorrectly URL encoded some fields and is now
  deprecated
- Fixed an issue where text was sometimes not being properly displayed in the
  sidebar
- Added a warning when trying to access Dark from a non-desktop or non-Chrome
  browser

### Documentation

- Created a [Sharing Dark Projects](/reference/sharing-dark) guide
- Improved the steps at the beginning of the
  [Guide to Building a Backend for a React SPA in Dark](/walk-throughs/react-app)

## Week of 1/24/2020

### Major changes

- Errors/Incompletes now point to the cause of the error

  ![changelog/image3.png](/img/changelog/image3.png)

- We substantially improved keyboard entry:
  - Special characters on international keyboards now appear correctly
  - Infix functions as parameters to other functions work
  - We believe backspace should now always work perfectly
  - We've greatly improved how often the cursor appears in the right place
- Performance and loading improvements for all programs
  - The editor loads program data from the server much faster
  - Workers run with much less overhead (and so higher throughput)
  - Crons should be running more reliably
  - HTTP requests are much much faster
  - Programs with lots of functions or traces are especially improved
  - Several issues with deleted functions and databases are now resolved
- Copy/paste is way improved

  - you can paste code from Dark into other programs
  - you can paste code into many parts of Dark (varnames, strings, records, etc)
  - most copy-paste issues should be solved

  ![changelog/2020-01-24_15.16.12.gif](/img/changelog/2020-01-24_15.16.12.gif)

### Library changes

- Added `JSON::parse_v1` which uses a `Result` in case of error (deprecated
  `JSON::parse_v0`)
- Added `Float::sum`

  ![changelog/Screen_Shot_2020-01-24_at_3.19.59_PM.png](/img/changelog/Screen_Shot_2020-01-24_at_3.19.59_PM.png)

- More improvements to `DB::query` and friends
  - previews now work for all `DB::query` functions (`DB::queryOne`,
    `DB::queryOneWithKeys`, `DB::queryWithKeys`)

### Bug fixes

- Fixed up/down arrow on fields
- Single entry autocompletes now work
- `Cmd-arrow` with shift now maintains selection
- Fixed renaming function parameters
- Fixed deleted text persisting when pressing delete
- Large traces are now properly displayed
- Commands (`Cmd/Ctrl-\`) now work more reliably when selecting code
- We now allow you to use arbitrary field names
  - You can now use a field even if you don't have a trace or the field does not
    exist in that trace
- We've automatically disabled Grammarly, as it was messing with our DOM
- The dark-cli now prints errors on failure

### Documentation

- A [list of sample canvases](/reference/sample-canvases). and descriptions has
  been added

## Week of 1/17/2020

- We added `DB::query_v4`, which allows you use arbitrary queries on your Dark
  datastores
  - We also published a
    [related blog post](https://blog.darklang.com/compiling-dark-to-sql/)!
- You can now remove a `let` with the backspace/delete key

![changelog/image1.gif](/img/changelog/image1.gif)

- Improved
  [documentation around the Error Rail](/tutorials/handle-error-errorrail)
- GitHub API! See our [sample canvas](https://darklang.com/a/sample-github)
  demonstrating how to call the GitHub API
- Fixed an issue where deleted from the middle of a concatenated string would
  cause text to the right of the deletion point to be removed.

![changelog/image2.gif](/img/changelog/image2.gif)

- We asked y'all to not make HttpClient calls to your Dark canvas from REPLs.
  We've made some infrastructural changes that fix the issue on our end, so you
  should feel free to do that now. This is useful if you want to create a HTTP
  trace without leaving Dark. (Note: please don't make HttpClient calls **_to
  Dark_** from HTTP handlers)

## Week of 1/10/2020

- Fixed a bunch of issues around entering non ASCII characters, especially from
  non-US keyboards:
  - accented 'o' and 'a' characters were not being recognized from Swedish
    keyboard layouts.
  - € or £ weren't working
  - shift + 2 was not being recognized.
- Fixed an issue where pressing delete in a match expression was causing the
  cursor to be placed incorrectly.
- Stopped erroring when functions are being renamed.
- Fixed an issue where the Omnibox was not clickable.
- Fixed an issue where the minimap was hiding the Dismiss Error button.
- Fixed a short regression where lambda parameters were not shadowing variables
  of the same name.
- Deprecated the `Date::sub` function and replaced it with `Date::subtract`.
- Changed the behavior of new handler placement - they no longer appear directly
  on top of one another.
- Changed the behavior of partials - they are now abandoned when clicking away
  from a handler.
- Added the `copy-request-as-curl` command for `HttpClient::` functions - use
  `Ctrl-\` to activate
- Add `Twitter::urlencode` and `Crypto::sha1mac` to support talking to the
  Twitter API

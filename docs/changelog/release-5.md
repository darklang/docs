# Darklang Release 5

September 1, 2022

Darklang Release 5 includes support for Tuples, a revamped settings panel with
new settings for contributors, and significant internal reworks.

_See the [blog post](https://blog.darklang.com/darklang-release-5/) for further
discussion._

## Major feature: experimental Tuple support

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
  [Language Details](/reference/languagedetails###Tuples).

## Major feature: Contributor settings

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

## Language improvements

- Allow floats where the whole number part is empty
  ([#4371](https://github.com/darklang/dark/pull/4371))

## Editor improvements

- Allow pressing enter in more expression bodies
  ([#4438](https://github.com/darklang/dark/pull/4438))

- Fixed Undo functionality, which was briefly broken
  ([#4392](https://github.com/darklang/dark/pull/4392))

- Fixed display of Error rail, which was briefly broken
  ([#4373](https://github.com/darklang/dark/pull/4373))

- Prevent Analysis errors due to using Tasks incorrectly
  ([#4436](https://github.com/darklang/dark/pull/4436))

- Revamping settings UI, adding reusuable form components, animations, toggle
  switches, and switching to TailwindCSS
  ([#4375](https://github.com/darklang/dark/pull/4375),
  [#4401](https://github.com/darklang/dark/pull/4401),
  [#4420](https://github.com/darklang/dark/pull/4420),
  [#4426](https://github.com/darklang/dark/pull/4426))

## In-progress features - `HttpClient` and HTTP framework

The current `HttpClient` and HTTP framework are quite limited, only supporting
text request/response bodies, among many other problems. They also lack the
flexibility to control and compose their behavior.

As part of rewriting the Static Assets feature in Dark itself
([#4259](https://github.com/darklang/dark/issues/4259)), we are creating
"thinner", more flexible, and more composable HttpClient
([#4366](https://github.com/darklang/dark/pull/4366)) and HTTP handlers
([#4353](https://github.com/darklang/dark/pull/4353))

## Internal improvements

- Huge refactor of client types
  ([#4326](https://github.com/darklang/dark/pull/4326))
- Remove OCamlTypes (used for interop with the old OCaml backend)
  ([#4396](https://github.com/darklang/dark/pull/4396),
  [#4398](https://github.com/darklang/dark/pull/4398))
- Add internal function to load Ops for a TopLevel
  ([#4391](https://github.com/darklang/dark/pull/4391))
- Test file cleanups ([#4412](https://github.com/darklang/dark/pull/4412),
  [#4411](https://github.com/darklang/dark/pull/4411))

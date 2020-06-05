---
id: changelog
title: Changelog
sidebar_label: Changelog
---

Dark gets better each week! Here is a brief list of the fixes, new features, and updates.

## Week of 6/5/2020

- Function references now appear when you're using a [package manager](https://darklang.github.io/docs/packages) function.

![assets/changelog/June5/Screen_Shot_2020-06-05_at_2.08.39_PM.png](assets/changelog/June5/Screen_Shot_2020-06-05_at_2.08.39_PM.png)

- We've updated some tips and error messages.

  - On 404s

  ![assets/changelog/June5/Screen_Shot_2020-06-05_at_2.10.46_PM.png](assets/changelog/June5/Screen_Shot_2020-06-05_at_2.10.46_PM.png)

  - On functions that have not yet been run

  ![assets/changelog/June5/Screen_Shot_2020-06-05_at_2.14.05_PM.png](assets/changelog/June5/Screen_Shot_2020-06-05_at_2.14.05_PM.png)

  - When attempting field access on a datastore

![assets/changelog/June5/Screen_Shot_2020-06-05_at_2.16.10_PM.png](assets/changelog/June5/Screen_Shot_2020-06-05_at_2.16.10_PM.png)

- If you attempt to access Dark via a browser other than Chrome we now link you to our [experimental desktop client](http://darklang.com/desktop-client).
- Variables can now be converted to lists by pressing `[` ([Jelle Besseling](https://github.com/pingiun))

![assets/changelog/June5/2020-06-05_14.19.05.gif](assets/changelog/June5/2020-06-05_14.19.05.gif)

- Added a `convert-if-to-match` option to the command palette ([Jelle Besseling](https://github.com/pingiun))

![assets/changelog/June5/2020-06-05_14.21.05.gif](assets/changelog/June5/2020-06-05_14.21.05.gif)

- References are now shown in the order in which they appear ([Jelle Besseling](https://github.com/pingiun))
- `String::trim` functions are now supported in the query compiler ([David Cooley](https://github.com/cooleydw494))
- `DB::getMany` now returns an `Option` ([Caleb H](https://github.com/naclcaleb))
- Added font-ligature for lambas ([Daniel Sokil](https://github.com/s0kil))
- Copy to cURL now uses single quotes instead of double quotes ([Jelle Besseling](https://github.com/pingiun))

### Standard library

- Standard library functions added:
  - `Crypto::md5` ([Jelle Besseling](https://github.com/pingiun))
  - `List::member` ([Christopher Brandt](https://github.com/xtopherbrandt))
  - `List::takeWhile` ([Jelle Besseling](https://github.com/pingiun))
  - `DB::queryCount` ([Brandon Hamilton](https://github.com/brandonhamilton))
  - `DB::getExisting` ([Caleb H](https://github.com/naclcaleb))
  - `String::prepend` ([Brandon Hamilton](https://github.com/brandonhamilton))

### External contributions

We have started taking external contributions, thanks so much to all the folks who contributed. In addition to the user facing changes above, contributors also added:

- Switched the Dark repo from using `yarn` to `npm` ([Shahriyar Nasir](https://github.com/snasirca))
- Updated Linux defaults to make it easier for Linux users to compile and rebuild Dark ([Grzegorz Gajos](https://github.com/ggajos))
- Added tests ([Felipe Milani](https://github.com/fmilani), [David Cooley](https://github.com/cooleydw494), [Jesse Besseling](https://github.com/pingiun), [Justus Moeller](https://github.com/JustusMoeller), [Christopher Brandt](https://github.com/xtopherbrandt), [Aash Anand](https://github.com/aashanand))
- Made documentation fixes ([Daniel Afonso](https://github.com/danieljcafonso), [Jesse Besseling](https://github.com/pingiun))

### Documentation

- Added a guide to help contributors with [writing code in OCaml](https://darklang.github.io/docs/contributing/ocaml-for-dark-developers)
- Added a tutorial around writing [clean error messages using the error rail](https://darklang.github.io/docs/tutorials/error-rail-http-tutorial)

## Week of 5/29/2020

- It's now possible to set a return type for functions. The return type will appear in the autocomplete and type errors will be displayed when necessary, making it easier to know that your functions work, and making it easier to use and understand functions. This means that your functions can also now use the Error Rail, if you set their return type to Result or Option.

![assets/changelog/returntypes.png](assets/changelog/returntypes.png)

- Datastores can now have fields named id. This was contributed by our first external contributor, [Caleb H](https://github.com/naclcaleb)!

### Documentation

- Added:
  - A section around [submitting external contributions](./contributing/getting-started) ([134](https://darklang.github.io/docs/contributing/getting-started))
  - A guide around [when and when not to use Dark](./when-dark) ([133](https://github.com/darklang/docs/pull/133))
  - Expanded information about [Datastore migrations](./datastores#migrations-locking-and-unlocking) ([141](https://github.com/darklang/docs/pull/141))
  - A [From Javascript page](./from-javascript) to help developers familiar with Javascript learn Dark ([132](https://github.com/darklang/docs/pull/132))
  - Documentation for the [`Slack::createCheckoutSession`](./packages#createcheckoutsession) package ([139](https://github.com/darklang/docs/pull/139))
- Made a few improvements to the [Your First App](./your-first) tutorial ([129](https://github.com/darklang/docs/pull/129), [130](https://github.com/darklang/docs/pull/130))
- Misc. spelling fixes ([128](https://github.com/darklang/docs/pull/128), [136](https://github.com/darklang/docs/pull/136))

## Week of 5/22/2020

- We've added more information to the sidebar! If you're not sure what a section in the sidebar is for, click on its name and more details will appear on the right side of your canvas.

![assets/changelog/sidebar.gif](assets/changelog/sidebar.gif)

- We've done some major infrastructure work behind the Cron scheduler, which significantly improved its performance. You should now see all Crons, including those with a 1 minute interval, running on time again.
- Return values and execution fade are no longer stale when taking functions on/off the [error rail](./error-handling#error-rail) or when committing [feature flags](./feature-flags).

### Documentation

Thank you to everyone who contributed to our docs this week! As a reminder, our docs repo is public and all you need to do to contribute is [submit a pull request](https://github.com/darklang/docs/pulls).

- Added instructions for [hosting static assets](./docs/static-assets) when not using an external framework. ([119](https://github.com/darklang/docs/pull/119))
- Fixed a broken link on the [Language Details](./docs/languagedetails) page. ([117](https://github.com/darklang/docs/pull/117))
- Added instructions on how to pause your cron once you're done with the [Your First App](./your-first) tutorial. ([122](https://github.com/darklang/docs/pull/122))
- New how-to pages:
  - [Feature flags](./feature-flags) ([118](https://github.com/darklang/docs/pull/118))
  - [Writing tests](./writing-tests) ([120](https://github.com/darklang/docs/pull/120))
  - [Connecting to external infrastructure](./external-infra) ([126](https://github.com/darklang/docs/pull/126))
- New tutorials:
  - [Using an external DB](./tutorials/external-db) ([124](https://github.com/darklang/docs/pull/124))
  - [Alerting with IFTTT](./tutorials/ifttt-alerts) ([125](https://github.com/darklang/docs/pull/125))

## Week of 5/15/2020

- We've added a Hello World tutorial that will show automatically for new accounts. It can also be accessed via the avatar menu.

![assets/changelog/helloworld.png](assets/changelog/helloworld.png)

- [Package manager functions](https://darklang.github.io/docs/packages) and their underlying code can now be accessed via the sidebar. These functions will appear in the autocomplete, and can be used like any other built-in function.

![assets/changelog/packagemanager.png](assets/changelog/packagemanager.png)

- It's now easier to add 404s to your canvas - the entire line is now clickable, instead of just the plus sign.
- Made a ton of small fixes to feature flags:
  - The correct docstring now shows when a feature flag is selected
  - Feature flag expressions now show the correct live value
  - Feature flags are now correctly created after pressing `Cmd+a` to select everything.
  - Feature flags no longer incorrectly display the "code was not run executed in this trace" error message.
- 404s should no longer appear off-screen when added to your canvas.
- When possible, we now display more information where we were previously showing `<Incomplete>` messages.
- Clicking to go to an error on an infix function now works as expected.
- The command palette will no longer appear behind other handlers when opened.

### Documentation

- Reorganized our documentation site, breaking tutorials & samples into their own section.
- Added a [From Python](https://darklang.github.io/docs/from-python) page to help developers familiar with Python learn Dark.
- Added three sample canvases:
  - [GCP Bucket](https://darklang.com/a/sample-gcpbucket)
  - [Firebase Auth](https://darklang.com/a/sample-firebaseauth)
  - [CRUD app](https://darklang.com/a/sample-crud)
- Added a [Setting Up OAuth](https://darklang.github.io/docs/slack-apps/slack-oauth) page to the [Building Slack Apps](https://darklang.github.io/docs/slack-apps/slack-intro) section.

## Week of 5/8/2020

- We now have Dark badges for your sites! Add a [Made With Dark badge](https://darklang.github.io/docs/sharing-dark) to your apps to establish your early Dark expertise 🎉

![assets/changelog/badge.png](assets/changelog/badge.png)

- Clicking on a link in the sidebar will now always jump you to the correct place on the canvas. This was a super annoying bug that we internally referred to as "the dreaded positioning bug", and it is finally fixed. A blog post will be out describing the horror show behind this next week.
- Copying & pasting now works properly for pipes! We'll no longer lose arguments when copying between piped and non-piped expressions.
- Re-ordering function parameters works again. You can drag a function parameter to change its order (and we'll reorder the callers too).
- When you invite people (go to Settings), we'll error properly if the invite failed.
- When you try to access Dark in Firefox or other browsers, we'll tell you it won't work instead of crashing.
- You can now drag much more of a handler to move it (now including the docstring and return value boxes)
- When clicking on traces with errors, we'll no longer incorrectly color the trace dots.
- `Result::map2` and 5 other `Result` functions now goes to the error rail.
- When you press `,` to add another entry to a list, we'll now support it on both sides of an existing `,`.

## Week of 5/1/2020

- We now show you the exact execution path of a trace, making it easy to understand what happened in that trace. See which code paths are executed, whether `if`s return `true` or `false`, and which patterns are matched. This should make it much easier to understand code at a glance.

![assets/changelog/codeexecution.gif](assets/changelog/codeexecution.gif)

- Fixed a bug that caused text to sometimes be selected in multiple handlers.
- It is now possible to drag both the return value and docstring fields on a handler.
- We have disabled the visual identifier for error traces, due to them turning all trace dots red. We plan to fix and re-enable in the future.

## Week of 4/24/2020

- We've added `Http::setCookie_v2` which handles the `expires` parameter properly. It also has much better error messages
- Added `Dict::member`, `Date::<=` and `Date::>=` to the standard library
- Updated a few standard library functions:
  - `String::isSubstring` is now `String::contains`
  - `List::contains` is now `List::member`
- `String::contains` is now supported in `DB::query*` functions
- It is now no longer possible to create multiple datastores with the same name.
- Fixed an issue that causes Dark to crash when selecting while the autocomplete was available.
- We now support recursion! While it's been supported for a long time on the backend, you were unable to get live values for recursive functions in the editor. Now you can!
- When new traces are created while your editor is open, we'll now replace old traces with the new one (before we added all traces, which caused large canvases to crash).
- We've improved the loading time of the editor for apps with lots of 404s
- Some function docstrings now link to relevant documentation - more to come!

### Documentation

- Improved the documentation around [setting up a custom domain](https://darklang.github.io/docs/custom-domains)
- Added a tutorial around [creating new Asana projects and tasks via Slack](https://darklang.github.io/docs/slack-apps/tutorials/asana-tutorial)

## Week of 4/17/2020

- Traces can now be linked to directly.
- Pasting JSON into Dark now works in more cases
- The command palette keyboard shortcut has changed: you should now use `ctrl+s` (we also support `alt+x`, and `ctrl+\`, should it be helpful for folks with non-US keyboard)
- Updated `String::slugify_v1` to slugify correctly in all cases.
- `DB::query` functions now support `String::contains` in their query block.
- The docstrings for `List::sortBy` and `List::sortByComparator` were updated to improve clarity.
- Fixed the return type for `DB::queryOne` - it now correctly returns an `Option`, and works properly with the error rail
- Fixed a bug with selecting dicts in feature flags
- [darklang.com](http://darklang.com) now displays properly on Safari

### Package Manager

- Added and documented many [Asana package manager functions](https://darklang.github.io/docs/packages#asana-package).
- Added and documented a [Mailchimp subscribe function](https://darklang.github.io/docs/packages#mailchimp-package)

### Documentation

- Lots of small typos and corrections were made - thank you to everyone who reported them!
- Improved the documentation around `match`, thanks to Nathan Lloyd Smith!
- Added a tutorial around [creating new Trello cards via Slack](https://darklang.github.io/docs/slack-apps/tutorials/new-trello-card)

## Week of 4/10/2020

- We've done a lot of work to improve how quickly we can set up custom domains - if you want a custom domain to point to your Dark app, [read the documentation](https://darklang.github.io/docs/custom-domains) to see how to do it.
- More standard library functions! We're ramping down our concentrated effort to add more all at once, so if you have any requests post in the [Community Slack](https://darklang.com/slack-invite) or email feedback@darklang.com
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
- We've realized that people had difficulty knowing that they need traces when they're editing functions, so we've added some in-editor pointers to it (call the function from elsewhere!)

  ![assets/changelog/functions.png](assets/changelog/Apr10/functions.png)

- We're working a lot on performance of the editor, especially when typing. We've optimized a lot of different parts of the app, mostly related to typing and changing code, some of which are 3x faster. We'll continue working on this.
- The Dark CLI now suggests some common problems and solutions when auth fails, in response to a few instances of shell string handling surprising users
- Bug fix: typing an infix operator will now always open autocomplete.
- Bug fix: `extract-variable` now works correctly with right to left selection.
- Worker names no longer allow quotes - we noticed this causing ambiguity between sending and receiving of messages
- Updated the return type for `db::queryOne`

### Documentation

- Added a separate section to the documentation for [Building Slack Apps](https://darklang.github.io/docs/slack-apps/slack-intro)
- Added a tutorial for [building a slack app that checks for new channels and posts them](https://darklang.github.io/docs/slack-apps/tutorials/channel-check)
- Added and documented many [Trello package manager functions](https://darklang.github.io/docs/packages#trello-package)

## Week of 4/3/2020

- New Dark accounts are now auto-populated with a username-gettingstarted canvas that demonstrates basic Dark functionality.
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

![assets/changelog/sidebar.png](assets/changelog/Apr3/sidebar.png)

- The `add-feature-flag` option in the command palette is now context aware
- The feature flag panel is now auto-focused when adding a new feature flag
- Added an autocomplete option for OPTIONS in HTTP. This is especially useful for people doing pre-flight requests as part of CORS

![assets/changelog/option.png](assets/changelog/Apr3/option.png)

- Made it clearer that return values apply specifically to a trace

![assets/changelog/returntext.png](assets/changelog/Apr3/returntext.png)

- Adding a function at the start of a pipe now works properly (before this, we lost the first argument)
- Text selection has been reworked and should work a lot better and have fewer bugs. In particular, doubleclicking on a function name properly selects the function, and selecting with the mouse now works in all cases (that we could find!)
- Typing "." to make a field now always works, even if the autocomplete isn't ready
- Bug fix: doubleclicking in text boxes now keeps your cursor there
- Bug fix: in a `match` with a `Just` pattern, the variable now has the right type in autocomplete
- `Error:toString` has been deprecated (you can't call functions on type errors)

### Documentation

- Added a doc about how to use [CORS in Dark](https://darklang.github.io/docs/cors)
- Added and documented many [Slack package manager functions](https://darklang.github.io/docs/packages#slack-package)

## Week of 3/27/2020

We released a lot this week, hope you enjoy!

- We have re-released feature flags! Feature flags allow you change live code safely: write the new code that you want, choose the condition to use that code instead (just for your user? just if a header is passed? Just if a particular query string is provided?). Then switch to the new code or discard it, safely, without breaking anything.
- Feature flags can be created from the command palette.

![assets/changelog/Mar27/Screen_Shot_2020-03-27_at_12.44.20_PM.png](assets/changelog/Mar27/Screen_Shot_2020-03-27_at_12.44.20_PM.png)

- The keyboard shortcut for the command palette has changed to `Ctrl-\`

![assets/changelog/Mar27/2020-03-27_12.27.23.gif](assets/changelog/Mar27/2020-03-27_12.27.23.gif)

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
- Hyphens are now allowed in records/dicts, to make it easier to set HTTP headers

![assets/changelog/Mar27/Screen_Shot_2020-03-27_at_12.33.06_PM.png](assets/changelog/Mar27/Screen_Shot_2020-03-27_at_12.33.06_PM.png)

- `HTTP::respond` was renamed to `HTTP::response`, to make it clearer that it creates a value.
- A bunch of edge cases around calling functions were fixed, especially for functions which currently return `<Incomplete>`
- Tab now moves you to the next editable space
- Disabled a few features while we re-work them:
  - Create new function option in the autocomplete
  - Mouse over database stats

### Documentation

- Added [Your First Function](https://darklang.github.io/docs/first-function) and [Your First External API Call](https://darklang.github.io/docs/first-api)
- Updated the [Slack tutorial](https://darklang.github.io/docs/slack-app-tutorial) to discuss OAuth v2

## Week of 3/20/2020

- Now you can give us more information about your Dark projects, and let us know if they're live. This helps us understand how we can make Dark better for you!

![assets/changelog/Mar20/about.png](assets/changelog/Mar20/about.png)

- Significantly faster HTTP requests and canvas loading. We "fixed" this a few weeks ago, but only saw modest improvements. Yeah, there was a bug. So now it's fixed fixed: some HTTP requests have dropped from 3s to 70ms.
- We've added lots of standard library functions:

  - `Float::absoluteValue`
  - `Float::negate`
  - `Float::power`
  - `Float::min`
  - `Float::max`
  - `Float::truncate`

    ![assets/changelog/Mar20/float.png](assets/changelog/Mar20/float.png)

  - `Int::negate`
  - `Int::absoluteValue`
  - `Dict::isEmpty`
  - `String::isEmpty`
  - `Date::weekday`
  - `Bool::xor`

## Week of 3/13/2020

### Features

- We now tell you how to deal with the ErrorRail in the docstrings for functions that returns `Options` and `Results`

![assets/changelog/Mar13/errorrail.png](assets/changelog/Mar13/errorrail.png)

- We've started narrowing down the types in the autocomplete using types, and we now have some nice error messages for options which don't match the types

![assets/changelog/Mar13/autocomplete.png](assets/changelog/Mar13/autocomplete.png)

- `DB::query` (and other `DB::query` functions) now support `Date` operations
- Performance: We've improved the load speed of your code on our servers by about 3x over the last few weeks, with the final change landing this week. This has the largest impact when loading the editor as all of your code loads then (though it is also less noticeable there as the JS overhead is higher than the DB overhead so 🤷🏽‍♀️)
- We have launched an alpha [package manager](https://darklang.github.io/docs/packages), which allows re-using Dark functions from other users or canvases. Today, only Dark employees can add functions to the package manager. We've started with some commonly used Slack functions, but let us know via Slack or email if you have any requests - or your own functions you'd like to share.

![assets/changelog/Mar13/slackfunctions.png](assets/changelog/Mar13/slackfunctions.png)

### Bug fixes

- Entering `+` no longer causes extraneous characters to be placed
- Uploading static assets on Windows no longer fails for nested directories
- Adding a `let` above a pipe no longer results in unexpected behavior

### Documentation

We added a bunch of improved documentation, including:

- better docs for hosting [static assets](https://darklang.github.io/docs/static-assets)
- a new doc describing [Datastores](https://darklang.github.io/docs/datastores) in more detail
- a new doc describing our (very limited) support for [packages](https://darklang.github.io/docs/packages)
- [a new doc describing the HTTP client library](https://darklang.github.io/docs/httpclient)
- a new doc describing how to [respond to HTTP requests](https://darklang.github.io/docs/http)

## Week of 3/6/2020

- Invites! You can now invite people to Dark from within the app. (If you want your invitees to collaborate in your canvases, you still need to ask us though — coming soon). Click "Share Dark" to invite people!

  ![Profile menu showing link to "Share Dark" and "Documentation"](assets/changelog/Mar6/account.png)

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
  - When calling `StaticAssets::serveLatest` with JSON files, we now return the JSON properly
  - If you press enter at the end of a line in an `if` statement, we no longer take you to the next line (this simplifies code like `if i < 10`)
  - Show when traces were not executed in `match`es (we already do this elsewhere)
- The command palette's documentation appears properly (press `ctrl-\` to show the command palette)
- You can now use `Date::<` and `Date::>` and `Float::lessThanOrEqualTo` in `DB::query` (and also in `DB::queryOne`, `DB::queryWithKey`, etc)

![DB::query call using Date::<](assets/changelog/Mar6/dbquery.png)

- We now give better error messages when you try to use `Int` functions (like `+` and `-`) on `Floats` or `Strings`

![Float addition showing error message](assets/changelog/Mar6/floaterror.png)

- When you try to use invalid canvas names (eg, with capital letters), we now error much better
- When backspacing function names, we now delete the version automatically, which makes it clearer what's being deleted.

## Week of 2/28/2020

- Backspacing a comma in a list no longer deletes text to the right of the comma
- Fixed an issue where CRONs occasionally continued to run after they were deleted
- Lists now wrap when they pass 120 characters
- A few fixes to traces that caused people to get really stuck:
  - Fixed an issue where traces could occasionally vanish
  - Fixed an issue where clicking a Play button on a function in a REPL would not cause a trace to appear

### Documentation

- Docs can now be accessed at [https://darklang.com/docs](https://darklang.com/docs)
- [Your first Cron](https://darklang.github.io/docs/first-cron) and [Your first Worker](https://darklang.github.io/docs/first-worker) sections have been added to the Getting Started guide

## Week of 2/21/2020

- The canvas list has been moved into a Settings modal, accessed by mousing over your avatar and clicking Account.

  ![assets/changelog/Feb21/settings.png](assets/changelog/Feb21/settings.png)

- A variety of issues were fixed around autocomplete:
  - New variables now correctly display their type instead of Incomplete.
  - Autocomplete now appears correctly for single-character variables.
  - It was possible to get into a state where your variable was not added to autocomplete - this is no longer possible.
- Added improved error messaging for missing return values on HTTP handlers and user functions.

![assets/changelog/Feb21/error.png](assets/changelog/Feb21/error.png)

- Having the experimental web platform flag turned on in Chrome should no longer cause broken functionality.
- The Delete Handler menu option has been changed to Delete, for clarity.
- A complete [documentation](https://darklang.github.io/docs/introduction) restructure, including URL changes - old bookmarks may no longer work.

## Week of 2/14/2020

- Added a Welcome to Dark modal for new users

  ![assets/changelog/Feb14/Screen_Shot_2020-02-14_at_4.59.31_PM.png](assets/changelog/Feb14/Screen_Shot_2020-02-14_at_4.59.31_PM.png)

- You can now click on the Command Palette
- Function arguments can now be reordered

![Changelog%20Draft/2020-02-14_13.04.03.gif](assets/changelog/Feb14/2020-02-14_13.04.03.gif)

- You can now delete recursive functions
- We now show you when a value was not executed in this trace

![Changelog%20Draft/Screen_Shot_2020-02-14_at_1.06.20_PM.png](assets/changelog/Feb14/Screen_Shot_2020-02-14_at_1.06.20_PM.png)

- Live values are now shown in unexecuted `match` branches
- Fixed a bunch of redirection bugs after log-in
- Support pasting more JS objects into records
- Fixed the documentation for `Date::parse` (it returns a `Result`)
- Fixed a few bugs around autocomplete appearing too little or too much
- Fixed a carat placement bug in pipes
- Loaded our font (FiraMono) even if you don't have it installed locally
- Fixed some issues causing the editor to freeze:
  - Dragging up to select text
  - Repeated clicking in a variable
- Fixed some issues around copying `match`es
- Added a [Getting Started](introduction.md) tutorial to the documentation

## Week of 2/07/2020

- You can now reset your password (thanks to a switch to Auth0)
- Released a new version of the Dark CLI (0.5). This is a required upgrade to upload static assets.
  - [https://dark-cli.storage.googleapis.com/0.5.0/dark-cli-apple](https://dark-cli.storage.googleapis.com/0.5.0/dark-cli-apple)
  - [https://dark-cli.storage.googleapis.com/0.5.0/dark-cli.exe](https://dark-cli.storage.googleapis.com/0.5.0/dark-cli.exe)
  - [https://dark-cli.storage.googleapis.com/0.5.0/dark-cli-linux](https://dark-cli.storage.googleapis.com/0.5.0/dark-cli-linux)
  - Going forward, the Dark CLI will tell you when your CLI is out of date.
- Added `wrap-in-match` to the command palette

  ![assets/changelog/2020-02-07_15.27.43.gif](assets/changelog/2020-02-07_15.27.43.gif)

- Added new functions:

  - `List::sortByComparator`

  ![assets/changelog/Screen_Shot_2020-02-07_at_12.28.47_PM.png](assets/changelog/Screen_Shot_2020-02-07_at_12.28.47_PM.png)

  - `Bytes::length`

  ![assets/changelog/Screen_Shot_2020-02-07_at_12.33.46_PM.png](assets/changelog/Screen_Shot_2020-02-07_at_12.33.46_PM.png)

- Changing functions now keeps the old function's error rail setting
- Significant improvement in cursor position
- Moved our documentation to a [new, more readable format](https://darklang.github.io/docs/)
- Documented [how to set CORS in Dark](https://darklang.github.io/docs/docs/getting-started.html#additional-informationadvanced-topics)

## Week of 1/31/2020

- You can now see a list of all of your canvases by mousing over your avatar.

  ![assets/changelog/Screen_Shot_2020-01-31_at_12.18.35_PM.png](assets/changelog/Screen_Shot_2020-01-31_at_12.18.35_PM.png)

- Typing when text is highlighted now causes text to be replaced instead of inserted

  ![assets/changelog/2020-01-31_12.23.30.gif](assets/changelog/2020-01-31_12.23.30.gif)

- Many function improvements, including:

  - We now create functions without a default parameter. Apparently that was annoying.
  - Functions now have a menu, and you can delete functions from there if they are unused)
  - Sometimes the Add New Parameter action didn't work - fixed it.

  ![assets/changelog/2020-01-31_12.30.30.gif](assets/changelog/2020-01-31_12.30.30.gif)

- User-created functions now show parameters in blanks

  ![assets/changelog/Screen_Shot_2020-01-31_at_12.33.38_PM.png](assets/changelog/Screen_Shot_2020-01-31_at_12.33.38_PM.png)

- Improved load time of canvases with many traces
- The cursor now stays in the right place when we reflow/reformat code dynamically, in almost every case.
- Prevented you from creating two datastores with identical names
- Added `HTTP::setCookie_v1` - v0 incorrectly URL encoded some fields and is now deprecated
- Fixed an issue where text was sometimes not being properly displayed in the sidebar
- Added a warning when trying to access Dark from a non-desktop or non-Chrome browser

### Documentation

- Created a [Sharing Dark Projects](https://www.notion.so/darklang/Sharing-your-Dark-Projects-26d5b14d6b41457daad6bc44ac849b1a) guide
- Improved the steps at the beginning of the [Guide to Building a Backend for a React SPA in Dark](https://www.notion.so/darklang/A-Guide-to-Building-a-Backend-for-a-React-SPA-in-Dark-29ccf25d75bd48daa32b92e4bd555669)

## Week of 1/24/2020

### Major changes

- Errors/Incompletes now point to the cause of the error

  ![assets/changelog/image3.png](assets/changelog/image3.png)

- We substantially improved keyboard entry:
  - Special characters on international keyboards now appear correctly
  - Infix functions as parameters to other functions work
  - We believe backspace should now always work perfectly
  - We've greatly improved how often the cursor appears in the right place
- Performance and loading improvements for all programs
  - The editor loads program data from the server much faster
  - Workers run with much less overhead (and so higher throughput)
  - CRONs should be running more reliably
  - HTTP requests are much much faster
  - Programs with lots of functions or traces are especially improved
  - Several issues with deleted functions and databases are now resolved
- Copy/paste is way improved

  - you can paste code from Dark into other programs
  - you can paste code into many parts of Dark (varnames, strings, records, etc)
  - most copy-paste issues should be solved

  ![assets/changelog/2020-01-24_15.16.12.gif](assets/changelog/2020-01-24_15.16.12.gif)

### Library changes

- Added `JSON::parse_v1` which uses a Result in case of error (deprecated JSON::parse_v0)
- Added `Float::sum`

  ![assets/changelog/Screen_Shot_2020-01-24_at_3.19.59_PM.png](assets/changelog/Screen_Shot_2020-01-24_at_3.19.59_PM.png)

- More improvements to `DB::query` and friends
  - previews now work for all `DB::query` functions (`DB::queryOne`, `DB::queryOneWithKeys`, `DB::queryWithKeys`)

### Bug fixes

- Fixed up/down arrow on fields
- Single entry autocompletes now work
- Cmd-arrow with shift now maintains selection
- Fixed renaming function parameters
- Fixed deleted text persisting when pressing delete
- Large traces are now properly displayed
- Commands (ctrl-\) now work more reliably when selecting code
- We now allow you to use arbitrary field names
  - You can now use a field even if you don't have a trace or the field does not exist in that trace
- We've automatically disabled Grammarly, as it was messing with our DOM
- The dark-cli now prints errors on failure

### Documentation

- A [list of sample canvases](https://www.notion.so/darklang/Sample-Canvases-a5fa5479ffbb442d9f180d83e4bf3588) and descriptions has been added

## Week of 1/17/2020

- We added DB::query_v4, which allows you use arbitrary queries on your Dark datastores
  - We also published a [related blog post](https://medium.com/darklang/compiling-dark-to-sql-bb8918d1acdd)!
- You can now remove a `let` with the backspace/delete key

![assets/changelog/image1.gif](assets/changelog/image1.gif)

- Improved [documentation around the Error Rail](https://www.notion.so/darklang/Error-Handling-in-Dark-255f7989a63b4dd49da63cca17ee107e)
- GitHub API! See our [sample canvas](https://darklang.com/a/sample-github) demonstrating how to call the GitHub API
- Fixed an issue where deleted from the middle of a concatenated string would cause text to the right of the deletion point to be removed.

![assets/changelog/image2.gif](assets/changelog/image2.gif)

- We asked y'all to not make HttpClient calls to your Dark canvas from REPLs. We've made some infrastructural changes that fix the issue on our end, so you should feel free to do that now. This is useful if you want to create a HTTP trace without leaving Dark. (Note: please don't make HttpClient calls **_to Dark_** from HTTP handlers)

## Week of 1/10/2020

- Fixed a bunch of issues around entering non ASCII characters, especially from non-US keyboards:
  - accented 'o' and 'a' characters were not being recognized from Swedish keyboard layouts.
  - € or £ weren't working
  - shift + 2 was not being recognized.
- Fixed an issue where pressing delete in a match expression was causing the cursor to be placed incorrectly.
- Stopped errorring when functions are being renamed.
- Fixed an issue where the Omnibox was not clickable.
- Fixed an issue where the minimap was hiding the Dismiss Error button.
- Fixed a short regression where lambda parameters were not shadowing variables of the same name.
- Deprecated the `Date::sub` function and replaced it with `Date::subtract`.
- Changed the behavior of new handler placement - they no longer appear directly on top of one another.
- Changed the behavior of partials - they are now abandoned when clicking away from a handler.
- Added the `copy-request-as-curl` command for `HttpClient::` functions - use ctrl-\ to activate
- Add `Twitter::urlencode` and `Crypto::sha1mac` to support talking to the Twitter API

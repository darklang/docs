# Darklang Release 9

January 1, 2023

_See the [blog post](https://blog.darklang.com/darklang-release-9/) for further
discussion._

## Language and Standard Library

- Support short-circuiting `||` and `&&` expressions
  ([#4640](https://github.com/darklang/dark/pull/4640),
  [#4644](https://github.com/darklang/dark/pull/4644),
  [#4674](https://github.com/darklang/dark/pull/4674),
  [#4676](https://github.com/darklang/dark/pull/4676))

  ![image](/img/changelog/release9/and-and-or.png)

  - deprecate old `||` and `&&` functions
    ![image](/img/changelog/release9/deprecated-and-and-or.png)

  - add `convert-to-short-circuiting` command for migrating

- Add `List::partition_v0` function to split a list into 2 lists
  ([#4618](https://github.com/darklang/dark/pull/4618))

  Note: tuples are currently in 'preview,' and this returns a tuple. Enable them
  in **Settings/Contributor Settings** to use this function.

- Fix lambda argument names for `List::all_v0`
  ([#4626](https://github.com/darklang/dark/pull/4626))

- Add functions that operate on characters
  ([#4628](https://github.com/darklang/dark/pull/4628)):

  - `Char::isUppercase_v0`
  - `Char::isLowercase_v0`
  - `Char::toUppercase_v1`
  - `Char::toLowercase_v1`
  - `Char::isDigit_v0`
  - `Char::isASCII_v0`
  - `Char::isASCIILetter_v0`

- Allow using `Char` as a function parameter type and return type
  ([#4628](https://github.com/darklang/dark/pull/4628))

- Standard library functions that take lambdas have default names provided for
  the lambda arguments ([#4626](https://github.com/darklang/dark/pull/4626))

## Editor Improvements

- Update the styling of the **Settings/Invite** page
  ([#4643](https://github.com/darklang/dark/pull/4643))

  ![image](/img/changelog/release9/settings-style.png)

- Start using a nice non-monospace font (Source Sans Pro) in the editor,
  starting with **Settings** pages
  ([#4640](https://github.com/darklang/dark/pull/4640),
  [#4656](https://github.com/darklang/dark/pull/4656))

  ![Source Sans Pro paragraph](/img/changelog/release9/source-sans-pro.png)

## Contributor Experience

- Add more debugging functions in the client codebase
  ([#4640](https://github.com/darklang/dark/pull/4640))

## Internal improvements

- Merge F# backend code (in `fsharp-backend`) into `backend` directory
  ([#4639](https://github.com/darklang/dark/pull/4639))

- Experimentally start storing some traces in Cloud Storage instead of the DB
  ([#4652](https://github.com/darklang/dark/pull/4652))

- Add internal function that returns the git hash of the server's current/latest
  deploy ([#4649](https://github.com/darklang/dark/pull/4649))

- Check for serialization errors before starting up servers
  ([#4650](https://github.com/darklang/dark/pull/4650))
- Moved darksa.com and darkstaticassets.com certificates to Google Certificate
  Manager.
- Remove unused cloud infrastructure including IP addresses, disks, backups, and
  IAM roles.

- Include Dark client version in ApiServer exception tracking
  ([#4645](https://github.com/darklang/dark/pull/4645))

- Use [rescript-webapi](https://www.npmjs.com/package/rescript-webapi) instead
  of our Native.res ([#4630](https://github.com/darklang/dark/pull/4630))

- Use Tailwind in the Settings view
  ([#4623](https://github.com/darklang/dark/pull/4623))

- Rename Match Pattern cases in preparation for Let Patterns
  ([#4622](https://github.com/darklang/dark/pull/4622),
  ([#4629](https://github.com/darklang/dark/pull/4629)))

- Rename "Analysis" F# project to "Wasm"
  ([#4671](https://github.com/darklang/dark/pull/4671))

- Remove old ApiServer POST endpoints that are no longer used
  ([#4620](https://github.com/darklang/dark/pull/4620))

- Remove unused config variables
  ([#4651](https://github.com/darklang/dark/pull/4651))

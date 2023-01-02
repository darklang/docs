# Darklang Release 9

January 1, 2023

## Language and Standard Library

- Support short-circuiting `||` and `&&` expressions (initially behind a flag -
  go to Settings to enable)
  ([#4640](https://github.com/darklang/dark/pull/4640))

- Add `List::partition_v0` function to split a list into 2 lists
  ([#4618](https://github.com/darklang/dark/pull/4618))

- Fix lambda argument names for `List::all_v0`
  ([#4626](https://github.com/darklang/dark/pull/4626))

- Add functions that operate on characters: `Char::isUppercase_v0`,
  `Char::isLowercase_v0`, `Char::toUppercase_v1`, `Char::toLowercase_v1`,
  `Char::isDigit_v0`, `Char::isASCII_v0`, and `Char::isASCIILetter_v0`
  ([#4628](https://github.com/darklang/dark/pull/4628))

## Editor Improvements

- Allow using `Char` as a function parameter type and return type
  ([#4628](https://github.com/darklang/dark/pull/4628))

- Update the styling of settings invite
  ([#4643](https://github.com/darklang/dark/pull/4643))

- Switch some settings pages to a regular font (we previously used monospace
  fonts everywhere) ([#4640](https://github.com/darklang/dark/pull/4640),
  [#4656](https://github.com/darklang/dark/pull/4656))

## Contributor Experience

- Add more client debugging functions
  ([#4640](https://github.com/darklang/dark/pull/4640))

## Internal improvements

- Allow traces to be stored in Cloud Storage instead of the DB
  ([#4652](https://github.com/darklang/dark/pull/4652))

- Add internal function that returns the git hash of the server's current/latest
  deploy ([#4649](https://github.com/darklang/dark/pull/4649))

- Check for serialization errors before starting up servers
  ([#4650](https://github.com/darklang/dark/pull/4650))

- Include Dark client version in ApiServer rollbars
  ([#4645](https://github.com/darklang/dark/pull/4645))

- Merge F# backend code (in `fsharp-backend`) into `backend` dir
  ([#4639](https://github.com/darklang/dark/pull/4639))

- Use [rescript-webapi](https://www.npmjs.com/package/rescript-webapi) instead
  of our Native.res ([#4630](https://github.com/darklang/dark/pull/4630))

- Update settingsView to use TailwindCSS
  ([#4623](https://github.com/darklang/dark/pull/4623))

- Rename Match Pattern cases from "PBlank"-style to "MPBlank" style in
  preparation for Let Patterns
  ([#4622](https://github.com/darklang/dark/pull/4622),
  ([#4629](https://github.com/darklang/dark/pull/4629)))

- Rename "Analysis" F# project to "Wasm"
  ([#4671](https://github.com/darklang/dark/pull/4671))

- Add assertion that all standard library functions that take lambdas have
  default names provided for the lambda arguments
  ([#4626](https://github.com/darklang/dark/pull/4626))

- Remove old POST APIs that have already been replaced by GET APIs
  ([#4620](https://github.com/darklang/dark/pull/4620))

- Remove unused config variables
  ([#4651](https://github.com/darklang/dark/pull/4651))
# Darklang Release 7

November 1, 2022

_See the [blog post](https://blog.darklang.com/darklang-releases-7-and-8/) for
further discussion._

## Editor improvements

- Remove expandable sidebar, make collapsed sidebar more reliable
  ([#4511](https://github.com/darklang/dark/pull/4511))

- Improve editor load time, using preconnects and preloads
  ([#4520](https://github.com/darklang/dark/pull/4520),
  [#4519](https://github.com/darklang/dark/pull/4519))

- Show the return type of called functions in the documentation box
  ([#4510](https://github.com/darklang/dark/pull/4510))

- Fix parameter display when using package functions
  ([#4516](https://github.com/darklang/dark/pull/4516))

- Deleting a selected range of code now handles situations where the code
  reflows during deletion ([#4531](https://github.com/darklang/dark/pull/4531))

- Fix bugs when copy/pasting match expressions and patterns
  ([#4513](https://github.com/darklang/dark/pull/4513))

- Upgrade icons to Fontawesome 6
  ([#4565](https://github.com/darklang/dark/pull/4565))

- Fix a few tuple interactions
  ([#4521](https://github.com/darklang/dark/pull/4521))

## Standard library

- Rename `String::toFloat_v1` to `Float::parse_v0`
  ([#4536](https://github.com/darklang/dark/pull/4536))

- All standard library functions now use pretty formatting in their docstrings
  ([#4535](https://github.com/darklang/dark/pull/4535))

## HTTP server

- Use new logo in favicon ([#4562](https://github.com/darklang/dark/pull/4562))

## Documentation

- Document
  [mouse-based shortcuts](https://docs.darklang.com/reference/keyboard-mapping)
  ([#281](https://github.com/darklang/docs/pull/281))

- Document
  [additional shortcut to bring up command palette](https://docs.darklang.com/discussion/structured-editing#command-palette)
  ([#268](https://github.com/darklang/docs/pull/268))

- Redo the [sharing Dark](https://docs.darklang.com/reference/sharing-dark) page
  ([#282](https://github.com/darklang/docs/pull/282))

- Use new Darklang logos; optimize using tinypng.io
  ([#282](https://github.com/darklang/docs/pull/282),
  [#283](https://github.com/darklang/docs/pull/283))

- [Mention GitHub Discussions](https://docs.darklang.com/reference/support) as a
  feedback forum ([#269](https://github.com/darklang/docs/pull/269))

- Explain how the
  [HTTP handlers](https://docs.darklang.com/reference/framework/http-framework)
  work ([#267](https://github.com/darklang/docs/pull/267))

## Internal

- Use exact package versions and prevent hang during `npm install`
  ([#4566](https://github.com/darklang/dark/pull/4566))

- Use gcloud storage commands instead of gsutil for deployment
  ([#4525](https://github.com/darklang/dark/pull/4525))

- Remove old `backend/templates` directory
  ([#4517](https://github.com/darklang/dark/pull/4517))

- Update sidebar to use Tailwind
  ([#4511](https://github.com/darklang/dark/pull/4511))

- Refactor and simplify editor loading, move FontAwesome to a CDN, combine
  multiple files, remove old implementation
  ([#4520](https://github.com/darklang/dark/pull/4520),
  [#4519](https://github.com/darklang/dark/pull/4519))

- Create dependabot.yml for docs, update packages
  ([#270](https://github.com/darklang/docs/pull/270),
  [#271](https://github.com/darklang/docs/pull/271))

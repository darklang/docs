# Darklang Release 10

Febuary 1, 2023

## Editor Improvements

- Reduce the amount of space within the autocomplete dropdown box
  ([#4709](https://github.com/darklang/dark/pull/4709))

- Improve styling of tutorial tooltips
  ([#4700](https://github.com/darklang/dark/pull/4700))

- Refresh the editor when it is outdated and inactive
  ([#4648](https://github.com/darklang/dark/pull/4648))

- Deprecate old `||`/`&&` functions in favor of short-circuiting `||`/`&&`; add
  `convert-to-short-circuiting` command to migrate from old `||`\`&&` functions
  ([#4676](https://github.com/darklang/dark/pull/4676),
  [#4674](https://github.com/darklang/dark/pull/4674))

- Add new "feedback" and "report a bug" buttons that point to github discussions
  and github issues ([#4689](https://github.com/darklang/dark/pull/4689))

- Improve design of code documentation box
  ([#4664](https://github.com/darklang/dark/pull/4664),
  [#4702](https://github.com/darklang/dark/pull/4702),
  [#4706](https://github.com/darklang/dark/pull/4706),
  [#4713](https://github.com/darklang/dark/pull/4713))

  ![improved documentation box](/img/changelog/release10/improved-documentation-box.png)

- Reduce the amount of space within the autocomplete dropdown box.
  ([#4709](https://github.com/darklang/dark/pull/4709))

## Documentation

- Generally tidy documentation; fix a bunch of links
  ([#306](https://github.com/darklang/docs/pull/306))

## Contributor Improvements

- Add instructions for testing local editor changes against the production
  backend ([#308](https://github.com/darklang/docs/pull/308))

- Add GitHub Issue templates for docs repo, namely to make monthly
  changelog/release process more straight-forward
  ([#317](https://github.com/darklang/docs/pull/317),
  [#318](https://github.com/darklang/docs/pull/318),
  [#320](https://github.com/darklang/docs/pull/320),
  [#322](https://github.com/darklang/docs/pull/322),
  [#324](https://github.com/darklang/docs/pull/324),
  [#326](https://github.com/darklang/docs/pull/326),
  [#323](https://github.com/darklang/docs/pull/323))

## Internal

- Add more infrastructure config to Terraform
  ([#4697](https://github.com/darklang/dark/pull/4697))

- React to a
  [CircleCI incident](https://circleci.com/blog/jan-4-2023-incident-report)
  ([#313](https://github.com/darklang/docs/pull/313),
  [#4704](https://github.com/darklang/dark/pull/4704),
  [#4691](https://github.com/darklang/dark/pull/4691),
  [#4694](https://github.com/darklang/dark/pull/4694),
  [#4695](https://github.com/darklang/dark/pull/4695))

  - rotate our CircleCI keys
  - make it easier to rotate DB credentials
  - see our Release 10
    [blog post](https://blog.darklang.com/darklang-release-10) for more
    information

- Use Tailwind for the account actions menu, documentation box, and tutorial
  tooltips ([#4689](https://github.com/darklang/dark/pull/4689),
  [#4664](https://github.com/darklang/dark/pull/4664),
  [#4700](https://github.com/darklang/dark/pull/4700))

- Mark more standard library functions as Not Queryable instead of Unknown
  ([#4729](https://github.com/darklang/dark/pull/4729))

- Move deployment lock to a darklang canvas
  ([#4703](https://github.com/darklang/dark/pull/4703))

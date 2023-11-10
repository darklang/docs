# Darklang Release 8

December 1, 2022

_See the [blog post](https://blog.darklang.com/darklang-releases-7-and-8/) for
further discussion._

## Editor

- Speed up editor load by preloading first API requests
  ([#4574](https://github.com/darklang/dark/pull/4574))

## Documentation

- Add transparent Dark logos ([#291](https://github.com/darklang/docs/pull/291))

- Correct documentation of how code is formatted via terminal
  ([#294](https://github.com/darklang/docs/pull/294))

- Fix some links to Darklang code
  ([#293](https://github.com/darklang/docs/pull/293))

- Update to Docusaurus 2.2 ([#292](https://github.com/darklang/docs/pull/292))

## Contributor experience

- Remove all remnants of OCaml files and tooling
  ([#4594](https://github.com/darklang/dark/pull/4594))

- Update both development and production containers to Ubuntu 22.04
  ([#4118](https://github.com/darklang/dark/pull/4118))

- Improve build reliability (especially for WSL users) by removing setup steps
  on the container host ([#4581](https://github.com/darklang/dark/pull/4581))

## Internal improvements

- Extracted most client-facing backend types to central "ClientTypes" project.
  This allows for safe adjustments of those types without leaking into our
  domain logic ([#4542](https://github.com/darklang/dark/pull/4542))

- Improve how we ensure backend JSON-serializable types are tested for
  consistent serialization ([#4588](https://github.com/darklang/dark/pull/4588))

- Update ReScript to version 9.1.4
  ([#4570](https://github.com/darklang/dark/pull/4570))

- Use Tailwind in many more places
  ([#4591](https://github.com/darklang/dark/pull/4591),
  [#4601](https://github.com/darklang/dark/pull/4601),
  [#4610](https://github.com/darklang/dark/pull/4610))

- Make integration tests more reliable when using non-fluid entry boxes
  ([#4578](https://github.com/darklang/dark/pull/4578))

- Add `--loop` to integration tests to find flaky tests
  ([#4592](https://github.com/darklang/dark/pull/4592))

- Fix deployment when no deploy locks are present
  ([#4576](https://github.com/darklang/dark/pull/4576))

- Scale down even when cert-manager containers are present
  ([#4617](https://github.com/darklang/dark/pull/4617))

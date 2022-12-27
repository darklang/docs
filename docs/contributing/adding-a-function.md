---
title: Adding a built-in function
---

Adding a built-in or "Standard Library Function" is usually straight-forward
involving implementation and testing only in the backend.

(This document is in-progress and needs work)

## Define the function

- Determine where the function should live
  - If the function is required to be run in the backend (e.g. to connect to a
    database), then `BackendOnlyStdLib` is appropriate
  - Otherwise the function may live within `LibExecutionStdLib`. This is where
    most pure functions live, such as `Int::absoluteValue`
- Implement the function generally speaking, you should be able to copy/paste an
  existing function and adjust from there intuitively
  - name
  - params and return type
  - description/docs
  - function implementation
  - sqlSpec. (usually ok to `NotImplementedTodo`)
  - previewable - Pure, Impure, or ImpurePreviewable?
  - deprecated - NotDeprecated
- Should some other function be deprecated in favor of this? If you're creating
  a new version of an existing function, probably yes.

## Add tests covering the function

- Most pure functions are testable solely with execution test files they don't
  require recompilation consider test file. Refer to
  `backend/testfiles/execution`.
- Other functions may require more nuanced testing in `backend/tests/Tests`.

## Test the function in the editor

- try it out! Does it generally work as expected?
- if it's a Pure (or ImpurePreviewable?) function, check to see if Analysis
  behaves appropriately (e.g. does evaluating the function require a you
  clicking the 'Play' button in the Editor?)

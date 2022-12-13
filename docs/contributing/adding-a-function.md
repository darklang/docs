---
title: Adding a built-in function
---

Adding a built-in or "Standard Library Function"...

## Define the function

- where should it go - BackendOnlyStdLib or
- docs
- params and return type
- implementation
- return
- sql. usually ok to NotImplementedTodo
- is the function 'pure'?
- should some other function be deprecated in favor of this? If you're creating
  a new version of an existing function, probably yes.

## Add tests covering the function

- most pure functions are testable solely with execution test files they don't
  require recompilation consider test file

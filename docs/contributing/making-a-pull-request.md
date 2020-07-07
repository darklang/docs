---
title: Making a Pull Request 
---

## Code Checklist

- Never change an existing Dark standard library function. Make a new one (with
  a new version) and deprecate the old one. It is however safe to fix the type
  signature on an existing function, or to change its docstring.
- Don't change existing serialized types, as that breaks the serializer.
  Serialized types are in `Serialization_format.ml` and have `[@@deriving ...
  bin_io]` next to their type definitions.


## Writing a successful Pull Request message

When writing a pull request, there are some steps you can take to make it easier to accept the contribution:

- explain the problem you're solving. If this is explained elsewhere, link to it
- explain how your solution addresses the problem
- highlight any choices you've made in the implementation
- make clear what the product and user-facing changes are, especially if it could break anything for existing users
- if the change is in the editor, include a before/after screenshot or GIF

Highlighting these will make it much easier to know that this code is safe. The
pull request template asks for these.

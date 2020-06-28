---
id: common-pitfalls
title: Common pitfalls
---


## Changes to avoid

- Never modify a Dark standard library function. Make a new one (with a
  new version) and deprecate the old one. It is however safe to fix the
  types on an existing function, or to change it's docstring.


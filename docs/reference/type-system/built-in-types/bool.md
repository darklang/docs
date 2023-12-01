---
title: "Bool"
sidebar_label: "Bool"
sidebar_position: 1
keywords:
  - types
draft: false
---

Booleans are either `true` or `false`.

```darklang
let succeeded = true
```

## Methods

### And

The logical AND of two boolean values. Returns a bool.

#### Definition

Bool::and(Bool, Bool) -> Bool

#### Example

```darklang
let x = true
let y = false
Bool::and x y
```

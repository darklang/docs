---
title: "Language Reference"
sidebar_label: "Language Reference"
sidebar_position: 1
keywords:
  - types
  - control
  - control-flow
draft: false
---

## Type System

The darklang type system is based on functional languages such as F#.

### Bool

Booleans are either `true` or `false`.

```darklang
let succeeded = true
```

### Int

Integers are, by default, 64 bit signed integers.

```darklang
let x = 42
```

Other integer sizes supported are described below. To declare a variable with a
specific integer size, append the size suffix to the value.

| F# Equivalent | Description           | Suffix | Examples |
| ------------- | --------------------- | ------ | -------- |
| int8          | signed 8 bit number   | y      | 42y      |
| uint8         | unsigned 8 bit number | uy     | 42uy     |

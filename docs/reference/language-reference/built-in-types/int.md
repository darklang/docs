---
title: "Int"
sidebar_label: "Int"
sidebar_position: 2
keywords:
  - types
  - integer
  - unsigned
  - number
  - long
draft: false
---

Integers are, by default, 64 bit signed integers.

```darklang
let x = 42
```

Other integer sizes supported are described below. To declare a variable with a
specific integer size, append the size suffix to the value.

| F# Equivalent | Description                    | Suffix | Examples          |
| ------------- | ------------------------------ | ------ | ----------------- |
| int8          | signed 8 bit number            | y      | `let fizz = 42y`  |
| uint8         | unsigned 8 bit number          | uy     | `let buzz = 42uy` |
| int16         | signed 16 bit number           | s      | `let fizz = 42s`  |
| uint16        | unsigned 16 bit number         | us     | `let buzz = 42us` |
| int32         | signed 32 bit number           | l      | `let fizz = 42l`  |
| uint32        | unsigned 32 bit number         | ul     | `let buzz = 42ul` |
| int64         | signed 64 bit number (default) | L      | `let fizz = 42`   |
| uint64        | unsigned 64 bit number         | uL     | `let buzz = 42uL` |
| int128        | signed 128 bit number          | Q      | `let fizz = 42Q`  |
| uint128       | unsigned 128 bit number        | Z      | `let buzz = 42Z`  |

## Methods

### Absolute Value

The mathmatical absolute value of the integer.

#### Definition

Int::absoluteValue(Int: a) -> Int

#### Example

```darklang
let x = -1
let y = 1
let X = Int::absoluteValue x
let Y = Int::absoluteValue y
[X,Y]
```

This trace returns: [1,1]

### Add

The sum of two integers.

#### Definition

Int::add(Int: a, Int: b) -> Int

#### Example

```darklang
let x = -1
let y = 1
let z = Int::add x y
z
```

This trace returns: 0

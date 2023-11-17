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

:::warning

The type system is being developed. The documentation presented here reflects
the goal and may differ from current system behavior. Contributions are welcome
to speed delivery.

:::

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

### Float

Floats are double-precision 64-bit floating-point values (IEEE 754).

Any variable with a decimal is a Float. In the following code, each of the
variables is Float typed:

```darklang
let x = 3.14
let y = 3.0
let z = 3.
let w = -123.456E-789
```

### Character

A character in Darklang represents a character that you see on your screen, such
as `a`, `1`, `Ż`, `🇵🇷`, `👩‍👩‍👧‍👦`. This is in contrast to most languages, where a
character represents one byte, or perhaps a Unicode codepoint.

The technical name for a Darklang character is an Extended Grapheme Cluster and
can best be thought of as supporting the entire character you see in front of
you. In the case of an emoji, this includes combining characters and skin tones.
See [String](### String) for additional context.

Simple Example:

```darklang
let char = 'a'
```

Escaped Character Example:

```darklang
let quote = '\''
let backslash = '\\'
let newline = '\n'
let return = '\r'
let tab = '\t'
```

Unicode Byte Value Example:

```darklang
let Z = \x005A
let O_with_Diaeresis = \x00D6 # Ö
```

Multi-byte Character Example:

```darklang
let happy_face = \x1F600  # 😀
```

### String

A String is unicode text. Specifically, strings are immutable sequences of UTF-8
code points. This differs from a character which is a single unicode code point
(single visual character).

Strings are enclosed in double quotes.

```darklang
let name = "Darklang"
```

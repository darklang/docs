---
title: "Built-In Types"
sidebar_label: "Built-In Types"
sidebar_position: 1
keywords:
  - types
  - conversion
draft: false
---

The darklang type system is based on functional languages such as F#.

:::warning

The type system is being developed. The documentation presented here reflects
the goal and may differ from current system behavior. Contributions are welcome
to speed delivery.

:::

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

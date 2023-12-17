---
title: "Bool"
sidebar_label: "Bool"
sidebar_position: 1
keywords:
  - boolean
  - logic
draft: false
---

Booleans are either `true` or `false`.

```darklang
let succeeded = true
```

## Functions

### And

The logical AND of two boolean values. Returns a bool.

#### Truth Table

| X | Y | AND(X,Y) |
|---|---|---|
| false | false | false |
| false | true | false |
| true | false | false |
| true | true | true |

#### Definition

Bool.and(Bool, Bool) -> Bool

#### Examples

```darklang
let x = true
let y = false
Bool.and x y
```

This trace returns: false

```darklang
let x = [false,false,true,true]
let y = [false,true,false,true]
List.map2 x y \a, b -> Bool.and a b
```

This trace returns:
[
  false, false, false, true
]

#### Shorthand: &&

A double ampersand provides an inline shortcut for Bool.and(). Note that this operator is lazy (the right hand term is only evaluated if the left hand term does not determine the result)

#### Example

```darklang
let x = true
let y = false
x && y
```

This trace returns: false

----

### OR

The logical OR of two boolean values. Returns a bool.

#### Truth Table

| X | Y | OR(X,Y) |
|---|---|---|
| false | false | false |
| false | true | true |
| true | false | true |
| true | true | true |

#### Definition

Bool.or(Bool, Bool) -> Bool

#### Examples

```darklang
let x = true
let y = false
Bool.or x y
```

This trace returns: true

```darklang
let x = [false,false,true,true]
let y = [false,true,false,true]
List.map2 x y \a, b -> Bool.or a b
```

This trace returns:
[
  false, true, true, true
]

#### Shorthand: ||

A double vertical pipe provides an inline shortcut for Bool.or(). Note that this operator is lazy (the right hand term is only evaluated if the left hand term does not determine the result)

#### Example

```darklang
let x = true
let y = false
x || y
```

This trace returns: true

----

### NOT

The logical NOT of a boolean value. Returns a bool.

#### Truth Table

| X | NOT(X) |
|---|---|
| false | true |
| true | false |

#### Definition

Bool.not(Bool, Bool) -> Bool

#### Examples

```darklang
let x = true
Bool.not x
```

This trace returns: false

```darklang
let x = [false,true]
List.map x \a -> Bool.not a
```

This trace returns:
[
  true, false
]

----

### XOR

The logical exclusive OR of two boolean values. Returns a bool.

#### Truth Table

| X | Y | XOR(X,Y) |
|---|---|---|
| false | false | false |
| false | true | true |
| true | false | true |
| true | true | false |

#### Definition

Bool.xor(Bool, Bool) -> Bool

#### Examples

```darklang
let x = true
let y = false
Bool.xor x y
```

This trace returns: true

```darklang
let x = [false,false,true,true]
let y = [false,true,false,true]
List.map2 x y \a, b -> Bool.xor a b
```

This trace returns:
[
  false, true, true, false
]

----

### ToString

Returns the value of the variable as a string.

#### Definition

Bool.toString(Bool) -> String

#### Examples

```darklang
let x = true
Bool.toString x
```

This trace returns: "true"

```darklang
Bool.toString false
```

This trace returns: "false"

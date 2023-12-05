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
Bool::and x y
```

This trace returns: false

```darklang
let x = [false,false,true,true]
let y = [false,true,false,true]
List::map2 x y \a, b -> Bool::and a b
```

This trace returns:
[
  false, false, false, true
]

#### Shorthand: &&

A double ampersand provides an inline shortcut for Bool:and(). Note that this operator is lazy (the right hand term is only evaluated if the left hand term does not determine the result)

#### Example

```darklang
let x = true
let y = false
x && y
```

This trace returns: false

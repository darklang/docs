# Python Cheat Sheet

This guide will help you learn Darklang if you're familiar with Python.

Have a tip to add to the guide?
[Submit a PR](https://github.com/darklang/docs/pulls)!

## Comments

In Python, you use a `#` to start a comment:

```python
# This is a comment
```

In Darklang, you use a `let _ =` to start a comment, and you write the comment as a
String:

![from-python/comment.png](/img/from-python/comment.png)

## Strings

In Python, you can write a String in multiple ways:

```python
"This is a string"
'This is also a string'
```

In Darklang, you always use double quotes:
![from-python/string.png](/img/from-python/string.png)

## Functions

In Python, you use the `def` keyword to define a function:

```python
def say_hello():
    print('Hello World')
```

and you call a function with the function name, followed by parentheses:

```python
say_hello()
```

In Darklang, you create a function from the sidebar:

![from-python/functionside.png](/img/from-python/functionside.png)

This will open a new function in the function space, where you can define the
name of the function and its contents:

![from-python/function.png](/img/from-python/function.png)

## Standard Library/Built-in Functions

Python defines a set of built in functions that are called like this:

```python
# This returns 2 to the power of 2.
math.power(2,2)
```

Darklang has a set of built in functions as well, which can be accessed via the
autocomplete:

![from-python/power.gif](/img/from-python/power.gif)

## If/Elif/Else statements

In Python, you would write an `if` statement like this:

```python
a = 5
b = 10

if p > a:
   print("b is greater than a")
elif a == b:
   print("a and b are equal")
else
    print("a is greater than b")
```

In Darklang, the same statement would look this this:

![from-python/ifs.png](/img/from-python/ifs.png)

Note that we highlight the path your code takes - so if we were to change the
values, a different piece of the `if` statement would be highlighted:

![from-python/ifs2.png](/img/from-python/ifs2.png)

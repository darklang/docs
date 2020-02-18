---
id: structured-editing
title: Structured Editing
---

- The editor is *only supported* for Chrome *without* browser extensions. (Other browsers do not yet have all of the features we need. Browser extensions often interfere).
- If you are struggling with the editor and haven’t read them yet, we strongly recommend the overview of [backend components](dark-backend-components.md) & [trace driven development](trace-driven-development.md). The best place to start is writing line-by-line and checking the live value at each step.
- Write primarily in handlers, not functions.
- The editor is expression based, and it will help to think of it that way vs. as text or lines. Cursor placement is important. If you want to look at the result of an expression, or use a command on it, the :: is a good option for where to put your cursor.
- Enter completes a field and leaves the cursor at the end of that field, tab completes and moves to the next blank (even if the blank is not nearby), and space moves one space forward (as you would expect in text).
- The editor still has some quirks (we’re sorry!) please tell us about places where you feel like you can’t type, or are fighting with the editor. The best place to report bugs or feedback is the [Dark Community Slack](https://darklang.com/slack-invite).

## Refactoring and editing code

### Undo/redo

Dark supports unlimited undo/redo in a single element. Undo with `Ctrl-Z`/`Cmd-Z` and redo with `Ctrl-Shift-Z`/`Cmd-Shift-Z`.

### Command Palette

If you’re looking to do something that is not immediately available, chances are it’s in the command palette (accessed by hitting `Alt-X`/`Option-X`).

![assets/refactoring/Screen_Shot_2020-01-07_at_1.40.42_PM.png](assets/refactoring/Screen_Shot_2020-01-07_at_1.40.42_PM.png)

This includes the common refactoring tools:

- Extract a function or variable for re-use
- Create a type
- Wrap the current expression in a let (insert let here)
- Insert a let-expression above this one
- Wrap an expression in an if, if-then, or if-else

## More Refactoring Tools

### Copy/paste

You can copy/paste selections, which is often used for refactoring.

It may be helpful to note that copy/paste only works in Dark between handlers
at this time. Copying JSON from an external source will paste into your
handlers in Dark, but if you write code in the Dark language in your text
editor of choice, that code will not paste. We hope to improve this experience
in the future.

### Pipelines

Pipelines are a key part of the Dark language. To start one, select the code
that has the result that you want to pipe, and hit `shift-enter` or type `|>`.

![assets/refactoring/Screen_Recording_2020-01-07_at_01.56_PM.gif](assets/refactoring/Screen_Recording_2020-01-07_at_01.56_PM.gif)

### Blocks/lambda

The arguments to map/fold/etc are functions, however currently, the only
argument allowed is an anonymous function (also called a block), which is
created by typing `lambda` or hitting `\`.

![assets/refactoring/Screen_Shot_2020-01-07_at_2.17.43_PM.png](assets/refactoring/Screen_Shot_2020-01-07_at_2.17.43_PM.png)

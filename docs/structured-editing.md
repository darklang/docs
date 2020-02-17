---
id: structured-editing
title: Editor
---

- The editor is *only supported* for Chrome *without* browser extensions. (Other browsers do not yet have all of the features we need. Browser extensions often interfere).
- If you are struggling with the editor and haven’t read them yet, we strongly recommend the overview of [backend components](dark-backend-components.md) & [trace driven development](trace-driven-development.md). The best place to start is writing line-by-line and checking the live value at each step.
- Write primarily in handlers, not functions.
- The editor is expression based, and it will help to think of it that way vs. as text or lines. Cursor placement is important. If you want to look at the result of an expression, or use a command on it, the :: is a good option for where to put your cursor.
- Enter completes a field and leaves the cursor at the end of that field, tab completes and moves to the next blank (even if the blank is not nearby), and space moves one space forward (as you would expect in text).
- The editor still has some quirks (we’re sorry!) please tell us about places where you feel like you can’t type, or are fighting with the editor. The best place to report bugs or feedback is the [Dark Community Slack](https://darklang.com/slack-invite).



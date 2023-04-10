---
id: unique-aspects
title: Unique Aspects
sidebar_label: Unique Aspects
---

Darklang being connected to the editor and infrastructure allows for unique
language functionality.

## Play & Replay Buttons

The language being connected to the editor and infrastructure allows interactive
functions.

- Functions that do not have side effects (like `Int::add`) run automatically.
- Functions with side effects have play buttons. Press the play button to
  execute the function for the selected trace.

![unique/playbutton.png](/img/unique/playbutton.png)

The replay icon indicates the function has been executed already. Pressing it
executes the code for the trace again.

![unique/replaybutton.png](/img/unique/replaybutton.png)

Replay an entire handler for the selected trace (including all functions within
the handler) in the upper right. This would replay `DB::generateKey` and
`DB::set`.

![unique/replayhandler.png](/img/unique/replayhandler.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/nhShq-HCFxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Function Versioning

You can see that many standard library items are labeled “`v3`” or “`v1`” in the
editor. These refer to the version of the function. When you start a new canvas,
you will always have the latest versions. If we upgrade, you’ll have the choice
to do so, but can continue to use the old ones.

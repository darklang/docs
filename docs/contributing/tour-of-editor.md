---
title: A tour of the Editor
---

The editor is in `client/`. We refer to it as the client or the editor (we don't
call it the frontend though).

It started life as an Elm application, and still uses the Elm Architecture
(which we like). The current app is in Bucklescript.

## Elm architecture

The Elm architecture is a simple render loop, very similar to React (and
especially redux):

- the entire application state is a single value called `model`
- each user action creates a `Msg`, which is passed to `Main.update`
- `Main.update` produces a new `model`, as well as some `Cmd`, which are
  interactions with the outside world.
- Executing the `Cmd` may introduce other `Msg`s, such as a `Cmd` which makes an
  API call - the API response would be handled using a `Msg`.
- Regularly, the `Main.view` command is called to generate HTML. The HTML uses a
  Virtual DOM, like Elm and React do, and diffs the new Virtual DOM against the
  old one, applying the diffs to the real DOM.

TODO: give an example of a lifecycle here

The implications are interesting:

- all changes are functional - there are no changes to the model except through
  the update,
- no callbacks - every event generates a message, which makes an orderly update,
- static typing - you are pretty much forced to handle all the events you
  create.

There are also some downsides:

- components aren't as neat as in React; often a change is spread across the
  application. Single changes often require changing 6 different files
- when you need something outside these bounds, it can be quite challenging to
  find out how to do it
- does not always play well with traditional JS libraries (however, for an app
  like ours which is often quite custom, this isn't that big a deal)

This is how Elm architectures typically work. Our app mostly works like this,
but there are some exceptions:

- `Main.update` delegates most of the work to `Main.update'`. `Main.update'`
  produces a `Modification` instead of a `(Model, Cmd)`, and a modification then
  produces the `(Model, Cmd)` pair you expect.
- we do sometimes directly read from the DOM or other global state (like the
  random number generator or the History API)

And there are some downsides to our app as well:

- `Main.res` is a mess
- modifications were a bad idea
- a single change can be spread far across the codebase

Fortunately, we have started componentizing a little bit, and this has helped.
The Fluid codebase (actually editing the UI) for example is quite separated from
unrelated code.

### The fluid editor

Whenever you type code, you are using the "fluid" editor. This is a structured
editor that is designed to feel like text when typing.

A structured editor is means that you cannot write invalid code. The editor
edits the AST of the program

### More coming soon

### Command palette

### Autocomplete

### "Forms" editor

### Analysis

### Ops

### An API call, end-to-end

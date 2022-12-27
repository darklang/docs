---
title: Debugging
---

## Log statements

Both the frontend and backend have simple log statements used during local
development, which return `()`.

### Client

In the `client`, you may log with either of:

- `Js.log2("my message", anyValue)`
- `Debug.loG("my message", anyValue)`

Both of these print in the browser console, with `Debug.loG` being more
flexible.

### Backend

In the `backend` you may log with `print` or `printMetadata`. `print` takes a
single `string` argument while `printMetadata` allows you to pass in an
additional `List<string * obj>` of metadata.

```fsharp
print "Starting ApiServer"
printMetadata "Starting ApiServer" [("timestamp", DateTimeOffset.Now)]
```

The logs may be found in `rundir/logs`, in a file corresponding to the
executable that is logging. For example, ApiServer will log to
`rundir/logs/apiserver.log`

## Fuzzer

## Contributor Editor Debugging Tools

There are some tools built into the Editor to help with debugging. These include
a Fluid debugger and the ability to view the AST of your handlers' code. You may
turn these on by going to the Contributing tab of the Settings menu within the
Editor.

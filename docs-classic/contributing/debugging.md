---
title: Debugging
---

## Log statements

Both the frontend and backend have simple log statements used during local
development, which return `()`.

### Backend

In the `backend` you may log with `print` or `printMetadata`. `print` takes a
single `string` argument while `printMetadata` allows you to pass in an
additional `List<string * obj>` of metadata.

```fsharp
print "Starting BwdServer"
printMetadata "Starting BwdServer" [("timestamp", DateTimeOffset.Now)]
```

The logs may be found in `rundir/logs`, in a file corresponding to the
executable that is logging. For example, BwdServer will log to
`rundir/logs/bwdserver.log`

## Fuzzer

## Contributor Editor Debugging Tools

There are some tools built into the Editor to help with debugging. These include
a Fluid debugger and the ability to view the AST of your handlers' code. You may
turn these on by going to the Contributing tab of the Settings menu within the
Editor.

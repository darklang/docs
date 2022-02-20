---
id: introduction
title: Introduction to Darklang
---

Darklang is am integrated language, framework, and editor for building web backends:
REST API endpoints, asynchronous background workers, scheduled jobs, and persistent
storage. Dark's framework is tightly coupled to the infrastructure, and as you write
code you're able to develop from real incoming requests/traces.

## Hello World

![Hello World](/img/helloworld.gif)

Above, you can see how to create a simple Hello World application in Dark.  Starting
with an empty canvas in the Darklang editor, it creates a HTTP endpoint (`GET
/hello`), and adds code (`"Hello world"`) to return a response. That endpoint is
immediately [available in the cloud](https://ellen-helloworld3.builtwithdark.com/hello).

## Guide to documentation

The documentation is split into
- [tutorials](./tutorials)
- [how-to guides](./how-to)
- [background, discussions and explanations](./discussion)
- [reference materials](./reference)

New folks should start at the [Your first Darklang application](./tutorials/first-dark-application) tutorial to get started.

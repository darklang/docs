---
id: http
title: HTTP Responses
sidebar_label: HTTP Responses
---

The result of HTTP handlers are automatically converted into HTTP responses. By
default, they are converted to JSON, and returned with a content-type based on
their type: records, dictionaries and lists are given the content-type
`"application/json; charset=utf-8"`, all other types are given the content-type
`"text/plain; charset=utf-8"`.

_We recogize this is a poor choice, and future versions of the HTTP stack will
have better default behaviour._

The `HTTP::` module provides functions to create responses to external HTTP
calls. Each response function, such as `Http::response`, creates a response
value; a response value returned by the handler will be sent as a response to
the client.

![HTTPResponseWith](/img/http/respondwith.png)

The live value beneath the handler will show the return value.

![HTTPForbidden](/img/http/response.png)

To set cookies, you can use `HTTP::setCookie` to create a suitable HTTP header.
![HTTPRespondWithHeaderSetCookie](/img/http/setcookie.png)

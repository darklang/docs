# HTTP Client

## Overview

Darklang is designed for interacting with 3rd party APIs over HTTP. The
`HttpClient::` module has a set of functions for calling out to other HTTP
services and APIs.

### HttpClient

`HttpClient::` supports the core verbs: `GET`, `POST`, `PATCH`, `PUT`, and
`DELETE`, as well as `OPTIONS`. Each takes 3-4 parameters: `uri`, `query`,
`body`, and `header`. `GET`, `DELETE`, and `OPTIONS` do not take a body.

![HttpClientPost](/img/httpclient/httpclientpost.png)

There are built-in header functions for commonly used headers, including for
authentication (`HttpClient::basicAuth` and `HttpClient::BearerToken`) and
content types for plain text, JSON, HTML, and forms. Headers are dictionaries;
to combine two headers, use `Dict::merge`.

![HttpClientPost](/img/httpclient/header.png)

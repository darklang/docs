---
id: httpclient
title: HTTP Client
sidebar_label: HTTP Client
---

## Overview

Dark is designed for interacting with 3rd party APIs over HTTP. The
`HTTPClient::` module has a set of functions for calling out to other HTTP
services and APIs.

### HTTPClient

`HTTPClient::` supports the core verbs: GET, POST, PATCH, PUT, and DELETE, as well as OPTIONS. Each takes 3-4 parameters: uri, query, body, and header. GET, DELETE, and OPTIONS do not take a body.

![HTTPClientPost](assets/httpclient/httpclientpost.png)

There are built-in header functions for commonly used headers, including for
authentication (`HTTPClient::basicAuth` and `HTTPClient::BearerToken`) and
content types for plain text, JSON, HTML, and forms. Headers are dictionaries;
to combine two headers, use `Dict::merge`.

![HTTPClientPost](assets/httpclient/header.png)

To add a header with a "-" in its name, use `Dict::set`.

![HTTPClientGet](assets/httpclient/hyphen.png)

### HTTP

`HTTP::` Provides a library of formatted responses to external HTTP calls. Setting `response=HTTP::` will result in a formatted record, but it will not be sent to the client unless it is returned by the handler.

![HTTPForbidden](assets/httpclient/respondwith.png)

The live value beneath the handler will show the return value.

![HTTPForbidden](assets/httpclient/response.png)

The response can be used without being bound to a variable.

![HTTPForbidden](assets/httpclient/response2.png)

There are also HTTP functions that can be used to support these responses or used in a header, for instance `HTTP::setCookie`.

![HTTPRespondWithHeaderSetCookie](assets/httpclient/setcookie.png)

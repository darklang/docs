---
id: httpclient
title: HTTP & HTTP Client
sidebar_label: HTTP & HTTP Client
---

## Overview

The foreign function interface for Dark is REST APIs. We have server side functions (HTTP) and client side functions (HTTPClient).

### HTTPClient Verbs

`HTTPClient::` supports the core verbs: GET, POST, PATCH, PUT, and DELETE, as well as OPTIONS. Each takes 3-4 paramters: the uri, query, body, and header. GET, DELETE, and OPTIONS do not take a body.

![HTTPClientPost](assets/httpclient/httpclientpost.png)

There are also formatting functions for your headers. This includes Auth (`HTTPClient::basicAuth` and `HTTPClient::BearerToken`) and content types for plain text, JSON, HTML, and form. If you need to combine two headers, you can use `Dict::merge`.

![HTTPClientPost](assets/httpclient/header.png)

If you need a custom header that allows "-" which is currently not allowed using records, you can use `Dict::set`. We will be making modifications to make this simpler.

![HTTPClientGet](assets/httpclient/hyphen.png)

### HTTP

`HTTP::` Provides a library of formatted responses to external HTTP calls. Setting `response=HTTP::` will result in a formatted record, but it will not be sent to the client unless it is returned by the handler.

![HTTPForbidden](assets/httpclient/respondwith.png)

The live value beneath the handler will show the return value.

![HTTPForbidden](assets/httpclient/response.png)

The response can be used without being bound to a variable.

![HTTPForbidden](assets/httpclient/response2.png)

There are also HTTP functions that can be used to support these responses, for instance `HTTP::setCookie`, which can be used in a header.

![HTTPRespondWithHeaderSetCookie](assets/httpclient/setcookie.png)
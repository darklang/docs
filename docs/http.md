---
id: http
title: HTTP responses
sidebar_label: HTTP responses
---

### HTTP

The `HTTP::` moduled provides functions to create responses to external HTTP
calls. Each response function, such as `Http::respond`, creates a response value; a response value
returned by the handler will be sent as a response to the client.

![HTTPForbidden](assets/http/respondwith.png)

The live value beneath the handler will show the return value.

![HTTPForbidden](assets/http/response.png)

To set cookies, you can use `HTTP::setCookie` to create a suitable HTTP header.

![HTTPRespondWithHeaderSetCookie](assets/http/setcookie.png)

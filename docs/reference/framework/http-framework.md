# HTTP Framework

HTTP requests to a Darklang application are automatically routed to handlers in
your canvas.

## Routing

If your canvas is `myusername-app1`, then requests to
`https://myusername-app1.builtwithdark.com`, with any path, will go to your
canvas.

Each handler has a HTTP method (such as `GET`, `POST`, etc) - anything is
allowed here since HTTP allows any method, and the autocomplete will provide the
most common as options.

Each handler has a route, such as `/users/paul`.

If a request's path does not match any handler's route, Darklang will respond
with a 404. A trace for this request is stored and shown in the 404 list in the
sidebar, which can be turned into a handler.

Requests starting in `http://` will result in a 302 redirect to the `https://`
equivalent.

We have a built-in favicon to respond to `favicon.ico` requests - however you
can override this with your own.

## Request variables

The contents of the request will be available in your handler as the variable
`request`. It has the following fields:

- `formBody`: the body, parsed as using form-encoding. If it cannot be parsed,
  this will be `null`
- `jsonBody`: the body, parsed as JSON. If it cannot be parsed, this will be
  `null`
- `body`: the contents of either `jsonBody` or `formBody`, or null if neither
  are set
- `headers`: a dictionary of all the headers.
- `cookies`: a dictionary of the cookies
- `queryParam`: a dictionary of the parameters in the query string (e.g.
  `/?a=b`)
- `url`: the full URL of the request

The request's IP address can usually be found in
`request.headers.x-forwarded-for`. This is a string with multiple IP addresses,
separated by commas, representing the steps taken by the request as it moved
through the internet. Usually, the first IP address is the one that made the
request (e.g. that's your user).

Other variables will be available from dynamic routing.

### Dynamic routes

Darklang support dynamic routing, by using a variable such as `:somevar` in a
handler's route. For example, handler with `/users/:username` will receive any
request starting in `/users/` that has another character, such as `/users/paul`
(that is, `/users/` and `/users` will not be matched). A variable with that name
will be in scope - in this example `username` will be available to use in the
handler.

Incoming paths are segmented at each `/`, and different variables can match each
segment. For example, the route `/:users/:username` would match `/users/paul/`
and `/users/:username/projects/:id` would match `/users/paul/projects/1`.

It is possible that a single path would match multiple handlers. In this case,
the most specific match will be used. For example, with the handlers
`/users/paul/projects/1` would match against `/users/:username/projects/:id` as
that is more specific than `/users/:username`.

However, if `/users/:username/projects/:id` were not present, it would match
against `/users/:username` (in this case, the variable `username` would have the
value `paul/projects/1`.

Often, you'll want to do client-side routing in a JS app. In this case you would
set two HTTP GET handlers, with the routes `/` and `/:rest`, and use them to
respond with your JS assets (see [Static Assets](/how-to/static-assets)). You
can then add specific routes like `/changelog` or `/sitemap.xml` which will
override the less specific routes. For APIs, you could add routes like
`/api/v1/users/:username`, which are more specific. For an API fallback, add
`/api/:rest` to return a 404 instead of responding with the JS assets.

## Traces

All requests are stored as traces. Traces are automatically deleted once they
are a week old, except the last 10 for each handler.

## Responses

The result of HTTP handlers are automatically converted into HTTP responses. By
default, they are converted to JSON, and returned with a content-type based on
their type: records, dictionaries and lists are given the content-type
`"application/json; charset=utf-8"`, all other types are given the content-type
`"text/plain; charset=utf-8"`.

_We recognize this is a poor choice, and future versions of the HTTP stack will
have better default behavior._

The `HTTP::` module provides functions to create responses to external HTTP
calls. Each response function, such as `Http::response`, creates a response
value; a response value returned by the handler will be sent as a response to
the client.

![HTTPResponseWith](/img/http/respondwith.png)

The live value beneath the handler will show the return value.

![HTTPForbidden](/img/http/response.png)

To set cookies, you can use `HTTP::setCookie` to create a suitable HTTP header.
![HTTPRespondWithHeaderSetCookie](/img/http/setcookie.png)

# Backward compatibility

We aim to keep Darklang's behavior consistent and backwards compatible, in order
to prevent your programs from changing without your knowledge. Sometimes cannot
achieve this due to the underlying technology (e.g. HTTP servers and proxies,
JSON parsers/serializers, etc) that we are built-on top of.

## Serialized Darklang values

Darklang serialized values appear in HTTP responses, in functions like
`toString` and `Dict::toJSON`, and are sent to servers using `HttpClient::`
functions.

- Darklang may change the formatting of values as they are serialized to users.
  Typically, we will only do this to correct incorrect behavior.

- Darklang tries to generate standard JSON. We don't always, and where we
  generate non-standard JSON, we may switch to generating more standard JSON.

- We may switch the format of JSON (indentation, spacing, etc), at any point to
  make it prettier.

- Darklang serializes integers to JSON as integers, even when they are larger
  than standard JSON values.

- Darklang does not promise to parse non-standard JSON (it may do so in some
  cases, please do not rely on this). Where Darklang does parse non-standard
  JSON, it may stop doing so without warning.

## Dictionaries and Database ordering

When fetching lists of data from databases, or converting dictionaries or sets
to lists, we make no promises as to the ordering of values, and may change them
without warning.

## Unicode

Unicode is a moving standard, and Darklang strings will upgrade behind the
scenes based on the latest standard. The changes will not necessarily happen in
backwards compatible ways.

## Language/framework behavior

Error messages in Darklang may change at any time. We recommend that you do not
use Darklang error messages as user-facing values, or if you do, set
expectations that they may change.

## HTTP / Transport

Darklang may move to newer version of HTTP (HTTP/2, HTTP3) without warning and
without maintaining exact HTTP/1.1 compatibility.

## Timeouts

Not all parts of Darklang have timeouts, but we may add or change timeouts to
make the service run better.

## Private APIs

Darklang's APIs (such as those used in the editor) are private and may change at
any time. Feel free to use them, but do not rely on them in any way. If you wish
to build on them, please contact us and we may be able to find ways to help.

# Darklang Release 2

June 6th, 2022

_See the [blog post](https://blog.darklang.com/darklang-release-3/) for further
discussion._

Darklang Release 2 is the culmination of 20 months work of rewriting the backend
from OCaml to F#. This was done to give us more productivity by allowing us use
more 3rd party SDKs, to solve operational issues, and to make it easier to
contribute. Our reasons for making the change were discussed at the time:
[1](https://blog.darklang.com/new-backend-fsharp/),
[2](https://blog.darklang.com/why-dark-didnt-choose-rust/),
[3](https://blog.darklang.com/leaving-ocaml/).

- The editor backend was fully migrated by April 2nd.
- HTTP backends (for builtwithdark.com) were finished converting on May 3rd.
- The migration to the new queues was fully converted on May 27th.
- The execution engine in the editor was switched over on June 5th.

The change was documented in a series of blog posts:
[1](https://blog.darklang.com/hows-the-dark-rewrite-going/),
[2](https://blog.darklang.com/changes-the-the-dark-rewrite/),
[3](https://blog.darklang.com/optimizing-tasks-in-fsharp/),
[4](https://blog.darklang.com/benchmarking-fsharp6-tasks/),
[5](https://blog.darklang.com/darklang-year-in-review-2021/),
[6](https://blog.darklang.com/try-out-the-new-darklang-backend/), and
[7](https://blog.darklang.com/backend-rewrite-complete/).

Thanks to everyone who contributed, including
[Araceli Sánchez](https://github.com/Athinanarof),
[Lev Lazinskiy](https://github.com/levlaz),
[María José Dávila](https://github.com/mariajdab),
[Matthew Jeffryes](https://github.com/mjeffryes),
[jwalter](https://github.com/jwalter),
[Daniela Campagna](https://github.com/danicampagna),
[Sean Manton](https://github.com/sxmanton), and especially
[Stachu Korick](https://github.com/stachudotnet).

## Major changes

- Darklang's implementation is now asynchronous, meaning that your programs will
  no longer be stuck behind other users' programs making HTTP or DB calls. This
  was a major source of slow Dark programs experienced by most users.

  As well as massively reducing latency for programs written in Dark, the editor
  now loads much faster.

  We have also switched from dozens of tiny machines to a smaller number of much
  more powerful machines. This makes your programs run faster on average, even
  when accounting for the switch to an asynchronous implementation.

- You can now put a lambda in a variable and pipe into it.

- Most error messages are improved, especially for bad input.

- The queues have been rewritten and should not longer suffer from the old
  sources of occasional downtime and slow-down.

- During a deploy of the Dark service, cron jobs no longer run the risk of
  running twice.

- There is now a [Status page](https://status.darklang.com).

- Dark's internal firewalls have been significantly improved

- Several bottlenecks to outbound HTTP requests have been identified and removed

- `String::length` is now `O(1)` instead of `O(N)`

- JSON output is now significantly faster

- When reading strings from a user, the string is only passed over once.

- Traces are now stored in the background, after a request has completed,
  greatly reducing response time on HTTP requests to Dark programs.

- Dark has moved to more powerful cloud machines, going from Google' Cloud's
  deprecated N1 machines to extremely powerful T2D machines (2.3x faster)

- The rewrite also addressed some underlying issues that will come out in new
  features soon, including a better type system, support for characters and
  tuples, fixes for poor behavior in Date and String functions, and more. These
  issues are tracked in our new
  [project tracker](https://github.com/darklang/dark/projects/1#column-15173588).

### Error messages

All error messages have been renovated, attempting to make them more consistent
and to reuse error message machinery. As a result, a majority of Dark error
messages have changed. If you were relying on the explicit format of a Dark
language or StdLib error message, expect that it will be different.

If you do any error handling which relies specifically on the text of an error
message coming from Dark, we recommend you no longer do that, and just use the
presence of the error instead of the text.

There are two places in Dark which use string error messages:

#### `Result.Error`s

The `Error` enum (referred to as `Result.Error` below for clarity), will contain
a string error in most cases, which you might be using directly or indirectly.

You might be accessing `Result.Error`s and their text contents directly using
the `match` statement.

You might also be accessing their text contents indirectly, using `toString`, or
other stringifying functions, such as `toString`, `JSON::` functions and
`HTTPClient::` functions. This is only true if you taken the function returning
the `Result.Error` off the error rail. This text may also make it to your
web/mobile clients or API consumers.

`Result.Error`s returned via a HTTP handler are not presented to the user, so
text cannot leak that way.

#### Runtime errors

Runtime errors (including type errors) are not accessible via Dark programs, and
will always terminate the Dark program when they are accessed. As a result, the
text of any runtime error should not be accessible to your programs or your
users.

## Minor improvements and fixes

- Dark used to return the `Access-Control-Allow-Origin` header in lower-case, it
  is now returned in mixed case.

- When making a web request to your Dark application, if you did not specific a
  `user-agent` header, Dark used to add a `user-agent` header of
  `ocaml-cohttp/1.2.0`. We no longer add this header.

- When making a web request to your Dark application with a `content-type`
  header of `text/ping`, Dark used to ignore the code and immediately return a
  response of status code 418. It now processes the request instead.

- `HttpClient::*` functions called with usernames and passwords in the URL can
  now support arbitrary UTF-8 (in the past, Unicode was not supported.)

- `X509::pemCertificatePublicKeys` used to only work for RSA keys. It now also
  supports DSA and ECDSA keys. The old version would read ECDSA keys and return
  an incorrect answer - it now returns a correct answer.

- `String::split` would fail if the 2nd argument was `""` and the first argument
  was a complex Unicode character, such as `String::split "👨‍❤️‍💋‍👨👩‍👩‍👧‍👦🏳️‍⚧️‍️🇵🇷" ""`. This
  is now split correctly.

- `String.trim`, `String::trimEnd` and `String::trimStart` worked incorrectly in
  some Unicode situations, they now work correctly.

## Breaking changes

These breaking changes were documented and announced many months in advance of
switching over to the new version of Darklang. We also very careful deployed the
new code, watching for suspicious changes in any Dark programs that were
running. In the rare case where something went awry, we contacted the users and
worked with them to ensure a seamless transition.

### String casing

- `String::toLowercase_v0` and `String::toUppercase_v0` worked correctly in the
  old version of Dark, for all unicode. In the new version, the library we are
  using does not correctly handle some case changes, instead keeping the
  original character. This happens when the replacement is a different length
  than the character being replaced (for example, `"և"` should be `"ԵՒ"` when
  converted to upper case, which the old version did correctly and the new
  version does not). We plan to fix this at a later point.

### String ordering

- Functions whose output relies on the internal ordering of a `Dict` may have
  different outputs, specifically, the output Lists may be in a different order.
  Examples include `Dict::keys`, `Dict::values`, and `Dict::toList` which return
  `List`s of values which are ordered based on the internal ordering in the
  original `Dict`.

- When calling `List::uniqueBy`, and there is a duplicate, the new version of
  Dark may pick a different value for the duplicate. For example:

```dark
List.uniqueBy_v0 [1;2;3;4] (fun x -> Int.divide_v0 x 2) = [ 1, 3, 4 ] // old Dark
List.uniqueBy_v0 [1;2;3;4] (fun x -> Int.divide_v0 x 2) = [ 1, 2, 4 ] // new Dark
```

### HTTP Clients

- `HttpClient::*` functions no longer support making requests with arbitrary
  `Content-Type`s. They must now be
  [valid](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type),
  for example `"application/json"` or `"application/json; charset=utf-8"`.

### Generating JSON

We have changed how JSON is generated in many cases. All the JSON generated by
Dark is now standards compliant, and uses a different formatting style.

In the old version of Dark, we would generate invalid JSON for the Float values
`NaN`, `Infinity` and `-Infinity`. The old version of Dark generates them as
bare identifiers, while the new version puts them in a string (e.g. `NaN` vs
`"NaN"`).

This may occur in any of the places in which we generate JSON, which are:

- when responding to a HTTP request in the HTTP framework
- when making a request with `HttpClient` (any version)
- when calling any of:
  - `Dict::toJson_v0`
  - `Object::toJson_v1` (_deprecated_)
  - `Object::toJson_v0` (_deprecated_)
  - `Twilio::sendText_v1`
  - `Twilio::sendText_v0` (_deprecated_)

Note that the following `JWT` functions do not use this new behavior, and should
have the exact same behavior as before, including:

- `JWT::signAndEncode_v0` (_deprecated_)
- `JWT::signAndEncode_v1`
- `JWT::signAndEncodeWithHeaders_v0` (_deprecated_)
- `JWT::signAndEncodeWithHeaders_v1`

### Parsing JSON

When parsing JSON, we no longer accept the following invalid JSON:

- bare field names, such as in `{ id : 5 }`. You need to quote field names:
  `{ "id": 5 }`
- newlines and invalid bytes in JSON strings
- the bare identifiers `NaN`, `Infinity` and `-Infinity` are no longer parsed
  into valid floats (note that the old version of Dark might have generated JSON
  with these values in it)

Dark now also allows parsing 64-bit integers (as opposed to 63-bit integers
before).

Dark parses JSON:

- when receiving a HTTP request in the HTTP framework
- when receiving a response to a request made with `HttpClient` (any version)
- when calling any of:

  - `JSON::parse_v1`
  - `JSON::parse_v0` (_deprecated_)
  - `JSON::read_v0` (_deprecated_)
  - `JSON::read_v0` (_deprecated_)

Note that `JWT::verifyAndExtract_v0` and `JWT::verifyAndExtract_v1` are not
affected by this change, as they have been kept deliberately compatible with the
old versions.

### HTTP stack

Dark has switched to using Kestrel, a high-performance HTTP server from .NET,
for its HTTP server. There are some differences between the new Kestrel-based
server and the previous OCaml `cohttp`-based server:

Large differences:

- Dark programs can no longer set the HTTP `Content-Length` header and it will
  be set automatically. A `Content-Length` header will be ignored if provided
  via `Http::response` or similar functions.

- Dark is now less lenient to receiving incorrect `Content-Length` headers. If
  the data sent does not match the expected `Content-Length`, the HTTP server
  will return a 400 Bad Request error. Omitting the `Content-Length` header is
  still OK.

- JSON returned from HTTP requests is now formatted differently, as discussed
  above.

Minor differences:

- When making HTTP requests to Dark:
  - Clients must send at least 256 bytes every 5 seconds or be timed-out
  - All headers must be sent in first 10 seconds
  - There must be fewer than 100 headers and they must fit in 32KB
  - The maximum size of HTTP requests to Dark is 10MB
- HTTP responses sent by Dark
  - Headers will be returned in a different order
  - Headers are not always lowercase anymore
  - The `Date` header is now always present
  - The `Server` header is now `darklang` and always present

## Testing changes

We have gone from about 250 backend tests to over 5,000. We now have custom test
frameworks for:

- [language and standard library testing](https://github.com/darklang/dark/tree/main/backend/testfiles/execution)

- [HTTP server testing](https://github.com/darklang/dark/tree/main/backend/testfiles/httphandler)

- [Testing HTTP clients](https://github.com/darklang/dark/tree/main/backend/testfiles/httpclient)

- [Fuzz testing](https://github.com/darklang/stable-dark/tree/main/backend/tests/FuzzTests)

- [Integration tests](https://github.com/darklang/stable-dark/tree/main/integration-tests)
  were ported to [Playwright](https://playwright.dev/), from TestCafe. They now
  run much faster and are somewhat easier to write.

## Operational changes

Behind the scenes, Dark has greatly improved its operations.

- Switched to massively more powerful servers (requests now get 2 CPUs of a
  [Google Cloud T2D](https://cloud.google.com/blog/products/compute/compute-engine-tau-t2d-vms-now-available-for-scale-out-workloads),
  vs 0.1 CPUs of a n1d -- T2Ds are about 2.3x more powerful than N1Ds)

- Separated the servers used by the Darklang editor from the ones running
  production applications.

- Massively increased use of [observability](https://honeycomb.io) and error
  tracking to catch errors and customer issues

- Moved queues from running in the database (often taking over 50% of the CPU,
  to relying on our cloud vendor (Google PubSub). Also greatly increased
  reliability of the queues.

- Nodes are now autoscaled, leading to significant cost savings.

- Updated to latest version of Kubernetes, `cert-manager` (which powers our
  [custom domains](https://docs.darklang.com/how-to/custom-domains) feature),
  nginx, and other tools that we use.

- Added internal [feature flagging](https://launchdarkly.com) to give us more
  control over how our infrastructure runs in production

- Significantly increased use of Kubernetes' security features, in particular
  internal firewalls.

- Standardized our production deployment process using a tool we wrote called
  [shipit](https://github.com/darklang/dark/blob/8082df91676de2f26a0661bf20827a60976bb3c0/scripts/deployment/shipit)

- Removed nginx from our builtwithdark.com backends

- Move migrations out from startup code

- All certs except darksa.com and darkstaticassets.com are now managed
  automatically

## Documentation changes

- moved docs to docs.darklang.com
- [refactored docs](https://github.com/darklang/docs/pull/220) to use the Divio
  documentation system, categorizing all docs into Tutorials, Reference,
  How-tos, Walk-throughs and Discussion.
- fixed all links
- redo the
  [Error Rail discussion](https://docs.darklang.com/discussion/error-handling)
- add a discussion of
  [how the Queues work](https://docs.darklang.com/discussion/queues)
- improved and expanded
  [keyboard shortcuts docs](https://docs.darklang.com/reference/keyboard-mapping)

## Contributing changes

- Added
  [coding guidelines](https://github.com/darklang/dark/blob/main/CODING-GUIDE.md)

- Added significant documentation, especially READMEs and design decisions,
  throughout the [darklang repo](https://github.com/darklang/dark)

- Moved 99% of project collaboration to our
  [public GitHub](https://github.com/darklang/dark) and
  [public community chat](https://darklang.com/discord-invite)

- ported our
  [contributor guides](https://docs.darklang.com/contributing/rescript-and-fsharp-for-dark-developers)
  to F#

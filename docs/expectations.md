# Expectations

## Code of conduct / Terms of service

Dark does not yet have defined terms of service. As such, **we make no promises at
all** about any aspect of our service, including keeping the service or your programs
running.

We may disable your account **at any time** with no notice **for any reason**.  If we
disable your account, we *may* try to keep it working until you can migrate off, or
until the issue can be resolved on your end. We may not. If you're an asshole about
it, act in bad faith in your dealings with us or the community, have violated the
[Code of Conduct](https://darklang.com/code-of-conduct), or if we're especially busy,
we are much less likely to be able to put effort into this.


## Program behaviour

We aim to keep Dark's behaviour consistent and backwards compatible, in order to prevent your programs from changing without your knowlege. Sometimes
cannot achieve this due to the underlying technology (eg HTTP servers and proxies,
JSON parsers/serializers, etc) that we are built-on top of.


### Serialized Dark values

Dark serialized values appear in HTTP responses, in functions like `toString` and `Dict::toJSON`, and are sent to servers using `HttpClient::` functions.

- Dark may change the formatting of values as they are serialized to users.
  Typically, we will only do this to correct incorrect behaviour.

- Dark tries to generate standard JSON. We don't always, and where we generate
  non-standard JSON, we may switch to generating more standard JSON.

- We may switch the format of JSON (indentation, spacing, etc), at any point to make
  it prettier.

- Dark serializes integers to JSON as integers, even when they are larger than
  standard JSON values.

- Dark does not promise to parse non-standard JSON (it may do so in some cases,
  please do not rely on this)

### Language/framework behaviour

Error messages in Dark may change at any time. We recommend that you do not use
Dark error messages as user-facing values, or if you do, set expectations that they
may change.

### Private APIs

Dark's APIs (such as those used in the editor) are private and may change at any
time. Feel free to use them, but do not rely on them in any way. If you wish to build
on them, please contact us and we may be able to find ways to help.

### Service Level

We make a best-effort attempt to keep the service up and running at all times. We
recommend Dark not be used for essential services needing 99% or more uptime, though
we typically achieve that.

We recommend that an individual canvas makes no more than 10 requests per second.

Not all parts of Dark have timeouts, but timeouts may be added without notice.

We may disable part or all of a Dark canvas which is causing issues for us (eg operational, legal, etc).

Dark has short downtime approximately four times a year when our hosted DB provider
(Google Cloud SQL) performs maintenance. This is scheduled for Tuesdays around 8am
PST, and often lasts as little as 30 seconds. We usually notify the #status channel
in our Slack in advance, and as it happens.


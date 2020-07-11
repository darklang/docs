---
id: when-dark
title: When should you use Dark?
sidebar_label: When to use Dark
---

Dark is good for making backends that need to speak HTTP, store data, do work in
the background, and talk to 3rd party APIs. However, Dark is still young and
isn't applicable for all tasks just yet.

## Webapps only

Dark is really good for building web applications, APIs, and things that speak
HTTP. Dark is not intended to be usable for embedded systems, to run existing
applications in existing languages, or for code that needs to be extremely high
performance.

Similarly, Dark does not have support for many use cases such as bitcoin/crypto,
AI/big data, image or video manipulation. If you need a specific library (such
as TensorFlow or ImageMagick), you can set up your own service (or use an
existing vendor) that supports that library, and then call it from Dark over
HTTP, but we do not support these libraries natively in Dark.

## Know what you're building

We've found that people who come to "try out" Dark usually don't have a good
experience. Dark—like many languages, editors and frameworks—can be quite
frustrating at times, and people who try to do things that Dark doesn't do well
usually give up. People who succeed typically have a particular web app that
they're to build.

People who give up typically try to solve Project Euler problems or just poke
around - if you do that, you'll probably get bored and move on pretty quickly.

## Limited scale

Dark currently does a good job for limited scale applications. We would not feel
comfortable with applications with intense spiky loads (such as "daily deals"
sites), with a lot of fan-out (social networks), with high bandwidth
requirements (streaming video). We currently feel comfortable supporting sites
with consistently 10 req/s or fewer (approximately 20M requests per month per
site).

## Small Teams

Dark has collaboration, but it doesn't scale particularly well yet. People have
usually been successful with 2-3 person teams, but not much more than that. We
don't yet support "Pull request" style collaboration, nor do we currently have
checkpoints in our version control, making it currently unsuitable for the kind
of collaboration that is needed for larger teams. We intend to add support for
these over time.

## Limited package manager

We recently released our package manager, but currently only Dark employees can
add packages. Right now, you can use 3rd party APIs directly using the
HttpClient module. We are working to allow user-contributed packages, which
should significantly increase the number of 3rd party APIs that we directly
support (such as Stripe, Twitter, Twilio, GitHub, etc), and expect to support
them in Q3 2020.

All of our packages are currently built on JSON/HTTP, and so we do not yet
support Thrift, GRPC, or GraphQL. We expect to support these in the future.

## Incomplete language

Dark is a large project, and part of where we've cut scope is on the language
definition. A lot of the Dark language is incomplete, but we believe there is
enough there to build most web applications. Some examples: Dark is strongly
typed, but it doesn't have a full type-checker; we don't support tuples or
character literals; you can't type a negative number is our editor (though you
can use Int::negate or 0 - number as a substitute). As we grow, we'll grow the
language with it, and we believe we have a path for Dark to be a powerful,
expressive language.

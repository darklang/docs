---
id: faqs
title: FAQs
sidebar_label: FAQs
---

Some common questions about Darklang. Don't see what you're looking for?
[Contact us!](./support)

## What does it mean that Darklang is in public beta?

Darklang is not yet in a position where we feel confident putting a "1.0"
version on it. Our primary focus so far has been on creating the concept of
Darklang and proving that you can use it to build useful applications. There
remains some work before we feel that Darklang is ready for General
Availability, including features around scalability, privacy, compliance, and
accessibility.

## Is Darklang Production ready? Who should use Darklang today?

Darklang is in public beta, so we're not confident enough to call it production
ready. We have a few hundred people using it, some for their entire businesses,
so if you can tolerate some risk, Darklang should be sufficiently production
ready for you. Good use cases are side projects, new startups, or if you have
limited time or resources. Otherwise, we suggest waiting.

## How much will Darklang cost?

We're still determining specifics, but Darklang pricing will be based on how
much infrastructure you use, possibly combined with a premium accounts similar
to how GitHub charges. We will be charging for traffic, compute, and memory
usage, similar to other infrastructure. Darklang will be free to start, and will
gradually scale up with usage. We expect that our free tier will fully cover
small projects.

## Will I be able to run Darklang myself?

One of the ways that we remove accidental complexity is that we run Darklang for
you. We run the infrastructure, maintain, monitor and optimize it, and we carry
the pager for it. We have not designed Darklang to be run by others, and so you
will not be able to run it yourself.

## I'm worried about vendor lock-in - what happens if Darklang goes out of business?

We're in this for the long haul, but if the worst should happen, we will
open-source Darklang, and will keep it running as long as possible so you can
move off Darklang.

We're committed to codifying the specifics in a legal framework so that you can
confidently use Darklang, regardless of what the future holds.

## I'm worried about vendor lock-in - what happens if Darklang stays in business but I still need to move off?

We know that developers and companies will need to move off Darklang for various
reasons, and plan to support this. We have a couple of strategies planned, based
on your needs.

We currently support exporting your data using regular Darklang tooling. We
intend to create an exporter that will generate a readable Go or NodeJS
application that matches the structure and intention of your Darklang program,
that you can host yourself. However, this will likely be long in the future,
though we hope to support the community building this.

## Who owns the code that I write in Darklang, and the data that I and my users save in Darklang?

We do not currently have Terms of Service, and as a result, we do not currently
claim any rights to your code or data.

We will work on this shortly and intend to make clear that we do not claim any
rights to your code and data beyond what is needed to host your application. We
have not spoken to our lawyers, but we expect that regular copyright laws apply.

## I want to write libraries for Darklang - how can I take part in the Darklang community/ecosystem?

We'd love you to write Darklang packages and take part in the community.
Darklang will have a package manager, where you'll be able to share code,
libraries, handlers and datastores. We also plan to make our editor extensible,
and allow you to create and share refactorings, visualizations and other tools.

## How does version control work in Darklang?

Darklang removes the complexity of separate version control systems like git.
Changes to your code are structured using feature flags, which conceptually
unify version control, deployment, and enabling for users.

We also support unlimited undo and redo on all code, though we do not currently
support seeing a list of historical versions.

## Will Darklang support testing?

Darklang will have integrated unit testing for functions and handlers. We plan
to generate tests for you based on types, and to trivially allow you to turn
past requests into unit tests.

It should also be possible to run integration tests that interact well with
Darklang - we plan to build features that support this use case.

## Deployless seems dangerous! Won't I constantly break my application?

Darklang is specifically designed to allow instant and safe deployment. When you
write code in Darklang, you can immediately see your changes, but that doesn't
mean the changes are live for all users. With Darklang's feature flags, you have
precise control over how and when a specific feature or set of features becomes
live, and for which part of your user base. You can test your changes as
rigorously as makes sense for your usecase with the confidence that your
development environment matches the production environment

Darklang also supports code review and integration tests today. We plan to
support unit testing, and as Darklang grows, we will develop additional
strategies and features to ensure that instant deployment is safe. To learn more
about Darklang's approach, read our deployless blog post and watch our launch
video.

## Is it possible to write Darklang code without being connected to the internet?

Darklang is designed for working in production, and the majority of our features
and editing experience is tailored to that.

However, we do plan to support using Darklang on a plane or train, including
handling synchronizations conflicts when you get back online. It's not going to
be a great experience, since Darklang is really designed for working in
production, but it should work fine.

## I’m already invested in my editor, language, etc… Can I keep using them with Darklang?

No, and that's really the point of Darklang. We believe that the important
features in Darklang are enabled because we have a holistic environment and we
don't need to integrate with other languages, editors, and infrastructure. We
discuss this in our "Darklang's philosophy" launch video.

## I have 3rd party and/or legacy systems that I need to use with my backend. Can I still use Darklang?

Yes. Darklang speaks HTTP, and is designed to speak with 3rd-party services,
vendors, and systems over HTTP. Today we support creating REST/JSON APIs that
your other systems can use to speak with Darklang, as well as making HTTP calls
to other services from Darklang.

In the future, we plan to support GraphQL, gRPC, Thrift, TCP, UDP, and other
protocols for working with your other systems. We also plan to support wrapping
existing APIs and services in packages in our upcoming package manager.

## Are backends written in Darklang compliant with GDPR/CCPA?

Darklang is not currently suitable for companies which must be compliant with
various data privacy laws, including HIPAA, SOC2, GDPR and CCPA. We have
designed Darklang to support this sort of extensive end-user privacy (including
access controls, audit logs, and special provisions for secrets and PII), but
have not yet implemented these features in Darklang.

## Does Darklang support X?

We are often asked whether Darklang supports certain features in the language,
editor and infrastructure. The way we think about this is that Darklang is
designed as a different way of writing software (namely, without infrastructure
or deployment complexity). We believe that we have built a new foundation, and
allowed something that wasn't possible before. We also believe that we can build
almost anything on that foundation, but in most cases, we have not yet done so.

That's a long way of saying that Darklang probably doesn't yet support the
feature you're asking about, but we believe we should be able to support it in
the future. Generally, if there's a good reason for a thing, and an obvious way
to build it, and it doesn't go against our core goals, we hope and plan to
support it in the future.

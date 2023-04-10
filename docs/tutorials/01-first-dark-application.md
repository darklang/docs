---
title: "Tutorial: Your first Darklang application"
sidebar_label: "Your first Darklang application"
id: first-dark-application
---

We're going to take you through a tutorial to build an entire application that
uses Darklang's basic functionality. This should take between 10m and 45m,
depending on how thorough you are. If you're having problems, come talk to us in
the [Darklang Community Discord](https://darklang.com/discord-invite).

The application will accept requests and aggregate those requests into a report
daily. It will optionally store the daily report in Airtable. You will create:

- a HTTP handler to make requests to
- a REPL to make requests to the handler
- a Datastore storing those requests
- a Cron aggregating those requests daily into a report
- another Datastore storing the reports
- (optional) a `HttpClient` call to Airtable

You can see a completed version of this tutorial at
_darklang.com/a/USERNAME-gettingstarted_. If you'd like to start from scratch,
navigate to a fresh canvas (_darklang.com/a/USERNAME-gettingstarted2_, for
example.)

A completed version of this tutorial, is also available at
[https://darklang.com/a/sample-gettingstarted](https://darklang.com/a/sample-gettingstarted).
Note that you should **not** copy/paste this &ndash; we want to teach you to use
the Darklang editor.

## Open the Editor

To start, open the Darklang editor by going to _darklang.com/a/USERNAME_. If you
haven't signed up yet, you'll need to
[sign up for an account](https://darklang.com/signup) (it's free to signup).

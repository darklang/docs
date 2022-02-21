---
title: "Tutorial: Complete your first Darklang application"
sidebar_label: Complete your first application
id: complete-first-application
---

To try out the end-to-end application:

- Change your REPL to say "test3" instead of "test1" and then re-run the request
  by hitting the play button.

  ![gettingstarted/Screen_Shot_2020-02-11_at_11.04.01_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_11.04.01_AM.png)

- A new trace dot will appear on the HTTP Post `/test` handler. It shows "test6"
  in the body of the request.

  ![gettingstarted/Screen_Shot_2020-02-11_at_11.04.07_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_11.04.07_AM.png)

- The new request will be in the Datastore, and if you open your reports
  endpoint tomorrow, you'll see a log of all the new requests, as well as
  updates to your Airtable base.

Congratulations! You've built an entire Darklang application: an API that stores
requests into a datastore, creates a daily report of those requests, and sends
the report to Airtable.

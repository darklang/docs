---
id: finishing-touches
title: Finishing touches
---

Try it out:

- Change your REPL to say "test3" instead of "test1" and then re-run the request
  by hitting the play button.

  ![gettingstarted/Screen_Shot_2020-02-11_at_11.04.01_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_11.04.01_AM.png)

- A new trace dot will appear on the HTTP Post `/test` handler. It shows "test6"
  in the body of the request.

  ![gettingstarted/Screen_Shot_2020-02-11_at_11.04.07_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_11.04.07_AM.png)

- The new request will be in the Datastore, and if you open your reports
  endpoint tomorrow, you'll see a log of all the new requests, as well as
  updates to your Airtable base.

Congratulations! You now have your first Dark application: an API that stores
requests into a datastore, creates a daily report of those requests, and sends
the report to Airtable.

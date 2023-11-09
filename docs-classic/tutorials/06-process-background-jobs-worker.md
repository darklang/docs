---
title: "Tutorial: Process background jobs in a Worker"
sidebar_label: Process background jobs in a Worker
id: process-background-jobs-worker
---

Workers process jobs in the background, ideal for daily reports. They're also
commonly used for sending notifications and other asynchronous tasks that we
don't want to handle in HTTP requests.

We're going to create a report, and store the aggregate data in the
`DailyReport` datastore.

1. From the 404 section of the sidebar, hit the plus (+) button to create the
   `StoreReport` Worker. The Worker will already be named, and hovering over the
   white dot will show you the event triggered by your cron.

![gettingstarted/newworker.png](/img/gettingstarted/newworker.png)

2. For the report, we're going to store our data by human readable dates (like
   `02-27-2020`). First, we'll get the current date, and then get the pieces and
   re-aggregate them.

![gettingstarted/humandate.png](/img/gettingstarted/humandate.png)

3. The `event` we received is not the exact shape we want. Let's process it
   using `List::map` to keep just the `data` field.

![gettingstarted/dataonly.png](/img/gettingstarted/dataonly.png)

4. Make a second datastore with three fields: the nicely-formatted date, the
   list of requests, and the count of requests for that day.

![gettingstarted/seconddatastore.png](/img/gettingstarted/seconddatastore.png)

5. To get the count, use `List::length`. Then we store it in the DB, using
   `humanDate` as the key.

![gettingstarted/dbsetworker.png](/img/gettingstarted/dbsetworker.png)

6. Now, our first datastore stores each incoming request, and every 24 hours our
   Cron runs, sending the right reports to our worker, which stores a report in
   our second datastore.

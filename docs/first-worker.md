---
id: first-worker
title: Your first Worker
---

1. From the 404 section of the sidebar, hit the + button to create the `StoreReport` Worker. The Worker will already be named, and hovering over the white dot will show you the event triggered by your cron.

![assets/gettingstarted/newworker.png](assets/gettingstarted/newworker.png)

2. For the report, we're going to store our data by human readable dates (like 02-27-2020). First, we'll get the current date, and then get the pieces and reaggregate them.

![assets/gettingstarted/humandate.png](assets/gettingstarted/humandate.png)

3. Now, we'll want only the data associated with the request, not the times. We can use a `List::map` to operate on the keyword event.

![assets/gettingstarted/dataonly.png](assets/gettingstarted/dataonly.png)

4. To store these reports, we could use an external API but for the tutorial we'll make a second datastore that has the human date, the list of requests, and the count of requests for that day.

![assets/gettingstarted/seconddatastore.png](assets/gettingstarted/seconddatastore.png)

5. Then we can use `List::count` to see how many requests occurred in that twenty four hour period, add our report, using `humanDate` as the key.

![assets/gettingstarted/dbsetworker.png](assets/gettingstarted/dbsetworker.png)

6. Now, our first datastore will store each incoming request, and every 24 hours our CRON will run and our worker will store a report in our second datastore.
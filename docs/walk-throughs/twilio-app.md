---
title: "Walk-through: Send and receive texts via Twilio"
sidebar_label: "Twilio: send and receive texts"
---

Darklang allows you to build backends (API endpoints, workers, cron, and data
storage) by writing only your business logic, using production traces.

You can access you canvas at darklang.com/a/USERNAME (or USERNAME-CANVASNAME).
For this project we recommend darklang.com/a/USERNAME-twilioreminder.

We recommend building a hello world API endpoint to get a feel for Darklang, as
follows:

![twilio/image2.gif](/img/tutorials/twilio/image2.gif)

All the major handlers work the same way, but the key for many requests is
working directly with incoming data.

## Daily Text Reminder App

We’re building this app:
[https://sample-textreminder.builtwithdark.com](https://sample-textreminder.builtwithdark.com/)
It’s an app that will send a text message once per day at a given time to an end
user. In this case, we’ll ask the user “did you drink enough water today?” and
track their response.

To try out the app and see your traces in the sample canvas text “start” to
+12482653257.

### Twilio Credentials

To build your own, you’ll need to set up a Twilio account. Your Twilio SID &
Token are on the Dashboard.

![twilio/mage16.png](/img/tutorials/twilio/image16.png)

You’ll also need to add a phone number from the “more” menu on the left-hand
side, then to the phone number section.

![twilio/image15.png](/img/tutorials/twilio/image15.png)

Once you’ve added a phone number, you can configure a webhook:

![twilio/image17.png](/img/tutorials/twilio/image17.png)

### Sending a Message

Darklang has a built in `Twilio::sendText` function. We can call it in a REPL
with our own number to verify our webhook.

![twilio/mage4.png](/img/tutorials/twilio/image4.png)

[https://darklang.com/a/sample-textreminder#handler=1108947374](https://darklang.com/a/sample-textreminder#handler=1108947374)

### Receiving Responses

After we receive a response, we’ll see a 404 in the side bar section for our
webhook, which we can create by hitting the “+” button.

![twilio/mage3.png](/img/tutorials/twilio/image3.png)

Once the handler is created, we’re able to see the full incoming trace.

![twilio/image19.png](/img/tutorials/twilio/image19.png)

[https://darklang.com/a/sample-textreminder#handler=1004312353](https://darklang.com/a/sample-textreminder#handler=1004312353)

### Processing & Storing Responses

In Darklang, you can work directly with incoming traces. More on this in
[Trace Driven Development](/discussion/trace-driven-development.md). For this
handler, we can parse out the things we care about: a user deciding to
start/stop using our service, or telling us if they drank enough water or not.

![twilio/image7.png](/img/tutorials/twilio/image7.png)

[https://darklang.com/a/sample-textreminder#handler=1004312353](https://darklang.com/a/sample-textreminder#handler=1004312353)

At each expression, we can see what the expression evaluates to for a given
trace. Here, we see the From number. In this case we also do some cleaning on
the response in case the user had a capital letter or an extraneous space.

For processing the various responses, we’ll use a match statement. More on
[Match](/discussion/functional-aspects.md#match) is available, but the tutorial
example has enough context to understand how it works for this case.

### Sign up & Quit

Now, let’s do the “start” case. This allows us to give the user our Twilio
number, and have them text “start” to begin receiving a daily reminder. We’ll
need a data store to keep track of our users, which can be created from the
omnibox (`Cmd/Ctrl-k`) or the side bar.

![twilio/image1.png](/img/tutorials/twilio/image1.png)

[https://darklang.com/a/sample-textreminder#db=973891964](https://darklang.com/a/sample-textreminder#db=973891964)

Then, we can write the logic to add users to the datastore when they text
“start.” In this case we use the user’s phone number as the unique key.

![twilio/image9.png](/img/tutorials/twilio/image9.png)

[https://darklang.com/a/sample-textreminder#handler=1004312353](https://darklang.com/a/sample-textreminder#handler=1004312353)

The stop case is very similar, but removes the user from the datastore.

![twilio/image13.png](/img/tutorials/twilio/image13.png)

[https://darklang.com/a/sample-textreminder#handler=1004312353](https://darklang.com/a/sample-textreminder#handler=1004312353)

To test, you can always send a new reply to the text message (or just message
your number) and walk through the trace to see the live values at each step.

![twilio/image11.png](/img/tutorials/twilio/image11.png)

[https://darklang.com/a/sample-textreminder#handler=1004312353](https://darklang.com/a/sample-textreminder#handler=1004312353)

### Water Tracking

Now we’ll want the cases for when the user responds to the daily question of
“did you drink enough water today?”

We’ll want another data store so we can track the daily response by user (side
bar or `Cmd/Ctrl-k`).

![twilio/image12.png](/img/tutorials/twilio/image12.png)

[https://darklang.com/a/sample-textreminder#db=1164294845](https://darklang.com/a/sample-textreminder#db=1164294845)

In this case since we do not want to use the phone number as the unique key, we
generate a unique key when storing using the built in `DB::generateKey`
function:

![twilio/image18.png](/img/tutorials/twilio/image18.png)

[https://darklang.com/a/sample-textreminder#handler=1004312353](https://darklang.com/a/sample-textreminder#handler=1004312353)

### Catch-all Case

Finally, we need a case for when we don’t match on one of our earlier responses.
We’ll want to send a text back to tell the user about the error. To prevent this
from blocking other actions, we’ll emit to a background worker.

Here, we emit the user’s number (user) to a background worker named
Misunderstood (and see the event as a trace). Once you’ve hit “play” on the emit
expression, you should have a 404 for the worker in the side bar that you can
hit the + to add. If it does not appear in the sidebar, wait \~30s or refresh
the browser.

![twilio/image14.png](/img/tutorials/twilio/image14.png)

[https://darklang.com/a/sample-textreminder#handler=331438030](https://darklang.com/a/sample-textreminder#handler=331438030)

Then we can write the code similar to our earlier REPL to send a message asking
for a more clear response:

![twilio/image8.png](/img/tutorials/twilio/image8.png)

[https://darklang.com/a/sample-textreminder#handler=331438030](https://darklang.com/a/sample-textreminder#handler=331438030)

### Sending Reminder Messages Once A Day

To send each user a reminder once per day, we’ll want to have a cron set to run
daily. In this case we’ll get all the users, then emit to a background worker to
send the messages.

![twilio/image6.png](/img/tutorials/twilio/image6.png)

[https://darklang.com/a/sample-textreminder#handler=1621731316](https://darklang.com/a/sample-textreminder#handler=1621731316)

Much like before, this will add the worker to the 404 section where you can add
it, with the traces.

![twilio/image5.png](/img/tutorials/twilio/image5.png)

[https://darklang.com/a/sample-textreminder#handler=337743491](https://darklang.com/a/sample-textreminder#handler=337743491)

The code is identical to the code in our REPL:

![twilio/image10.png](/img/tutorials/twilio/image10.png)

[https://darklang.com/a/sample-textreminder#handler=337743491](https://darklang.com/a/sample-textreminder#handler=337743491)

This is now a fully functioning application.

You could do similar ones for:

- A reminder to stand up once per hour
- A daily reminder to do a task (fill in a personal CRM, floss)
- A weekly reminder to take out the trash

### Additional Topics (for Fun!)

#### Cron at Time of Day

If you’d like to set the reminder to occur at a specific time of day, you can
set this using a datastore. There’s a sample canvas
[here](https://darklang.com/a/sample-setcrontorunatspecifictime). For this
application, add the “reminder time” in the `Users` table, and add a case to
allow users to specify a time (that you would then convert to a Date object).

#### Seeing/Displaying Responses

[This API handler shows all checkins for a given user.](https://darklang.com/a/sample-textreminder#handler=911581692)

[This API handler shows the percentage of “yes” responses for a given user.](https://darklang.com/a/sample-textreminder#handler=400638438)

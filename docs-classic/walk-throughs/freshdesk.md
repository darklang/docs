---
title: "Walk-through: Fetch and update tickets on Freshdesk"
sidebar_label: "Freshdesk: Fetch and update tickets"
---

This guide will walk you through how you can use Freshdesk’s API to access
ticket information in Darklang. You can find a sample canvas
[here](https://darklang.com/a/sample-freshdesk).

## What You Need

- A Freshdesk account
- Access to the [Freshdesk API documentation](https://developers.freshdesk.com/)
- Access to your Freshdesk API key or username and password.

## Authenticating with Freshdesk

![freshdesk/image2.png](/img/tutorials/freshdesk/image2.png)

Freshdesk uses basic authentication - in this example, we’ve chosen to use our
API key and insert random text for the password, but you can replace those with
your username and password when using `HttpClient::basicAuth`.

## Getting All of Your Tickets

![freshdesk/image4.png](/img/tutorials/freshdesk/image4.png)

Freshdesk makes it pretty easy to return a simple list of all of your tickets.
However, you may find that the information in this list is not quite what you
are looking for - if you want details about a set of tickets, check the Adding
Ticket Information to a Datastore section.

## Filtering Your Tickets

![freshdesk/image5.png](/img/tutorials/freshdesk/image5.png)

Freshdesk also makes it pretty easy to get a filtered list of your tickets -
[check their documentation](https://developers.freshdesk.com/api/#filter_tickets)
for the query options. In this example, we are returning a list of all tickets
with a status of 3, which means Pending.

## Adding Ticket Information to a Datastore in Darklang

In the following example, we are going to add a set of information from all of
our tickets into a Darklang datastore.

![freshdesk/image3.png](/img/tutorials/freshdesk/image3.png)

Create a datastore to keep track of all of your ids. Because our primary use for
this datastore is to append the ids to our request URL, it’s helpful to store
`ticket_id` as a string - you can also cast them to strings later if you’d
prefer.

![freshdesk/image8.png](/img/tutorials/freshdesk/image8.png)

Create a worker to populate that table with all of your ticket ids.

![freshdesk/image6.png](/img/tutorials/freshdesk/image6.png)

Create a datastore that contains all of the fields you want to save from your
tickets--you can see all of your options in
[Freshdesk’s API documentation](https://developers.freshdesk.com/api/#view_a_ticket).

![freshdesk/image9.png](/img/tutorials/freshdesk/image9.png)

Create a function to add the information about your tickets to your new
datastore. Note that, because we want information about the requester, we need
to add the include parameter to our URL. For more information about this URL
parameter, refer to the
[View a Ticket](https://developers.freshdesk.com/api/#view_a_ticket) section of
the Freshdesk API.

![freshdesk/mage1.png](/img/tutorials/freshdesk/image1.png)

Create a worker that performs a `List::map` on your list of ticket ids, and uses
the `addTicketstoDB` function to populate your datastore.

![freshdesk/image7.png](/img/tutorials/freshdesk//image7.png)

Once your run your worker, your datastore will be updated!

## Updating Ticket Information With Darklang

![freshdesk/image10.png](/img/tutorials/freshdesk/image10.png)

Updating ticket information using Darklang can be fairly straightforward - the
above example shows us updating the priority of the ticket with id 1 to 4, which
means Urgent Priority. For a full list of what can and can’t be updated, refer
to the
[Freshdesk API Documentation](https://developers.freshdesk.com/api/#update_ticket).

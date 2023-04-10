# Packages

## Overview

Darklang's alpha package manager allows re-using Darklang functions from other
users or canvases. Today, only Darklang employees can add functions to the
package manager. Packages are named by the creator, package, function, and
version and are accessible via autocomplete. The package manager today is
intended for connections to third party services and APIs.

In the future, packages will be imported vs. being continually accessible, and
community members will be able to contribute directly. If you would like to
request or contribute a package today, please reach out via
[Discord](https://darklang.com/discord-invite).

## Slack

### `getAllConversations`

Takes your Slack token as a `String` and returns a `list` of records containing
both your public and private Slack channel names and ids.

![getAllConversations](/img/packages/slack/getAllConversations.png)

### `getConversations`

Takes your Slack token as a `String` and returns a `list` of records containing
your public Slack channel names and ids.

![getConversations](/img/packages/slack/getConversations.png)

### `getConversationsWithDetails`

Takes your Slack token as a `String` and returns a `list` of records containing
the channel name, id, created at date (in Epoch seconds), creator, count of
members, purpose and current topic. Does not include archived channels.

![getConversationsWithDetails](/img/packages/slack/getConversationsWithDetails.png)

### `getNewConversations`

Takes your Slack token as a `String` and `checkFromSeconds` as an `Int`, and
returns a list of conversations (as records) where the created at date is
greater than the current time minus the `checkFromSeconds` time. Each entry
contains the channel name, id, created at date (in Epoch seconds), creator,
count of members, purpose and current topic.

![getNewConversations](/img/packages/slack/getNewConversations.png)

### `getPrivateConversations`

Takes your Slack token as a `String` and returns a `list` of records containing
your private Slack channel names and ids.

![getPrivateConversations](/img/packages/slack/getPrivateConversations.png)

### `oauth`

Takes your Slack client ID (`String`), client secret (`String`), token datastore
(`Any` - but should be the name of your datastore), and OAuth code (`String`)
and returns a `Result`. Using this function enables you to easily set up Slack
OAuth.

![oauth](/img/packages/slack/oauth.png)

![oauth example](/img/packages/slack/oauthexample.png)

### `postMarkdownMessage`

Takes your Slack token, channel id and text as `String`s and posts the text to
the Slack channel as a markdown message.

![postMarkdownMessage](/img/packages/slack/postMarkdownMessage.png)

### `postMessage`

Takes your Slack token, channel id and text as `String`s and posts the text to
the Slack channel.

![postMessage](/img/packages/slack/postMessage.png)

### `scheduleMessage`

Takes an Epoch time (`Int`), Slack token (`String`), channel id (`String`) and
text (`String`) and schedules a message to be posted at the time specified.

![scheduleMessage](/img/packages/slack/scheduleMessage.png)

## Asana Package

### `createProject`

Takes a name (`String`), notes (`String`), workspace (`String`) and Asana token
(`String`) and creates a new project in the specified workspace.

![createProject](/img/packages/asana/createProject.png)

### `createTask`

Takes a name (`String`), assignee (`String`), project (`String`), notes
(`String`) and Asana token (`String`) and creates a new task in the specified
workspace. The assignee can be a user gid, email or null.

![createTask](/img/packages/asana/createTask.png)

### `createTaskWithDueDate`

Takes a name (`String`), assignee (`String`), due date (`String` - 'YYYY-MM-DD'
format) project (`String`), notes (`String`) and Asana token (`String`) and
creates a new task in the specified workspace. The assignee can be a user gid,
email or null.

![createTaskWithDueDate](/img/packages/asana/createTaskWithDueDate.png)

### `getAllProjects`

Takes an Asana token as a `String` and returns details of all projects that
token has access to.

![getAllProjects](/img/packages/asana/getAllProjects.png)

### `getAllWorkspaces`

Takes an Asana token as a `String` and returns details of all workspaces that
token has access to.

![getAllWorkspaces](/img/packages/asana/getAllWorkspaces.png)

## Mailchimp Package

### `subscribe`

Takes an audience ID (`String`), email (`String`), first name (`String`), last
name (`String`), Mailchimp username (`String`), Mailchimp API key (`String`),
and Mailchimp data center (`String`) and posts to the
[Mailchimp Subscribers API](https://mailchimp.com/developer/guides/manage-subscribers-with-the-mailchimp-api/#Add_a_contact_to_a_list%2Faudience).

![subscribe](/img/packages/mailchimp/subscribe.png)

## Stripe Package

### `createCharge`

Takes a Stripe key (`String`), the amount for the charge (`String`), the
currency (`String`), a customer id (`String`) and a card id (`String`) and
creates a charge on that customer's card.

![createCharge](/img/packages/stripe/createCharge.png)

### `createCheckoutSession`

Takes a `list` of line items (amount, name, quantity, price, and currency), a
customer ID (`Any`), a stripe key (`String`), a `cancelUrl` (`String`) and a
`successUrl` (`String`).

![createCheckout](/img/packages/stripe/createCheckout.png)

### `createCustomer`

Takes a Stripe key (`String`), a description (`String`), an email address
(`String`), a name (`String`) and a phone number (`String`) and creates a
customer in Stripe.

![createCustomer](/img/packages/stripe/createCustomer.png)

### `createFullRefund`

Takes a Stripe key (`String`) and charge id (`String`) and issues a full refund
for that charge.

![createFullRefund](/img/packages/stripe/createFullRefund.png)

### `createPartialRefund`

Takes a Stripe key (`String`), charge id (`String`) and amount (`String`) and
issues a refund of that amount to the charge.

![createPartialRefund](/img/packages/stripe/createPartialRefund.png)

### `getAllCharges`

Takes a Stripe key (`String`) and returns all charges for that account.

![getAllCharges](/img/packages/stripe/getAllCharges.png)

### `getAllCustomers`

Takes a Stripe key (`String`) and returns all customers for that account.

![getAllCustomers](/img/packages/stripe/getAllCustomers.png)

### `getAllTransactions`

Takes a Stripe key (`String`) and returns all transactions for that account.

![getAllTransactions](/img/packages/stripe/getAllTransactions.png)

### `getAvailableBalance`

Takes a Stripe key (`String`) and returns the available balance for that
account.

![getAvailableBalance](/img/packages/stripe/getAvailableBalance.png)

### `getCustomer`

Takes a Stripe key (`String`) and a customer id (`String`) and returns
information about that customer.

![getCustomer](/img/packages/stripe/getCustomer.png)

### `getPendingBalance`

Takes a Stripe key (`String`) and returns the pending balance for that account.

![getPendingBalance](/img/packages/stripe/getPendingBalance.png)

## Trello Package

### `addBoardstoDB`

Takes a `list` of boards and a board Datastore. Adds the name and ID of each of
the boards to the datastore.

![addBoardstoDB](/img/packages/trello/addBoardsToDB.png)

### `addListstoDB`

Takes a `list` of Trello lists and a list Datastore. Adds the name and id of
each of the lists to the datastore.

![addListstoDB](/img/packages/trello/addListsToDB.png)

### `createNewCard`

Takes a `listID` (`String`), `trelloKey` (`String`), `trelloToken` (`String`),
name (`String`) and description (`String`). Adds card with that name and
description to the list specified.

![createNewCard](/img/packages/trello/createNewCard.png)

### `getAllBoardsWithDetails`

Takes a `trelloOrgID` (`String`), `trelloKey` (`String`) and `trelloToken`
(`String`) and returns all boards for that Trello org.

![getAllBoardsWithDetails](/img/packages/trello/getAllBoardsWithDetails.png)

### `getAllListsWithDetails`

Takes a `trelloKey` (`String`), `trelloToken` (`String`) and Trello board id
(`String`) and returns all lists for that Trello board.

![getAllListsWithDetails](/img/packages/trello/getAllListsWithDetails.png)

### `getAllOpenCardsForMemberWithDetails`

Takes a `trelloKey` (`String`), `trelloToken` (`String`) and username (`String`)
and returns all open cards for that Trello user.

![getAllOpenCardsForMembersWithDetails](/img/packages/trello/getAllOpenCardsForMembersWithDetails.png)

### `lookUpBoardID`

Takes a board Datastore (containing names & ids) and a name (`String`) and
returns the board id matching the name.

![lookUpBoardID](/img/packages/trello/lookUpBoardID.png)

### `lookUpListID`

Takes a list Datastore (containing names & ids) and a name (`String`) and
returns the list id matching the name.

![lookUpListID](/img/packages/trello/lookUpListID.png)

## Contributions

If you'd like to share a function to the community, please send us a link to the
function and we will set it up to be shared back! We love contributions for
third party APIs.

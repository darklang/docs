---
id: slack-packages
title: Slack Packages
sidebar_label: Slack Packages
---

We've built in a variety of functions to make it easier to build Dark apps with Slack. Use these functions from autocomplete (dark/slack/Slack::), the same way you would any other function.

![Slack](assets/packages/slackpackage.png)

## Package List

### getAllConversations

Takes your Slack token as a `String` and returns a `list` of records containing both your public and private Slack channel names and ids.

![Slack](assets/packages/getAllConversations.png)

### getConversations

Takes your Slack token as a `String` and returns a `list` of records containing your public Slack channel names and ids.

![Slack](assets/packages/getConversations.png)

### getConversationsWithDetails

Takes your Slack token as a `String` and returns a `list` of records containing the channel name, id, created at date (in Epoch seconds), creator, count of members, purpose and current topic. Does not include archived channels.

![Slack](assets/packages/getConversationsWithDetails.png)

### getNewConversations

Takes your Slack token as a `String` and checkFromSeconds as an `Int`, and returns a list of conversations (as records`) where the created at date is greater than the current time minus the checkFromSeconds time. Each entry contains the channel name, id, created at date (in Epoch seconds), creator, count of members, purpose and current topic.

![Slack](assets/packages/getNewConversations.png)

### getPrivateConversations

Takes your Slack token as a `String` and returns a `list` of records containing your private Slack channel names and ids.

![Slack](assets/packages/getPrivateConversations.png)

### oauth

Takes your Slack clientID (`String`), clientSecret (`String`), token datastore (`Any` - but should be the name of your datastore), and oauth code (`String`) and returns a `Result`. Using this function enables you to easily set up Slack oauth.

![Slack](assets/packages/oauth.png)

![Slack](assets/packages/oauthexample.png)

### postMarkdownMessage

Takes your Slack token, channel id and text as `String`s and posts the text to the Slack channel as a markdown message.

![Slack](assets/packages/postMarkdownMessage.png)

### postMessage

Takes your Slack token, channel id and text as `String`s and posts the text to the Slack channel.

![Slack](assets/packages/postMessage.png)

### scheduleMessage

Takes an Epoch time (`Int`), Slack token (`String`), channel id (`String`) and text (`String`) and schedules a message to be posted at the time specified.

![Slack](assets/packages/scheduleMessage.png)

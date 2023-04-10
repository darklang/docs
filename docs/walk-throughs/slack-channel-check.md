---
title: "Walk-through: Check for New Slack Channels"
sidebar_label: "Slack: check for new channels"
---

It can be hard to keep up with all of the changes in your Slack workspace! This
tutorial will walk you through how to build a simple tool in Darklang that posts
all new, public Slack channels created in your Slack workspace in the past 24
hours.

A full sample canvas for this tutorial is available
[here](https://darklang.com/a/sample-slackchannelcheck).

## Slack Configuration

1. [Create a new app in Slack](https://api.slack.com/apps).
2. Navigate to **Features -> OAuth& Permissions**, scroll down to scopes and add
   the following bot token scopes: `channels:manage`, `channels:read`,
   `chat:write`, and `chat:write.public`. This will allow our app to interact
   with our the channels (also known as conversations) and post messages about
   them.

![slack-apps/tutorials/channelcheck/bottokenscopes.png](/img/slack-apps/tutorials/channelcheck/bottokenscopes.png)

3. Install your app to the workspace (either via **Settings -> Basic
   Information** or **Settings -> Install App**). Since this app is being built
   for your workspace specifically, we will not need to set up full OAuth, like
   we would if we wanted to distribute this more publicly.
4. Copy your bot user access token, which will now be available under **Settings
   -> Install** app and save it as a function in your Darklang canvas. Use this
   function wherever you see `token` in the code examples.
5. If no new channels have been created in your Slack recently, create a new
   public channel so we have some data to work with.
6. You will need to choose a Slack channel to post your messages to. You can
   find your Slack channel's id by navigating to the channel and looking for the
   11 character string that begins with a capital C - it will look something
   like `C1234567891`. Add that to its own Darklang function as well, and use it
   wherever you see `channel` in the code examples.

## Building in Darklang

1. Create a new daily Cron named `checkForNewChannels` by clicking the + in the
   sidebar next to Cron, and call the
   [`getNewConversations` Slack function](/reference/packages#getnewconversations)
   (it's a little confusing, but channels are referred to as conversations in
   the Slack API). The `getNewConversations` function is built into Darklang's
   [package manager](/reference/packages), and it takes your token as well as an
   amount of time to check in Epoch seconds. Here, we're asking it to check in
   the past 24 hours, which is equivalent to 86400 seconds.

![slack-apps/tutorials/channelcheck/checkfornewchannels.png](/img/slack-apps/tutorials/channelcheck/checkfornewchannels.png)

2. Click the play button on the
   [`getNewConversations` function](/reference/packages#getnewconversations) and
   then place your carat in `newChannels`. You will see a list of information
   about any new channels that have been created.

![slack-apps/tutorials/channelcheck/checkfornewchannelslive.png](/img/slack-apps/tutorials/channelcheck/checkfornewchannelslive.png)

3. Create a function called `formatChannelList` with a `channelList` parameter.
   This is where we're going to build the format of the messages Slack will
   print about your new channels, but for now, just return `channelList`. You'll
   notice that an error is shown - this is because `channelList` has not yet
   been set.

![slack-apps/tutorials/channelcheck/firstformatchannel.png](/img/slack-apps/tutorials/channelcheck/firstformatchannel.png)

4. Return to your `checkForNewChannels` Cron, and add a line to format the
   `newChannels` list you previously generated. Press the play button.

![slack-apps/tutorials/channelcheck/checkfornewchannelslist.png](/img/slack-apps/tutorials/channelcheck/checkfornewchannelslist.png)

5. Return to your `formatChannelList` function and place your carat over the top
   dot (trace) on the left. You will see your `channelList` trace - now you can
   work with that data in order to format your list.

![slack-apps/tutorials/channelcheck/formatchannellist.png](/img/slack-apps/tutorials/channelcheck/formatchannellist.png)

6. For our purposes, we're going to do a very simple amount of formatting -
   we're going to add the markdown Slack needs to make channel names links, and
   add information about the channel's purpose. However, lots of information
   about Slack channels is available. Type `val.` and scroll through the
   autocomplete to see all of your options.

![slack-apps/tutorials/channelcheck/formatchanellistlong.png](/img/slack-apps/tutorials/channelcheck/formatchannellistlong.png)

7. In your `checkForNewChannels` Cron, rerun `formatChannelList` to update the
   value of `formattedList`.

8. Add a check for the length of the list - we're going to print out something
   different if there have been no new channels.

![slack-apps/tutorials/channelcheck/listlength.png](/img/slack-apps/tutorials/channelcheck/listlength.png)

9. The full code is going to look like this - if there are entries in the list,
   we'll post an announcement message and then the list of new channels. You'll
   notice that we also use the
   [`postMarkDownMessage` Slack function](/reference/packages#postmarkdownmessage)
   to simplify the posting of the message.

![slack-apps/tutorials/channelcheck/fullcheckfornewchannels.png](/img/slack-apps/tutorials/channelcheck/fullcheckfornewchannels.png)

10. To make our code a little bit cleaner, we've pulled the logic of posting the
    list of new channels out into a function. This function iterates through the
    list it is given and posts a markdown message to Slack for each entry.

![slack-apps/tutorials/channelcheck/postlist.png](/img/slack-apps/tutorials/channelcheck/postlist.png)

11. Once you've completed all of your code, run the Cron again. A message will
    appear in the channel you selected.

![slack-apps/tutorials/channelcheck/newchannelpost.png](/img/slack-apps/tutorials/channelcheck/newchannelpost.png)

Congratulations - you now have a Slack app that will post every 24 hours with
any new channels created since it last posted.

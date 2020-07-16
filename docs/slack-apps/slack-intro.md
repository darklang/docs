---
id: slack-intro
title: Your First Slack App
sidebar_label: Your First Slack App
---

Building Slack apps in Dark is a quick and easy process. This page will cover
the basics, but more specific examples are covered in the tutorials.

## Slack Configuration

Start by creating an app in Slack. You can do so quickly by clicking
[here](https://api.slack.com/apps?new_app=1). Note that you will need to have
the ability to add apps to at least one Slack group in order to create an app.

Once you've created your app, you will see a page with quite a few options:
![appspage.png](/img/slack-apps/appspage.png)

You're going to need to configure at least one of these options before you can
install the app to your workspace. The quickest option is to use a slash
command. When you create the command, you will be asked for a Request URL. This
should be pointed at your Dark canvas and look something like
`https://username-canvas.builtwithdark.com/my-command`.

![slashcommand.png](/img/slack-apps/slashcommand.png)

Once you have your slash command, you will be able to install your app to your
Slack community via the Basic Information page.

![installslack.png](/img/slack-apps/installslack.png)

Once you have your app installed, you will be able to see your slash command in
your Slack app:

![command.png](/img/slack-apps/command.png)

## Building in Dark

Try calling your slash command. You will get an error that looks like this:

![commanderror.png](/img/slack-apps/commanderror.png)

Navigate to the Dark canvas you used in the Request URL and check the 404s
section - you will see an entry with the same name you used above.

![404.png](/img/slack-apps/404.png)

Click to create your handler, and then add a string to the return value:

![hello.png](/img/slack-apps/hello.png)

Return to Slack and try out your Slack command again. You should now see a
response:

![hello.png](/img/slack-apps/hello.png)

Congratulations - you've built your first Slack app!

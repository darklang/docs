---
id: new-trello-card
title: Create a New Trello Card from Slack
sidebar_label: Create a New Trello Card
---

Connecting your Trello account with your Slack account can make for a powerful tool - no more switching tabs and hunting for the right Trello list when you want to capture the excellent idea that just came up. In this tutorial, we'll show you a few ways to enable your team to create new Trello cards directly from Slack.

## Trello Configuration

For this tutorial, you're going to need to grab a few different things from Trello and store each of them as separate functions in Dark:

-Your Trello API Key and Token, [available on this page](https://trello.com/app-key/)
-Your Trello org id, the id for one of your boards, and the id for one of your lists. The best way to get all of these at once is to add `.json` to the end of the URL on one of your boards, and search through the resulting JSON for the `id` that matches with the name of your board, the `id` that matches with the name of the list you'd like to use and `idOrganization`. Don't worry - we'll cover an easier way to handle this later in the tutorial.

## Slack Configuration

1. [Create a new app in Slack](https://api.slack.com/apps).
2. Set a Slash command (the option should appear under **Add features & functionality** on your app's main page.)

![assets/slack-apps/tutorials/new-trello-card/slashcommand.png](assets/slack-apps/tutorials/new-trello-card/slashcommand.png)

3. Add the following scopes to your app.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.43.45_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.43.45_PM.png)

3. Install your app to the workspace (either via **Settings -> Basic Information** or **Settings -> Install App**). Since this app is being built for your workspace specifically, we will not need to set up full OAuth, like we would if we wanted to distribute this more publicly.

4. Copy your bot user access token, which will now be available under **Settings -> Install** app and save it as a function in your Dark canvas. Use this function wherever you see `token` in the code examples.

5. Attempt to use your slash command - you will see an error.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.45.07_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.45.07_PM.png)

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.52.08_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.52.08_PM.png)

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.45.14_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.45.14_PM.png)

6. Navigate to your Dark canvas and check the 404s box - you should see an HTTP POST created. Click the plus sign to add it to your canvas.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.45.29_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.45.29_PM.png)

7. Once it's on your canvas, you can place your carat over the trace on the left (the white dot) to see the incoming data Slack attempted to send.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.48.50_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.48.50_PM.png)

8. In the body of your trace data, you will see a text field in the body. This is what we want to parse to get the name and description of the card we're going to create. In order to parse this information, we're going to use String::split and parse on the special character |.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.53.21_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.53.21_PM.png)

9. Now that we have a list of messageContent, we can use list getAt to set the name and description of the card.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.54.04_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.54.04_PM.png)

10. Once we have all of the information we need, we can use the Dark package manager Trello::createNewCard function to create the new card. For simplicity's sake, we're going to use the defaultListID we set earlier.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.54.46_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.54.46_PM.png)

11. Re-run your HTTP handler, or call the slash command again and then check Trello - your new card will be there!

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.54.58_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_1.54.58_PM.png)

12. Now, you probably don't want to have to worry about setting up a default list or hunting for the list ids in JSON. Create a Lists db.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.05.32_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.05.32_PM.png)

13. Now, we can use built in Dark package manager functions to get a list of all of our Trello lists and add them to our DB.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.07.17_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.07.17_PM.png)

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.07.33_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.07.33_PM.png)

14. Let's try another slash command, this time with more information.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.09.04_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.09.04_PM.png)

15. Now our messageContent will have a third entry in the list.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.09.50_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.09.50_PM.png)

16. Now, using the built in Trello:lookUpListID function, we can grab the name of that list and use it in our createNewCard function.

![New%20Trello%20Card/Screen_Shot_2020-04-08_at_1.34.24_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-08_at_1.34.24_PM.png)

17. Okay, this is all great, but still has some problems. What if someone forgets to add the right special character? Let's make it a little easier, by creating a modal to take their information.

First, let's create a new slash command:

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.59.02_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.59.02_PM.png)

You're also going to want to turn Interactivity on and specify a URL for the interaction to be sent to:

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.03.32_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.03.32_PM.png)

18. Now, just like before, we're going to call the Slash command and grab the 404.

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.59.38_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_2.59.38_PM.png)

19. First, grab your trigger_id from the request.body:

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.01.13_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.01.13_PM.png)

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.01.31_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.01.31_PM.png)

20. Next, create an HttpClient::post request and add your trigger_id and JSON. These are truncated screenshots with a lot of the JSON cut out:

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.01.41_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.01.41_PM.png)

![New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.02.04_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-07_at_3.02.04_PM.png)

21. Now, try your Slash command - a modal should open. Input text and try to send. You will get an error message:

![New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.06.48_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.06.48_PM.png)

22. Now we need to work with our /interaction handler, which should be available in your 404s. We're going to start with parsing the payload Slack sent through:

![New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.09.56_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.09.56_PM.png)

23. Now we can use that payload to grab the information that you submitted in your modal:

![New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.17.50_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.17.50_PM.png)

24. And, just like before, we'll use the Trello::lookUpListID to take the list:

![New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.17.57_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.17.57_PM.png)

25. And now all that's left is creating the new card and sending a 200 response back to Slack:

![New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.18.11_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.18.11_PM.png)

26. Try to create another ticket.

![New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.18.30_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.18.30_PM.png)

27. Once you hit submit, your ticket will appear in Trello!

![New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.18.45_PM.png](New%20Trello%20Card/Screen_Shot_2020-04-08_at_12.18.45_PM.png)

Congratulations, you now have a Slack app that can create Trello cards in multiple ways!
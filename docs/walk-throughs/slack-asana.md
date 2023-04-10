---
title: "Walk-through: Create Asana tasks and projects from Slack"
sidebar_label: "Asana: create tasks and projects from Slack"
---

Connecting your Asana account with your Slack account can make for a powerful
tool - no more switching tabs and hunting for the right Asana project when you
want to capture the excellent idea that just came up. In this tutorial, we'll
show you a few ways to enable your team to create new Asana tasks directly from
Slack.

## Asana Configuration

For this tutorial, you'll want to grab a couple different things from Asana and
store each of them as separate functions in Darklang:

- Your [personal access token](https://app.asana.com/0/developer-console)
- The id of one of your workspaces. The easiest way to access this is via the
  admin panel - it will be the long number in the URL.

## Slack Configuration

1. [Create a new app in Slack.](https://api.slack.com/apps)
2. Set a Slash command (the option should appear under **Add features &
   functionality** on your app's main page). Your Request URL should look
   something like
   `https://yourusername-yourcanvasname.builtwithdark.com/new-project`. This is
   the URL that Slack will call when you use your slash command - don't add
   anything to your Darklang canvas just yet.

![slack-apps/tutorials/asana-tutorial/slashcommand.png](/img/slack-apps/tutorials/asana-tutorial/slashcommand.png)

3. Go to **Features -> OAuth & Permissions** and add the following scopes to
   your app: `chat:write`, `chat:write.public`, `commands.`

![slack-apps/tutorials/asana-tutorial/permissions.png](/img/slack-apps/tutorials/asana-tutorial/permissions.png)

4. Install your app to the workspace (either via **Settings -> Basic
   Information** or **Settings -> Install App**). Since this app is being built
   for your workspace specifically, we will not need to set up full OAuth, like
   we would if we wanted to distribute this more publicly.

5. Copy your bot user access token, which will now be available under **Settings
   -> Install** app and save it as a function in your Darklang canvas. Use this
   function wherever you see `slackToken` in the code examples.

## Building In Darklang

First, we're going to learn how to create new Asana projects using slash
commands.

1. Go to Slack and try to use your new slash command. Make sure to include some
   text after entering your command. You will see an error message appear.

![slack-apps/tutorials/asana-tutorial/newprojecterror.png](/img/slack-apps/tutorials/asana-tutorial/newprojecterror.png)

2. Navigate to your Darklang canvas and check the 404s section in the sidebar -
   you should see an HTTP POST created called `/new-project` (or whatever you
   used when setting up your slash command). Click the plus sign to add it to
   your canvas.

![slack-apps/tutorials/asana-tutorial/newproject404.png](/img/slack-apps/tutorials/asana-tutorial/newproject404.png)

3. Once your handler is on your canvas, you can click on the trace (the white
   dot to the left) to see the incoming data Slack attempted to send.

![slack-apps/tutorials/asana-tutorial/trace.png](/img/slack-apps/tutorials/asana-tutorial/trace.png)

4. You will see a text field in the body of the trace data. Use
   `request.body.text` to set your project name.

![slack-apps/tutorials/asana-tutorial/projectname.png](/img/slack-apps/tutorials/asana-tutorial/projectname.png)

5. Using the
   [`Asana::createProject function`](/reference/packages.md#createproject) and
   the data we grabbed from the trace, we can now create a new project. You will
   need to use the workspace id and personal access token you saved in the
   set-up process.

![slack-apps/tutorials/asana-tutorial/createProject.png](/img/slack-apps/tutorials/asana-tutorial/createProject.png)

6. Try your Slash command again and then check Asana - your new project will be
   there!

![slack-apps/tutorials/asana-tutorial/asanaproject.png](/img/slack-apps/tutorials/asana-tutorial/asanaproject.png)

7. Now, let's try sending over a slash command with different data. Return to
   Slack and use your slash command again, but this time, write a project name,
   `\` sign and a description and send it over (something like
   `\asana-new-project Another New Project/Notes on the project`). Return to
   Darklang and check the traces - you should see a text field formatted like
   this:

![slack-apps/tutorials/asana-tutorial/textexample.png](/img/slack-apps/tutorials/asana-tutorial/textexample.png)

8. Now, we can use the `String::split` function to separate out our two pieces
   of information, and add them separately to the
   [`Asana::createProject function`](/reference/packages.md#createProject)
   function.

![slack-apps/tutorials/asana-tutorial/notes.png](/img/slack-apps/tutorials/asana-tutorial/notes.png)

### Looking Up Project & Workspace IDs

You're not always going to want to pre-define your workspace or projects via
Darklang functions. This section will show you how to take a project name as a
`String` and get the corresponding id. We'll be using projects for this example,
but it works the same way for workspaces.

1. Create a Projects datastore.

![slack-apps/tutorials/asana-tutorial/projectsdatastore.png](/img/slack-apps/tutorials/asana-tutorial/projectsdatastore.png)

2. Create a new REPL. First, use the
   [`Asana::getAllProjects`](/reference/packages.md#getAllProjects) function to
   grab information about all projects you have access to. Then, use a
   `List::map` to add their names and gids to the DB.

![slack-apps/tutorials/asana-tutorial/populatedb.png](/img/slack-apps/tutorials/asana-tutorial/populatedb.png)

3. To see this in action, create a fresh slash command and call it, using the
   task name/project name formatting. To make it easier on yourself, make sure
   to use a project name that already exists.

4. Split out the information as you did before.

![slack-apps/tutorials/asana-tutorial/taskandproject.png](/img/slack-apps/tutorials/asana-tutorial/taskandproject.png)

5. Create a new function called `lookUpProjectID` and then use `DB::queryOne` to
   grab the id based on the `projectName`.

![slack-apps/tutorials/asana-tutorial/lookupprojectid.png](/img/slack-apps/tutorials/asana-tutorial/lookupprojectid.png)

6. Use a match statement to handle both the success and failure (couldn't find
   the project name in the db) case.

![slack-apps/tutorials/asana-tutorial/match.png](/img/slack-apps/tutorials/asana-tutorial/match.png)

7. Use your new function your HTTP POST handler.

![slack-apps/tutorials/asana-tutorial/lookupid.png](/img/slack-apps/tutorials/asana-tutorial/lookupid.png)

8. Call the slash command again and check Asana - a new task should be there.

![slack-apps/tutorials/asana-tutorial/newesttask.png](/img/slack-apps/tutorials/asana-tutorial/newesttask.png)

### Making input easier with modals

Okay, this is all great, but still has some problems. What if someone forgets to
add the right special character? Let's make it a little easier, by creating a
modal to handle their input.

1. Create a new slash command.

![slack-apps/tutorials/asana-tutorial/newmodal.png](/img/slack-apps/tutorials/asana-tutorial/newmodal.png)

2. Turn Interactivity on via **Features -> Interactivity and Shortcuts** and
   specify a URL for the interaction to be sent to:

![slack-apps/tutorials/asana-tutorial/interactivity.png](/img/slack-apps/tutorials/asana-tutorial/interactivity.png)

3. Slack uses `JSON` to generate modals via a framework called Block Kit, even
   providing a
   [handy Block Kit builder](https://api.slack.com/tools/block-kit-builder). At
   this point, it may make sense to pause and create your modal - we'll need the
   `JSON` soon. The modal we're going to use has 3 fields: a single line for the
   task name, a multiline for the task description and a select for a list of
   projects.

4. Call your new slash command and grab the 404, as you did in previous steps.

5. Start by setting your `triggerId` using `request.body.trigger_id`:

![slack-apps/tutorials/asana-tutorial/triggerid.png](/img/slack-apps/tutorials/asana-tutorial/triggerid.png)

6. Format your header - you will need the Slack token you grabbed earlier in the
   set-up process.

![slack-apps/tutorials/asana-tutorial/header.png](/img/slack-apps/tutorials/asana-tutorial/header.png)

7. Create an `HttpClient::post` request and add your `triggerID` and `JSON`.
   These are truncated screenshots with a lot of the JSON cut out:

![slack-apps/tutorials/asana-tutorial/json1.png](/img/slack-apps/tutorials/asana-tutorial/json1.png)

![slack-apps/tutorials/asana-tutorial/json2.png](/img/slack-apps/tutorials/asana-tutorial/json2.png)

8. Try your new Slash command. A modal should appear. Fill in the modal and hit
   submit to get a new error message:

![slack-apps/tutorials/asana-tutorial/asanaerror.png](/img/slack-apps/tutorials/asana-tutorial/asanaerror.png)

8. Check your 404s and add your new handler. This is the handler where the
   behind-the-scenes logic will happen. Start by formatting the payload into
   `JSON`.

![slack-apps/tutorials/asana-tutorial/payload.png](/img/slack-apps/tutorials/asana-tutorial/payload.png)

9. Now grab all of your important values from your modal fields:

![slack-apps/tutorials/asana-tutorial/payloaddata.png](/img/slack-apps/tutorials/asana-tutorial/payloaddata.png)

10. Use the [`Asana::createTask`](/reference/packages.md#createTask) and the
    `lookUpProjectID` functions to create your new task.

![slack-apps/tutorials/asana-tutorial/createtask.png](/img/slack-apps/tutorials/asana-tutorial/createtask.png)

11. Respond with a `200`.

![slack-apps/tutorials/asana-tutorial/200.png](/img/slack-apps/tutorials/asana-tutorial/200.png)

12. Check Asana - your new task should be visible in the project your specified
    project.

![slack-apps/tutorials/asana-tutorial/mytask.png](/img/slack-apps/tutorials/asana-tutorial/mytask.png)

Congratulations, you now have a Slack app that can create Asana projects and
tasks in multiple ways!

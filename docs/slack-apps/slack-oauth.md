---
id: slack-oauth
title: Setting Up OAuth
sidebar_label: Setting Up OAuth
---

In order to install your app across multiple Slack workspaces, you will need to set up OAuth. If you're not familiar with OAuth, the basic explanation is that your app needs to go through a few steps to verify that it is allowed to access a workspace. The three steps are:

1. Asking for scopes
2. Waiting for a user to approve your requested scopes
3. Exchanging a temporary authorization code for an access token

You may be familiar with this workflow without even knowing it - it's likely what occurs anytime you see a screen this like when trying to install something:

![assets/slack-apps/permissions.png](assets/slack-apps/permissions.png)

In order to set up OAuth on your Slack app, you will need to take a few steps:

1. Go to your Slack app's **Manage Distribution** page and add an OAuth redirect URL:

![assets/slack-apps/oauthredirect.png](assets/slack-apps/oauthredirect.png)

This URL should be in the following format: The URL you provide will need to be in the following format: https://USERNAME-CANVASNAME.builtwithdark.com/oauth-redirect

2. Return to the main **Manage Distribution** page, copy the Sharable URL and then navigate to it. Follow the steps, making sure to finish with clicking Allow.

3. Go to your Dark canvas and look in your 404s list to find your oauth-redirect handler, complete with trace. Click the + to add it to your canvas.

4. Create a new `Datastore` called tokenStore, and add two `String` fields: `team_id` and `access_token`.

5. Return to your oauth-redirect handler and call the [`Slack::oauth` function](./slack-packages#oauth). You will need your client ID and client secret, as well as the token store you created in the previous step. The final parameter is pulling the temporary code out of the request using `request.queryParams.code`.

![assets/slack-apps/oauth.png](assets/slack-apps/oauth.png)

6. Hit the play button for the function. If you get an error, repeat step 2. If everything goes as expected, an entry will be added to your datastore, and it will look locked.

![assets/slack-apps/lockedtoken.png](assets/slack-apps/lockedtoken.png)


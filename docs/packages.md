---
id: packages
title: Packages
sidebar_label: Packages
---

## Overview

Dark's alpha package manager allows re-using Dark functions from other users or canvases. Today, only Dark employees can add functions to the package manager. Packages are named by the creator, package, function, and version and are accessible via autocomplete. The package manager today is intended for connections to third party services and APIs.

In the future, packages will be imported vs. being continually accessible, and community members will be able to contribute directly. If you would like to request or contribute a package today, please reach out via Slack.

## Asana Package

### createProject

Takes a name (String), notes (String), workspace (String) and Asana token (string) and creates a new project in the specified workspace.

![createProject](assets/packages/asana/createProject.png)

### createTask

Takes a name (String), assignee (String), project (String), notes (String) and Asana token (string) and creates a new task in the specified workspace. The assignee can be a user gid, email or null.

![createTask](assets/packages/asana/createTask.png)

### createTaskWithDueDate

Takes a name (String), assignee (String), due date (String - 'YYYY-MM-DD' format) project (String), notes (String) and Asana token (string) and creates a new task in the specified workspace. The assignee can be a user gid, email or null.

![createTaskWithDueDate](assets/packages/asana/createTaskWithDueDate.png)

### getAllProjects

Takes an Asana token as a string and returns details of all projects that token has access to.

![getAllProjects](assets/packages/asana/getAllProjects.png)

### getAllWorkspaces

Takes an Asana token as a string and returns details of all workspaces that token has access to.

![getAllWorkspaces](assets/packages/asana/getAllWorkspaces.png)


## Mailchimp Package

### subscribe

Takes an audience ID (String), email (String), first name (String), last name (String), Mailchimp username(String), Mailchimp API key (String), and Mailchimp datacenter (String) and posts to the [Mailchimp Subscribers API](https://mailchimp.com/developer/guides/manage-subscribers-with-the-mailchimp-api/#Add_a_contact_to_a_list%2Faudience).

![subscribe](assets/packages/subscribe.png)

## Slack Package

For a full list of Slack functions, click [here](slack-apps/slack-packages).

## Trello Package

### addBoardstoDB

Takes a list of boards and a boardDatastore. Adds the name and id of each of the boards to the datastore.

![addBoardstoDB](assets/packages/trello/addBoardsToDB.png)

### addListstoDB

Takes a list of Trello lists and a listDatastore. Adds the name and id of each of the lists to the datastore.

![addListstoDB](assets/packages/trello/addListsToDB.png)

### createNewCard

Takes a listID (String), trelloKey (String), trelloToken (String), name (String) and description (String). Adds card with that name and description to the list specified.

![createNewCard](assets/packages/trello/createNewCard.png)

### getAllBoardsWithDetails

Takes a trelloOrgID (String), trelloKey (String) and trelloToken (String) and returns all boards for that Trello org.

![getAllBoardsWithDetails](assets/packages/trello/getAllBoardsWithDetails.png)

### getAllListsWithDetails

Takes a trelloKey (String), trelloToken (String) and Trello board id and returns all lists for that Trello board.

![getAllListsWithDetails](assets/packages/trello/getAllListsWithDetails.png)

### getAllOpenCardsForMemberWithDetails

Takes a trelloKey (String), trelloToken (String) and username (String) and returns all open cards for that Trello user.

![getAllOpenCardsForMembersWithDetails](assets/packages/trello/getAllOpenCardsForMembersWithDetails.png)

### lookUpBoardID

Takes a boardDatastore (containing names & ids) and a name (String) and returns the board id matching the name.

![lookUpBoardID](assets/packages/trello/lookUpBoardID.png)

### lookUpListID

Takes a listDatastore (containing names & ids) and a name (String) and returns the list id matching the name.

![lookUpListID](assets/packages/trello/lookUpListID.png)

## Upcoming Packages

We have some ideas of packages we intend to implement, but would love to hear what would be most useful.

## Contributions

If you'd like to share a function to the community, please send us a link to the function and we will set it up to be shared back! We love contributions for third party APIs.

---
id: packages
title: Packages
sidebar_label: Packages
---

## Overview

Dark's alpha package manager allows re-using Dark functions from other users or canvases. Today, only Dark employees can add functions to the package manager. Packages are named by the creator, package, function, and version and are accessible via autocomplete. The package manager today is intended for connections to third party services and APIs.

In the future, packages will be imported vs. being continually accessible, and community members will be able to contribute directly. If you would like to request or contribute a package today, please reach out via Slack.

## Slack Package

For a full list of Slack functions, click [here](slack-apps/slack-packages).

## Trello Package

### addBoardstoDB

Takes a list of boards and a boardDatastore. Adds the name and id of each of the boards to the datastore.

![addBoardstoDB](assets/packages/trello/addBoardstoDB.png)

### addListstoDB

Takes a list of Trello lists and a listDatastore. Adds the name and id of each of the lists to the datastore.

![addListstoDB](assets/packages/trello/addListstoDB.png)

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

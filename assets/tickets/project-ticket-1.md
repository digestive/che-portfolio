# Make governance settings adjustable through UI

## Purpose

Allow users to update DAO governance settings using the app interface.

**Problem**

For ERC-20 and ERC-721 DAOs, there is no place in the UI that allows for the editing of the DAO governance settings. If such a DAO wants to make adjustments to their governance settings, they need to work with Decent to put together a custom proposal, which is overly technical, overly manual, and not user friendly.

**Solution**

Let's update the UX to allow for easily adjusting DAO governance settings with a clear, easy to use interface. This should be similar to making other types of changes to a DAO, like the name of the DAO, for example, and the workflow should lead into proposal creation.

The main intention of this feature is to allow users to modify the Quorum, Voting Period, Timelock Period, and Execution Period values as seen on the Governance page in the DAO creation workflow (note that this feature would make the text at the bottom of this page more accurate):

![](assets/images/project-example-1.png "project-example-1.png")

Which should lead into the creation of a proposal that would modify the values as indicated once it has passed a vote and been executed on.

## Features

**Move the Settings page into a modal**

The settings page contents will now be loaded in a modal that sits over the DAO homepage when the 'cog' icon is selected.

The modal will have buttons at the bottom that apply to the whole modal for creating a proposal based on changes made to the settings and discarding changes.

> The modal should close when the user clicks outside of it. If the user has modified any settings, clicking away from the modal should bring up a warning popup giving the options to close the modal or keep it open.

*Special considerations for sub DAOs*:

-   The option to edit the voting settings should only be available to token holders on the parent DAO
    

**Add 'Execution Period' to the governance details in the Settings modal**

Right now, as pictured above, only the Type, Voting Period, Quorum, and Timelock settings are shown on the Governance tab of the Settings page. We should also show the Execution period, which is one of the things we want to allow users to edit as a part of this project.

**Make governance settings editable**

The following settings should be made editable in the settings modal:

-   Quorum (percentage)
    
-   Voting Period (days)
    
-   Timelock Period (days)
    
-   Execution Period (days)
    

When any of the above are modified, the 'discard' and 'create proposal' modal buttons should become active:

-   'Discard' clears all the changes to the settings and reloads the content in the modal to reset it back to the original settings
    
-   'Create Proposal' loads into the 'Create Proposal' page with all modifications from the settings modal included as actions for the proposal
    

*Special considerations for sub DAOs*:

-   A proposal to edit the voting settings should go to the parent DAO, not the sub DAO
    

**Move multi-sig specific 'Modify Governance' option to the Settings modal**

Note that there is already an option presented to "Modify governance" for multi-sig DAOs:

![](assets/images/project-example-2.png "project-example-2.png")

This is present for the purpose of changing from a multi-sig voting strategy to a token voting strategy. Let's move this option over to the settings page and clarify what its purpose is.

**Call out on sub DAOs how modifying their governance settings works**

As indicated in above sections, there are special considerations for sub DAOs. Let's make sure that those special cases are clear to the end user.

We'll add some indications in the UI/UX that:

-   The option to edit sub DAO governance settings is only available for holders of the parent DAO's voting token
    
-   A proposal to edit a sub DAO's governance settings will live on the parent DAO, not the sub DAO
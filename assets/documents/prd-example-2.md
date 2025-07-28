
# Sub DAO Management
This project aims to accomplish the following:

1.  Provide a clearer UX for managing sub DAOs
2.  Provide for the option to manage freeze and clawback settings for a sub DAO
3.  Provide the option to make changes to a sub DAO settings through a parent DAO proposal

## User requirements

-   The option to manage sub DAOs from a page within the parent DAO, including
    -   Initiate a freeze
    -   Initiate a clawback
    -   Update freeze and clawback settings
-   Clear direction of action on parent DAO → proposal creation on parent DAO

## Use case

-   A DAO governor wishes to manage a sub DAO nested within their parent organization
-   Rather than having to visit that sub DAO’s pages to make changes, the governor visits a page on the parent DAO where they get management options
-   When a change is made, it generates a proposal on the parent DAO, more clearly connecting the action and the result

# Proposed Solution

-   Utilize the existing Organization page to move UX previously available on the sub DAOs into a central location accessible directly from the parent DAO
-   Add a Settings “cog” to sub DAO cards within the hierarchy displayed on the Organization page
-   Move the following existing options available through the settings “cog” on sub DAOs to the cog on the sub DAO card on the Organization page:
    -   Initiate Freeze
    -   Initiate Clawback
-   Add a new option to the settings cog for sub DAO cards on the Organization page
    -   Manage Settings
-   Hook up the new Manage Settings option so that it opens the settings modal _for the selected sub DAO_
    -   Include a “Freeze and Clawback” tab to the settings modal explicitly for this user flow
-   Provide for new behavior using the above option that allows a parent DAO to propose changes to a sub DAO’s settings, vote on the changes, and execute them all on the parent DAO
-   Add a status indicator for sub DAOs to show when a sub DAO is frozen

# Features

## Update the Organization page to provide settings option for relevant sub DAOs
![](assets/images/prd-example-1.png "prd-example-1.png")
This feature will require identifying first which sub DAOs the connected wallet has permission to make changes to, then displaying the settings cog only for those DAOs. The settings cog should not be shown at all when no wallet is connected.

## Move freeze and clawback options to Organization page
![](assets/images/prd-example-2.png "prd-example-2.png")
These options currently are available in from a dropdown menu that appears when selecting the settings cog from the homepage of a sub DAO while connected to a wallet with proposal power on the parent DAO.

For this feature, we’ll want to move those options from the sub DAO settings cog to the Organization sub DAO cog.

Note that:

-   These options are never presented both at the same time
-   A freeze needs to be in effect before a clawback can be proposed
-   A freeze doesn’t always go to proposal creation: if the proposer has enough voting power to pass a vote on their own, it goes straight to a transaction, skipping the proposal altogether

Any proposals that are generated for either of these options goes to the parent DAO. Note that a freeze vote uses different parameters than regular votes, as defined on the sub DAO.

## Add a “Manage Settings” option for sub DAOs on Organization page
![](assets/images/prd-example-3.png "prd-example-3.png")
This option will open the settings modal for the sub DAO. If changes are made within this modal, a proposal will go to the parent DAO allowing for changes to be made without going through a proposal on the sub DAO.

## Add a “Freeze and Clawback” tab to the settings modal for sub DAOs (Organization page specific)
![](assets/images/prd-example-4.png "prd-example-4.png")
When the settings modal is opened for a sub DAO using the Organization page, it should show a new tab titled “Freeze and Clawback”.

This new tab should include options to update the values originally configured during sub DAO creation, as pictured above:

-   Freeze Votes Threshold (integer representing a percentage)
-   Freeze Proposal Period (time duration)
-   Freeze Period (time duration)
-   Enable Clawback (toggle off/on)

## Add a “Frozen” indicator to frozen sub DAOs on the Organization page

When a sub DAO is frozen, we should show some indication that it is frozen on the sub DAO card on the Organization page.
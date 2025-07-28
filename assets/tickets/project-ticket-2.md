# Multi-sig improvements
-   Frontend ✅
    
-   Backend 🚫
    
-   Needs design ✅
    
-   Needs copy ✅
## Purpose

1.  Provide multi-sig DAO users the option to reject a proposal from the Decent app interface
    
2.  Consolidate proposals with shared nonces
    
3.  Disambiguate the nonce's purpose and emphasize it in a user friendly way
    
4.  (STRETCH) Add explicit option to "replace" a proposal
    

**Background**

Multi-sig proposals on Decent have traditionally allowed only for signing one way: approve. Signers were given essentially two options: sign (approve), or don't sign.

In reality, behind the scenes on Safe, a multi-sig proposal allows for two types of signatures: approve and reject. Reaching the signer threshold with signatures in either category allows for the proposal to be executed either as "approved" or "rejected".

Further, on Safe, a rejection is actually represented by a separate transaction, effectively a new proposal with the same nonce as the original that will supersede it. If the rejection proposal is executed, both proposals are marked as complete and the proposal is rejected

Finally, the team would like to take this opportunity to explore other improvements that could be made to the multi-sig UX with the **top level goal of keeping the experience simple while offering all of the major functionality available on Safe**. Users should not be compelled to visit Safe to manage their Decent hosted multi-sig DAO for any reason. The biggest current barrier for users to get the most out of their multi-sig DAO on Decent is understanding what the nonce is and how it is used.

## Features

**Update the UI for the Proposal Overview page to allow signers to reject a proposal**

Signers should be given the option to either approve or reject a proposal

-   If a signer originally signed a proposal as "approved", they should have the option to change their signature to "rejected"
    
    -   This includes the author who automatically signs the proposal as "approved" when creating it
        
-   Signatures follow a linear path, the status of the signature cannot move backwards through this path, though the starting point might be different: not signed -> approved -> rejected
    
    -   After a user approves, they may go on to reject
        
    -   After a user rejects, they may not switch to an approval
        

**Ensure the UI for executing a proposal is consistent depending on approval status**

A proposal should become executable for all signers as soon as the signature threshold has been reached

-   A proposal that has reached the threshold with enough approval votes can be executed as approved
    
    -   But the window remains open for it to be rejected up until it is executed
        
-   A proposal that has reached the threshold with enough rejection votes must be executed as rejected
    
    -   There is no window to reverse the rejection decision and go back to approved
        
    -   Signing is closed after a threshold to reject has been reached; approve/reject UI should be hidden/disabled at this point
        

**Emphasize when proposals share a nonce in the proposals list on the homepage**

-   Associate proposals in the list that share a nonce
    
-   This could be as basic as adding the nonce value to the proposal list item
    
-   Or as complex as grouping the proposal list items together based on nonce
    
-   A small improvement along these lines could be to add nonce to the filters
    

**Show proposals that share a nonce on the proposal overview page**

-   Add a section to the main body of the page, most likely between the title/description box and the signers box, that shows other proposals that share a nonce with the one being viewed
    
-   Add some explanatory text that makes it clear what it means that these proposals share a nonce
    
    -   Namely that only one of them will be approved (executed) and all others will be rejected
        
-   This list of proposals could also link off to those proposals for convenience
    

**Make the custom nonce field easier to use and its purpose more clear on the proposal creation page**

-   Update the 'Custom Nonce' field in the create proposal form to be more user friendly
    
-   Add a dropdown menu to the field that is populated with "active" nonces (possibly alongside the proposal name they're associated with)
    
    -   Safe is doing this in a very similar way to what we're shooting for
        
-   Make it clear what it means to select a shared nonce - consider using the term "replace"
    

**Modify rejection logic and clarify behavior in UX**

1.  Change the logic so that reaching rejection signature threshold does not lock down all proposals that share a nonce
    
    1.  Signers will still have the option to go to other proposals and approve them
        
    2.  An approved proposal will take precedence, even if there is an on-chain rejection for the nonce
        
2.  Add UI that communicates that there is an on-chain rejection for proposals that share a nonce
    
    1.  Add a banner to the "Conflicting Proposals" section of the proposal overview page that warns about an on-chain rejection
        
    2.  Use less technical language, but make it clear what the consequences are
        
3.  Separate the rejection CTA so that it can appear on all proposals that share a nonce
    
    1.  A proposal can be signed separately from all others sharing a nonce, either way
        
    2.  A proposal can be executed as approved separately from all others sharing a nonce
        
    3.  The nonce, i.e., all proposals, can be rejected using an execute rejection button from any related proposal page
        

**Accommodate sub DAO specific requirements**

![](assets/images/project-example-3.png "project-example-3.png")

All of the above needs to also account for special cases with multi-sig sub DAOs:

-   The timelock period
    
    -   When there is a timelock period, after the signature threshold is reached a button to "Timelock" the proposal is shown
        
    -   When the "Timelock" button is used, the "Execute" button is shown as innactive
        
    -   The UI shows a timer above the "Execute" button communicating the timelock period
        
    -   Once the timelock period has elapsed, the "Execute" button activates
        
-   The expiration status
    
    -   When there is an expiration time, after the signature threshold is reached and optionally a timelock period has elapsed, the "Execute" button will only be available for the specified time
        
    -   When the expiration time elapses, the "Execute" button is hidden
        

We'll have two objectives with the above information in mind:

1.  Make sure that any new UI that we implement involving the signing options and execute button play nicely with the sub DAO specific UX
    
2.  Allow for an "expired" proposal to still be rejected so it can be cleared from the queue and higher nonces are unblocked
            

## Stretch goals / v2 features

-   Perhaps to make it even easier to discover the option, we could add "replace proposal" to the proposal overview page
    
    -   The problem with this is that there's not really a quick and easy improvement here: it needs to either allow you to edit a proposal filled in with the details of the original or send you into the same proposal type creation flow as the original at the bare minimum (otherwise it isn't really a "replace" option at all)
        
-   Can we add expiration period to the UI for a proposal?
    
    -   This isn't specific to this project, but would overall be a nice to have for proposals with expiration dates
        

## Release Criteria

-   The feature set resolves the stated problem as outlined in the purpose section.
    
-   The features are intuitive to use for the typical Decent user.
    
-   Users are not compelled to visit Safe to carry out actions for their Decent generated proposals.
    
-   Users do not need to know how Safe works or be multi-sig experts to manage their proposals.
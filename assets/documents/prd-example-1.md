
# Decouple Token from Governance
## User requirements

-   Provide the option to deploy an ERC-20 token, explicitly associated with a multi-sig DAO, through the DAO interface
-   Allow for an initial distribution of tokens as part of deployment
-   Maintain multi-sig governance
-   Display information about an associated ERC-20 token within the app for a multi-sig DAO
    -   Basic token information that is currently displayed for ERC-20 token DAOs
    -   Transferable/non-transferable status
-   Moved out of scope
    -   [Token Management UI QoL](https://www.notion.so/Token-Management-UI-QoL-2062ee9c5bc280618c56cc62970ed224?pvs=21)
-   Transitioning a multi-sig DAO to a token DAO should default to use the already generated ERC-20 token

## Use case

-   Multi-sig governance allows for a practical way to manage an organization prior to token launch
-   The future vision of the Decent new user experience is intended to guide founders through the process of launching a token tied to their organization by first creating a multi-sig DAO
-   Founders should have the option to begin the process of setting up their organization’s (pre-launch) token without needing to use it for governance immediately

## Out of Scope

-   For initial launch of this feature, we’ll not worry about providing this as an option during DAO creation
    -   Eventually this will likely be handled by an improved new user experience that guides founders through the process, which may or may not mean setting up an ERC-20 token as part of DAO creation

# Proposed Solution

-   Allow for the deployment of an ERC-20 token, explicitly associated with a multi-sig DAO, through the DAO interface (post DAO creation)
    -   To be accomplished through a new tab in the settings modal
-   Deployment of an ERC-20 token to be associated with the DAO should follow a similar model to ERC-20 token voting DAO creation:
    -   Tokens by default are dispersed to the DAO treasury
    -   A share of the tokens can be distributed amongst user specified wallet addresses as a part of deployment
-   DAO governance should not change from the existing multi-sig experience
-   The UX should incorporate details about an ERC-20 token associated with a multi-sig DAO
    -   Add a new “Token” tab to the settings modal
    -   The new tab will include all of the following information
        -   Basic token information (as seen in the Governance tab for an ERC-20 token DAO): token name, symbol, and total supply
        -   Transferable/non-transferable status
        -   Maximum total token supply (mint ceiling)
-   The UX should allow for the management of an ERC-20 token associated with a multi-sig DAO
    -   Distribution of the token comes for free, since as an asset in the DAO Treasury, it will appear in all Assets dropdowns throughout the app, enabling the following:
        -   Airdrop, Stream, or Transfer tokens to specified wallet addresses via proposal
        -   Stream tokens to specified wallet addresses via Role assignments
    -   (Stretch) The new “Token” tab will also include options to manage all of the following
        -   Transferable/non-transferable status
        -   Transfer whitelist
        -   Maximum total token supply (mint ceiling)
        -   Burnable/non-burnable status

# Features

## Part 1: Backend support of ERC-20 token decoupled from governance

This section to cover backend work needed to support the deployment of an ERC-20 token on a multi-sig DAO that:

-   Is not tied to DAO governance
-   Is associated with/tied to the DAO
-   Token contract should allow for:
    -   Minting (with max total supply)
    -   Burning
    -   Locking/unlocking

This will be accomplished through the governance contract. The current plan is to store the associated token using a key value pair, written to when the token is deployed.

Note that this feature allows for just one token deployed in this way per DAO. This token can, and most likely will, be used as the voting token when transitioning from multi-sig to token governance.

## Part 2: Incorporate token deployment UX for multi-sig DAOs

### Add “Token” tab to the Settings modal

All of the new UX we have planned for this project will be housed within a new tab in the Settings modal.

⚠️ **This is the same tab as we’ll be using for “Staking” for the Revenue Share Project.** ⚠️

There’s ample space to insert a new tab as you can see with the existing design above.

The ‘Token’ tab will initially be empty except for explanatory copy and a CTA to “Deploy Token”.

-   Rather than trying to incorporate the token deployment forms into the Settings modal itself, we’ll preserve them as their own separate flow
-   The forms can be popped out in their own separate modal OR be viewed in a full page experience
-   _Token deployment is not a “Settings action”_: it won’t be batched up with others Settings changes
-   Instead, the deployment forms will terminate with a CTA to create a proposal, entirely apart from the Settings

### Add token deployment UX

> 💡Covers multi-sig DAOs *without* an ERC-20 token deployed

Considering our time and resource constraints, for MVP we’re going to aim to mostly reuse the ERC-20 token DAO creation user flow.

In addition to what exists and is pictured below, we’ll want to add options to:

-   Set transferable/non-transferable status
    -   This is already available behind the `flag_locked_token` feature flag
    -   (Stretch) Insert addresses to transfer whitelist
-   Set burnable/non-burnable status

**Import existing token**

**Deploy new token**

**V2 UX improvements**

One concern with the original token deployment user flow is that it makes it very easy for someone to accidentally mint way too many (or too few) tokens, or even worse, not allocate enough tokens to meet quorum on a vote.

If we’re able to be a bit ambitious here, which is unlikely, we could make some improvements to this UX for this feature. The idea being to push the ‘Total Supply’ field down to below the allocations, perhaps prepopulating with a running total as allocations are assigned.

Quorum is not a concern initially for a multi-sig DAO, but there’s more that could be improved related to that potential pitfall as part of DAO creation or the transition of multi-sig to token voting.

## Part 3: Incorporate token management UX for multi-sig DAOs

<aside> 💡

Covers multi-sig DAOs _with_ an **ERC-20 token deployed

</aside>

Here we’ll be able to reuse the basic token information section already used in the Governance tab of the Settings modal for an ERC-20 token DAO, but we’ll also need to add new options for managing the token.

### Add/move basic “Token Information” to the “Token” tab in the Settings modal

Should be straightforward. We want to take two actions here:

-   For ERC-20 token voting DAOs, move the “Token Information” block to the “Token” tab
-   For multi-sig DAOs, show the “Token Information” block on the “Token” tab

_For now, let’s leave things alone for ERC-721 token voting DAOs and not even show the “Token” tab._

**Existing ERC-20 token information in settings**

### (Stretch) Add token management options to the “Token” tab

<aside> 💡

This entire section can be deferred as needed. All of the functionality described here can be handled by custom proposals on a case by case basis.

</aside>

In addition to the basic, read-only information about the token we’ll display in the top section of the tab, we should also have form fields in a below “Management” section. As is the case with other parts of the Settings modal, these will only be editable when connected to a wallet with proposal power.

The “Management” items will be as follows:

-   Transferable/non-transferable status
    -   OFF/ON toggle
-   Transfer whitelist
    -   List of text inputs where rows can be added/removed
    -   Expected input is a valid wallet or contract address
-   Maximum total token supply (mint ceiling)
    -   Text input prepopulated with current maximum token supply
    -   Expected input is a positive integer ≥ total token supply
-   Burnable/non-burnable status
    -   OFF/ON toggle
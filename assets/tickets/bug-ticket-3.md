## SubDAO creation is blocked unexpectedly by 'Freeze Votes Threshold' field
The 'Freeze Votes Threshold' field blocks the creation of a subDAO for unknown reasons. There are some oddities with this page in the subDAO creation user flow that may or may not be related to this new issue:

-   The default value for the 'Freeze Votes Threshold' field is different from what is seen in prod: for my DAO it defaults to 4 on prod, but 1 on develop
-   The error messaging for the field doesn't explain what the requirement is, simply reading "This value can't be greater than"
-   Various copy has been changed or removed entirely (see screenshot)
    
Here's a side by side of what you can see in prod versus develop:

![](assets/images/bug-example-3.png "bug-example-3.png")

**Steps to Reproduce**

1.  Load into a DAO connected to a wallet with proposal power
2.  Select the 'Organization' tab
3.  Select 'Create SubDAO'
4.  Enter a name and select Multisig (the 'Configure Administration' page looks different depending on which voting type you select; to see what is pictured above, use Multisig)
5.  Select 'Next'
6.  Add at least one signer
7.  Select 'Next'

**Current Result**

The 'Freeze Votes Threshold' field shows an error which can't be cleared and blocks DAO creation.

**Expected Result**

The 'Freeze Votes Threshold' field functions normally and sub DAO creation is possible.

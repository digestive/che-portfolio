## Details of a DAO may carry over from one to another when using homepage DAOs list
This is more likely to happen to someone in testing than in production where users are less likely to be navigating between different DAOs, but it's something that is extremely glaring right now on develop during any normal testing.

This will be a bit hard to describe, but I'll do my best to summarize the issue.

Here are my estimated steps to reproduce:
1.  Open [https://develop.decent-interface.pages.dev/](https://develop.decent-interface.pages.dev/)
2.  If you don't have any DAOs bookmarked, search for a few and add them as favorites (you can use the lists [here](https://www.notion.so/hulking-cosmos-3e8/QA-Test-DAOs-19f2ee9c5bc280048c5ee4d2c9d1dbe5?pvs=25) if you don't have a list already handy somewhere)
3.  Familiarize yourself with the DAOs (ideally they are fairly distinct, like an ERC-20 vs a multi-sig DAO)
4.  If you're not already on the app homepage, go back to [https://develop.decent-interface.pages.dev/](https://develop.decent-interface.pages.dev/)
5.  (probably reload the page at this point just to be safe)
6.  Select a DAO from the bookmarks list
7.  Allow the DAO details to load fully on the DAO homepage
8.  Make a note of the Governance, Proposals, Treasury sections at the top of the page and the Proposals list
9.  Select the 'Decent' logo at the top of the page to return to the app homepage
10.  Select a different DAO from the bookmarks list
11.  Allow the elements to load in fully and compare what you see on this DAO to the last DAO you viewed
    
**In short, there's a very high likelihood that the first time you do this there will be details about the last DAO you looked at loaded in for the new DAO you just navigated to.**

Take this as an example:

![](assets/images/bug-example-1.png "bug-example-1.png")

This is a brand new DAO I spun up for regression testing. It hasn't had a single proposal created for it yet. But in the image above you can see it shows a full list of proposals. It even shows a very specific timelock period that was not set for this DAO. **All of this is carried over from a different, older, DAO**.

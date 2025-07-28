## Roles list may show incorrect roles, carried over from previously viewed DAO
The behavior of the Roles list has been confusing during regression testing, mainly because it can sometimes show the wrong list of Roles. There's some carry over happening between loads of different DAOs. Whether it loads the correct roles eventually without a reload or not is inconsistent.

I've tried to lock down some reproduction steps that at least let you see broken behavior consistently and I've recorded what you should see if you follow the steps:

<video controls width="100%" style="border-radius:8px;box-shadow:0 2px 8px rgba(74,78,105,0.08);">
  <source src="assets/videos/bug-example-2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

**Steps to Reproduce**

1.  Open an incognito browser window
2.  Enter [https://release-v0-16-0.decent-interface.pages.dev/](https://release-v0-16-0.decent-interface.pages.dev/) into the address bar
3.  Search for and select this DAO: 0xB4b01b4Dc5f8d11feD90D760a237BF4D74C3423d (Bookmark this DAO while you're at it)   
4.  Navigate to the Roles page and wait for the Roles list to populate (note that there are 10 roles)
5.  Return to the app homepage
6.  Search for and select this DAO: 0x8630b39523857c8ac2fCc81AD97CF75162cF8E56 (Bookmark this DAO while you're at it) 
7.  Navigate to the Roles page and wait for the Roles list to populate (note that there are 2 roles)
8.  Go back and forth between the two DAOs, observing the Roles list each time

**Current Result**

The roles list of the first DAO eventually takes the place of the roles list of the second DAO and the roles list of the second DAO may show briefly when viewing the Roles page of the first DAO.

**Expected Result**

The list of roles matches the DAO being viewed.

Also, specifically, if there's a pause while the roles list is being loaded in, roles from a different DAO shouldn't be shown. I think what we expect to see is the zero state, some copy that says you don't have any roles yet, but ideally we'd use the same loading animation that we use for the proposals list on the homepage here before we're sure about whether they have any roles or not.

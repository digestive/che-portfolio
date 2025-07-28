## Refine use of separate WYSIWYG and Markdown modes
### Overview
There was [some discussion](https://linear.app/decent-labs/issue/ENG-499/engineering-new-proposal-page-for-proposer#comment-d890d8bf) in the original implementation ticket about the use of the two modes provided by the package: WYSIWYG and markdown. The main question being: do we want to support both modes?

I'm going to list here what I think should be done based on my own personal preferences and opinions given the information I have. If we're unsure about any of this, it should be brought in front of the greater team or design should be consulted.
### Proposed action items
**Relabel WYSIWYG tab**

The term "WYSIWYG" is not generally used outside of engineering teams referring to the design. It's sort of like referring to a design element as a chip, or a hamburger menu, or something along those lines. The "name" of the element isn't shown to the user, nor do they need to know the name.

In this case, if we want to use this tab, we do need to refer to the design element in some way that's clear enough to the user. I did a quick Google search for some alternative terms and I think my favorite of what was suggested is "Visual Editor".

My suggestion is to change the label for the WYSIWYG tab to "Visual Editor".

**Consider removing preview tab**

When in the Markdown mode, the editor shows a preview tab. This makes sense when Markdown mode is the only mode, but it's redundant when the WYSIWYG mode is available. It's also redundant to the proposal preview that is shown on the right side of the Create Proposal page.

This may not be easily possible, but if it is an option, I think it would be best as this reduces redundancy and complexity of the feature both for the end user and the engineering team moving forward.

My suggestion is to remove the 'Preview' tab (default to 'Write'; remove markdown specific tabs for preview/write) from Markdown mode entirely in favor of the WYSIWYG tab and/or the proposal preview, which serve an almost identical purpose.

**Address formatting issues when switching between modes**

Depending on the above action items, this may be more or less complex. Ideally, if we remove the preview tab in Markdown mode, the top menu can remain the same between modes. There won't be a need for a 'Write' and 'Preview' tab, which accounts for the change in the menu that causes the window to change sizes.

Either way, since I'm suggesting we keep the two modes, we'll need to ensure that the formatting of the page is as consistent as possible when switching between the two modes.

My suggestion is to see if this problem is solved by taking out the write/preview tabs from Markdown mode, but if that's not an option, try to fix the width of the editor window so it doesn't change sizes based on the menu options.

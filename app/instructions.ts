// How to organize git commits and pull requests
// Ignore GitHub PRs, merge locally, then close them.
// Merge your branches one by one locally:
/* 
Now go to GitHub and:

Close the existing PRs *

Add a comment like:
“Merged locally into main and pushed. Keeping this PR closed for history.”
*/

// This keeps your repo sane and shows a clear story: you integrated everything into main.

// work in the header, the header should contain the current page i am currently in right after the collapsable button.

// header:
// name of the current page the user is in, should appear there, right after the toggle button
// display the user logged in, with a icon and name
// put for now, only the icon for theme toggle.

// overview:
// work in the kpi cards, how they are being displayed, make it more clean.
// work in recent activity table, make it appears only when the user scrolls

// customers:
// make it not overflow to the sides


// sidebar change the main name to control-panel, mayber change the icon

// settings
// i want to be able to change the user name, displayed in the header
// i want to be able to change the role, of admin to user or whatever
// able to change the email, when i change it, what is going to change is only the email displayed in the email input when i enter the settings page
// i want to add this changes when i click in save changes

// Re-Usable Component:
// there is too many tables in a lot of pages, i want to build a component where all the pages can use it, without needing to create a table in every page. that is going to be cool

// orders:
// add pagination, maybe
// in ordersID, products are being displeyed a little strange fix that

// chart:
// make it more pretty, add more curves to it as well, it is too fucking boring

// adjust the order of components in the components folder, i think it is too messy, and some things are stored in the wrong folders

// fix the error in the console
/*
installHook.js:1 The width(-1) and height(-1) of chart should be greater than 0,
       please check the style of container, or the props width(100%) and height(100%),
       or add a minWidth(0) or minHeight(undefined) or use aspect(undefined) to control the
       height and width.
*/ // it is located in the overview


// Polish
// after all of that i can work in the polish state, there is a file in the settings folder explaining what polish is

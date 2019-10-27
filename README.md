## Portfolio

This is intended to show the code behind the portfolio. As well, this demonstrates my ability to use HTML, CSS, and JavaScript with the ReactJS and React bootstrap. 

### Issues To Solve

The largest hurdle is working with react boostrap instead of around it. It was a struggle to implement my own themeing. I am still working on adjusting nav links.
--Nav links were handled by importing bootstrap css into my own SCSS file and editing defaults there to override bootstrap non-destructively.

Adjusting the footer has been an issue for a little while. The footer increases in size to fill blank space. A CSS fix to set the position to absolute only resulted in overflow text spilling into the footer. 
--Adjusted the layout to include a div with a bottom padding so the body of the text very flows into the footer. 

Removed .vscode file without deleting the local file. 
--Did this using "git rm -r --cached .vscode" from there, I pushed the repo again. This was successful. 

Update card from onClick to hover effect. Show info on top of the card with an opacity overlay

CSS for media queries to handle mobile font sizes

Align forms with headers

Mobile menu collapses on page click
--Menu now collapses when you click a page, but it doesn't collapse when you click off the menu. The fix was to change Link tags to Nav.Link tags, and pass the Link tag through the "as" prop. You also needed to assign an event key to each.

Replace fav icon
--Fav icon replaced and adjused json file



[{"type_of":"article","id":751632,"title":"CSS3 selectors Cheat Sheet","description":"CSS Selectors   CSS selectors are utilized to select the content you need to style. In CSS...","published":true,"published_at":"2021-07-06T19:52:04.113Z","slug":"css3-selectors-cheat-sheet-6dk","path":"/dawnind/css3-selectors-cheat-sheet-6dk","url":"https://dev.to/dawnind/css3-selectors-cheat-sheet-6dk","comments_count":0,"public_reactions_count":21,"page_views_count":152,"published_timestamp":"2021-07-06T19:52:04Z","body_markdown":"## CSS Selectors\n\nCSS selectors are utilized to select the content you need to style. In CSS Rule Set, Selectors are the part. CSS selectors select HTML elements as per their id, class, type, attribute, etc.\n\nCSS selectors are divided into five categories:\n\n1. **Simple/Basic selectors** (select elements based on name, id, class)\n2. **Combinator selectors** (select elements based on a specific relationship between them)\n3. **Pseudo-classes selectors** (select elements based on a certain state)\n4. **Pseudo-elements selectors** (select and style a part of an element)\n5. **Attribute selectors** (select elements based on an attribute or attribute value)\n\n## Simple Selectors\n\n| Selector           | Example    | Example description                             |\n|:------------------:|:----------:|:-----------------------------------------------:|\n| #id                | #firstname | Selects the element with id=\"firstname\"         |\n| .class             | .intro     | Selects all elements with class=\"intro\"         |\n| element.class      | p.intro    | Selects only <p> elements with class=\"intro\"    |\n| *                  | *          | Selects all elements                            |\n| element            | p          | Selects all <p> elements                        |\n| element,element,.. | div, p     | Selects all \\<div> elements and all \\<p> elements |\n\n\n## Basic Selectors\n\n| Selector | Description                                            | Example                                                                   |\n|----------|--------------------------------------------------------|---------------------------------------------------------------------------|\n| element  | Type selector. Matches an element.                     | p { color: red }\nmatches paragraphs                               |\n| .class   | Class selector. Matches the value of anclassattribute. | .warning { color: red }\nmatches elements containing class=\"warning\" |\n| #id      | ID selector. Matches the value of an id attribute.     | #warning { color: red }\nmatches elements containing id=\"warning\"    |\n| *        | Universal selector. Matches everything.                | * { color: red }\nmatches everything                                 |\n\n\n## Attribute selectors\n\n|Selector|Description|Example|\n|--- |--- |--- |\n|[attribute]|Matches elements containing a given attribute.|a[href] { <br/>color: red;<br/>}|\n|matches a elements with an href attribute|||\n|[attribute=\"x\"]|Matches elements containing a given attribute with a given value.|a[href=\"/x/\"]<br/>{color: red;}|\n|matches a elements with the attribute and value href=\"/x/\"|||\n|[attribute~=\"x\"]|Matches elements containing a given attribute with a value that contains a sub-value within a space-separated list.|abbr[title~=\"x\"]<br/>{ color: red;}|\n|matches abbr elements with a title that contains 'x' (such as in title=\"Cascading Style Sheets\")|||\n|[attribute&#124;=\"x\"]|Matches elements containing a given attribute with a value that contains a sub-value within a hyphen-separated list.|\n|matches html elements with a lang attribute that contains 'en' (such as in lang=\"en-gb\") |||\n|[attribute^=\"x\"]|Matches elements containing a given attribute with a value that starts with something.|a[href^=\"http://\"]<br/>{color: red;}|\n|matches a elements with an href attribute, the value of which begins with 'http://'|||\n|[attribute$=\"x\"]|Matches elements containing a given attribute with a value that ends with something.|a[href$=\".com\"] <br/>{color: red; }|\n|matches a elements with an href attribute, the value of which ends with '.com'|||\n|[attribute*=\"x\"]|Matches elements containing a given attribute with a value that contains something.|a[href*=\"hdog\"]<br/>{color: red;}|\n|matches a elements with an href attribute, the value of which contains 'hdog'|||\n\n\n\n## Pseudo-classes Selectors\n\n| Selector            | Description                                                                           | Example                                                                                                                         |\n|---------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|\n| :link               | Matches a link that has not been visited.                                             | a:link { color: blue }                                                                                                          |\n| :visited            | Matches a link that has been visited.                                                 | a:visited { color: purple }                                                                                                     |\n| :active             | Matches an element that is being activated, such as a link being clicked on.          | a:active { color: red }                                                                                                         |\n| :hover              | Matches an element whose box is being hovered over by a cursor.                       | a:hover { text-decoration: none }                                                                                               |\n| :focus              | Matches an element that has focus, such as one that has been tabbed to.               | a:focus { border: 1px solid yellow }                                                                                            |\n| :target             | Matches an element that has been linked to (via<a href=\"#x\"…,for example).            | h2:target { color: red }\nmatches a second-level heading that has been linked to                                            |\n| :lang()             | Matches an element of a given language.                                               | p:lang(fr) { color: red }\n matches paragraphs that are declared, or otherwise considered, as French                         |\n| :first-child        | Matches the first child of an element.                                                | p:first-child { color: red }\n matches the first child, if it is a paragraph, of an element                                  |\n| :last-child         | Matches the last child of an element.                                                 | div p:last-child { color: blue }\n matches the last child, if it is a paragraph, of an element                               |\n| :first-of-type      | Matches the first sibling of its type in an element.                                  | li:first-of-type { color: red }\n matches the first instance of a list item inside an element                                |\n| :last-of-type       | Matches the last sibling of its type in an element.                                   | li:last-of-type { color: blue }\n matches the last instance of a list item inside an element                                 |\n| :nth-child()        | Matches an element that is the ordinal number child of its parent.                    | p:nth-child(3) { color: red }\n matches the third child, if it is a paragrpah, of an element                                 |\n| :nth-last-child()   | Matches an element that is the ordinal number child, in reverse order, of its parent. | p:nth-last-child(2) { color: blue }\n matches the next-to-last child, if it is a paragraph, of an element                    |\n| :nth-of-type()      | Matches an element that is the ordinal number sibling of its type.                    | li:nth-of-type(5) { color: red }\n matches the fifth instance of a list item inside an element                               |\n| :nth-last-of-type() | Matches an element that is the ordinal number sibling, in reverse order, of its type. | li:nth-of-type(5) { color: red }\n matches the next-to-last instance of a list item inside an element                        |\n| :only-child         | Matches an element if it is the only child of its parent.                             | article p:only-child { color: red }\n matches a paragraph if it is the only child of an article element                      |\n| :only-of-type       | Matches an element if it is the only sibling of its type.                             | article aside:only-of-type { color: blue }\n matches an aside element if it is the only aside element in an article element  |\n| :empty              | Matches an element with no children, or content.                                      | td:empty { border-color: red }\n matches table data cells with nothing in 'em                                                |\n| :root               | Matches the root element of a document. This will be the html element in HTML.        | :root { background: yellow }                                                                                                    |\n| :enabled            | Matches form control elements that are not disabled.                                  | input:enabled { border-color: lime }\n matches input elements that are not disabled                                          |\n| :disabled           | Matches form control elements that are disabled.                                      | input:enabled { border-color: red }\n matches input elements that are disabled                                               |\n| :checked            | Matches a radio or checkbox type input element that is checked.                       | input:checked { outline: 3px solid yellow }\n matches checked input elements                                                 |\n| :not()              | Negotiation pseudo-class. Matches an element that does not match a selector.          | p:not(:first-child) { color: orange }\n matches paragraphs that are not first children                                       |\n\n## Pseudo-elements Selectors\n\n| Selector            | Description                                                                                  | Example                                                                                                       |\n|---------------------|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|\n| ::first-line        | Matches the first textual line in an element.                                                | p::first-line { font-weight: bold }\n matches the first line in a paragraph                                |\n| ::first-letter      | Matches the first letter in an element.                                                      | p::first-letter { font-size: 2em }\n matches the first letter in a paragraph                               |\n| ::before            | Used with the content property to generate content before the initial content of an element. | h1::before { content: \"*\" }\n places an asterisk at the start of a top-level heading                       |\n| ::after             | Used with the content property to generate content after the initial content of an element.  | h1::after { content: \"+\" }\n places a plus-sign at the end of a top-level heading                          |\n\n## Combinator Selectors\n\n|Selector|Description|Example|\n|--- |--- |--- |\n|selector selector|Descendant combinator. Matches elements that are descendants of another element.|aside p { color: red }\n matches paragraphs inside elements containing class=\"warning\" |\n|selector > selector|Child combinator. Matches elements that are children of another element.|.warning > p { color: red }\n matches paragraphs that are children of elements containing class=\"warning\" |\n|selector + selector|Adjacent sibling combinator. Matches elements that immediately follow another element.|h1 + * { color: red }\n matches the first element to follow a top-level heading |\n|selector ~ selector|General sibling combinator. Matches elements that follow another element.|h2 ~ p { color: red }\n matches every paragraph that follows a second-level heading |\n\n## CSS Group Selector\n\nThe grouping selector in CSS picks all the HTML elements with the same style definitions.\n\n```css\nh1 { \n  text-align: center; \n  color: red; \n} \nh2 { \n  text-align: center; \n  color: red; \n} \np { \n  text-align: center; \n  color: red; \n}\n```\n\nTo minimize the code, just apply the CSS grouping selectors. Simply group the selectors by separating each selector with a comma. Let's see the following code after CSS Grouping Selectors:\n\n```css\nh1, h2, p { \n  text-align: center; \n  color: red; \n}\n```","positive_reactions_count":21,"cover_image":null,"tag_list":["beginners","webdev","css"],"canonical_url":"https://dev.to/dawnind/css3-selectors-cheat-sheet-6dk","user":{"name":"Mainak Das","username":"dawnind","twitter_username":null,"github_username":"DawnMD","website_url":null,"profile_image":"https://res.cloudinary.com/practicaldev/image/fetch/s--JvD56N6_--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/656554/bbe6fd60-857e-475b-b6dc-3901e1638f62.jpeg","profile_image_90":"https://res.cloudinary.com/practicaldev/image/fetch/s--DiNb_ZuM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/656554/bbe6fd60-857e-475b-b6dc-3901e1638f62.jpeg"}},{"type_of":"article","id":748756,"title":"Centering in CSS - Horizontally, Vertically","description":"Centering Things in CSS is a bit hard. The problem is which way to reach for among the different ways...","published":true,"published_at":"2021-07-06T07:39:21.629Z","slug":"centering-in-css-horizontally-vertically-4bhb","path":"/dawnind/centering-in-css-horizontally-vertically-4bhb","url":"https://dev.to/dawnind/centering-in-css-horizontally-vertically-4bhb","comments_count":0,"public_reactions_count":0,"page_views_count":26,"published_timestamp":"2021-07-06T07:39:21Z","body_markdown":"Centering Things in CSS is a bit hard. The problem is which way to reach for among the different ways available to **Center Elements** in CSS. In this tutorial, I have explained how to center an element with CSS Vertically, Horizontally, at Block Levels.\n\n## How to center horizontally?\nCentering elements horizontally is quite simple compared to vertical centering. We have present different ways to center the elements horizontally. To change the text to center horizontally is quite simple. You can simply set the text-align property to center in order to center an element horizontally.\n```css\np { \n  text-align: center; \n}\n```\n\n## How to center horizontally with flexbox?\nThe modern way to center anything is to use Flexbox rather than going with the text.\n```css\n#mysection { \n  display: flex; \n  justify-content: center; \n}\n```\nAny element within my section will be centered horizontally by using the above code. There is an alternative method to go with if you don't want to use the flexbox.\n\n## How to center horizontally using CSS margin auto?\nAnything which is not text can be centered by applying an automatic margin on the left and right and set the width of the element.\n```css\nsection { \n  margin: 0 auto; \n  width: 50%; \n}\n```\nThe above `margin: 0 auto;` is a shorthand for\n```css\nsection { \n  margin-top: 0; \n  margin-bottom: 0; \n  margin-left: auto; \n  margin-right: auto; \n}\n```\nDo remember to set the item to `display: block` if it is an inline element.\n\n## How to Center Vertically using Flexbox?\nCentering an element vertically can be a difficult task. Flexbox gives us a simple way to center alignment vertically.\n```css\n#mysection { \n  display: flex; \n  align-items: center; \n}\n```\nAny element within my section will be centered vertically.\n\n## How to Center Both Vertically and Horizontally using Flexbox?\nYou can combine the flexbox techniques to center both vertically and horizontally for an element in the page.\n```css\n#mysection { \n  display: flex; \n  align-items: center; \n  justify-content: center; \n}\n```\n\n## How to Center Vertically and Horizontally using CSS Grid?\nWe can perform the same using CSS Grid:\n```css\nbody { \n  display: grid; \n  place-items: center; \n  height: 100vh; \n}\n```","positive_reactions_count":0,"cover_image":null,"tag_list":["css","html","beginners","webdev"],"canonical_url":"https://dev.to/dawnind/centering-in-css-horizontally-vertically-4bhb","user":{"name":"Mainak Das","username":"dawnind","twitter_username":null,"github_username":"DawnMD","website_url":null,"profile_image":"https://res.cloudinary.com/practicaldev/image/fetch/s--JvD56N6_--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/656554/bbe6fd60-857e-475b-b6dc-3901e1638f62.jpeg","profile_image_90":"https://res.cloudinary.com/practicaldev/image/fetch/s--DiNb_ZuM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/656554/bbe6fd60-857e-475b-b6dc-3901e1638f62.jpeg"}},{"type_of":"article","id":748345,"title":"3 ways to display two divs side by side","description":"The most common and traditional way (inline-block)   The most common way to place two divs...","published":true,"published_at":"2021-07-05T08:59:41.396Z","slug":"3-ways-to-display-two-divs-side-by-side-3d8b","path":"/dawnind/3-ways-to-display-two-divs-side-by-side-3d8b","url":"https://dev.to/dawnind/3-ways-to-display-two-divs-side-by-side-3d8b","comments_count":2,"public_reactions_count":4,"page_views_count":79,"published_timestamp":"2021-07-05T08:59:41Z","body_markdown":"## The most common and traditional way (inline-block)\nThe most common way to place two divs side by side is by using `inline-block` css property.\n\n**HTML**:\n\n```html\n<div class='parent'>\n  <div class='child'>child 1</div>\n  <div class='child'>child 2</div>\n</div>\n```\n\n**CSS**:\n\n```css\n.parent {\n  border: 1px solid black;\n  margin: 1rem;\n  padding: 2rem 2rem;\n  text-align: center;\n}\n.child {\n  display: inline-block;\n  border: 1px solid red;\n  padding: 1rem 1rem;\n  vertical-align: middle;\n}\n```\n\nThe output of the above styling is:\n![Two divs using inline-block](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9xufvk0jr3ee7a9s4c1c.png)\n\nThe `inline-block` property on the parent placed the two divs side by side and as this is `inline-block` the `text-align` feature worked here just like an inline element does.\n\nIn child we used `verticle-align:middle` to vertically align the divs taking their center into consideration.\n\nAlso we can make space between the two divs by adding `margin-right` to the first div and/or `margin-left` to the second div.\n\nThere are several ways to place HTML divs side-by-side. The simplest and most efficient way to do this is to make use of a handful of CSS properties (i.e., float, grid, and flex).\n\n## Float Method\n\nIn the float method, we will be using the following HTML markup:\n\n**HTML**:\n\n```html\n<div class=\"float-parent-element\">\n  <div class=\"float-child-element\">\n    <div class=\"red\">Float Column 1</div>\n  </div>\n  <div class=\"float-child-element\">\n    <div class=\"yellow\">Float Column 2</div>\n  </div>\n</div>\n```\nThe `.float-parent-element` is simply the parent element that contains both `.float-child-element` elements.\n\nTo get the divs side by side, we will use the following CSS rules:\n\n**CSS**:\n\n```css\n.float-parent-element { \n    width: 50%; \n} \n.float-child-element { \n    float: left; \n    width: 50%; \n} \n.red { \n    background-color: red; \n    margin-left: 50%; \n    height: 100px; \n} \n.yellow { \n    margin-left: 50%; \n    height: 100px; \n    background-color: yellow; \n}\n```\n\nThe resulting code will look like this:\n\n![Two divs using float method](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1oh6k8p0i5gznn14vc6i.png)\nI've added an initial width of 50% to the `.float-parent-element` so that it will get some width at first.\n\nThen I have added each of the `.float-child-element` a property of float left to position then side by side and a width of 50% of the parent div.\n\nFinally, for the `.float-child-element` I have added their respective colors with some height of 100px and margin to better differentiate them.\n\n## Flexbox Method\n\nWith flexbox, we can use a more intuitive way of aligning our two div elements.\n\n**HTML**:\n\n```html\n<div class=\"flex-parent-element\">\n  <div class=\"flex-child-element magenta\">Flex Column 1</div>\n  <div class=\"flex-child-element green\">Flex Column 2</div>\n</div>\n```\n\n**CSS**:\n\n```css\n.flex-parent-element {\n  display: flex;\n  width: 50%;\n}\n\n.flex-child-element {\n  flex: 1;\n  border: 2px solid blueviolet;\n  margin: 10px;\n}\n\n.flex-child-element:first-child {\n  margin-right: 20px;\n}\n```\n\nWith flexbox, we have set display: flex on the parent .flex-parent-element.\n\nThis turns on flexbox.\n\nThen in each .flex-child-element, we are setting flex: 1. This number is like a ratio comparing the widths of each child in the parent flex element.\n\nSince they are the same, the available space will be divided up equally. And since we have two child elements, they will each take up 50%.\n\nHere’s what the resulting code will look like:\n\n![Two divs using flexbox](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lwuhgol5dz33goii5xmc.png)\n\n### Space between divs by using a margin, and it will still fit\n\nNotice that we’ve added space by adding margin: 10px to .flex-child-element. However, flexbox is intelligent enough to take that extra 20px into consideration when dividing up the rest of the available width.\n\nThis means you can add space with margin without having to calculate the exact pixels. Flexbox will fit the content for you!\n\n## Grid Method\n\nAnd here’s how you can place the two divs side by side, using CSS grid:\n\n**HTML**:\n\n```html\n<div class=\"grid-container-element\">\n    <div class=\"grid-child-element purple\">Grid Column 1</div>\n    <div class=\"grid-child-element green\">Grid Column 2</div\n</div>\n```\n\n**CSS**:\n\n```css\n.grid-container-element { \n    display: grid; \n    grid-template-columns: 1fr 1fr; \n    grid-gap: 20px; \n    border: 1px solid black; \n    width: 50%; \n} \n.grid-child-element { \n    margin: 10px; \n    border: 1px solid red; \n}\n```\n\nAnd here’s what the code will look like:\n\n![Two divs using grid](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/um77ip92tvvvw8exgk73.png)\n\nOne big change with the grid is that you first determine what the grid template will look like. Meaning how many columns and/or rows you want in your layout.\n\nIn our case, we want two columns of equal width. So in the parent .grid-container-element, we turn the grid on with display: grid. Then we add in how many columns we want in our layout with the grid-template-columns property.\n\nWe want two columns of equal width, so we set it to 1fr 1fr. This tells the browser to create a two-column layout, and each column takes up 1fr (fr = fractional unit) of space.\n\nThe fr unit is a ratio of each column to another, similar to the flex: 1 rule we used in the flexbox method. Having the columns set to 1fr 1fr means that each column will take up the same amount of space.\n\n### Space between grid items with the grid-gap property\n\nOne big benefit to using a CSS grid is that you don’t need to use padding or margin to add space between grid items.\n\nYou can use the grid-gap (or gap in newer browsers) to automatically add space in your grid template.\n\nWe’ve set grid-gap to 20px, so the browser will know to add 20px of space between all items, whether they are side by side or stacked.","positive_reactions_count":4,"cover_image":null,"tag_list":["webdev","css","html","beginners"],"canonical_url":"https://dev.to/dawnind/3-ways-to-display-two-divs-side-by-side-3d8b","user":{"name":"Mainak Das","username":"dawnind","twitter_username":null,"github_username":"DawnMD","website_url":null,"profile_image":"https://res.cloudinary.com/practicaldev/image/fetch/s--JvD56N6_--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/656554/bbe6fd60-857e-475b-b6dc-3901e1638f62.jpeg","profile_image_90":"https://res.cloudinary.com/practicaldev/image/fetch/s--DiNb_ZuM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/656554/bbe6fd60-857e-475b-b6dc-3901e1638f62.jpeg"}},{"type_of":"article","id":747995,"title":"Why Use PostCSS?","description":"What is PostCSS?   PostCSS is a tool for transforming CSS with JavaScript plugins. It...","published":true,"published_at":"2021-07-04T19:27:51.658Z","slug":"why-use-postcss-3afo","path":"/dawnind/why-use-postcss-3afo","url":"https://dev.to/dawnind/why-use-postcss-3afo","comments_count":0,"public_reactions_count":3,"page_views_count":40,"published_timestamp":"2021-07-04T19:27:51Z","body_markdown":"## What is PostCSS?\nPostCSS is a tool for transforming CSS with JavaScript plugins. It provides features via its extensive plugin ecosystem to help improve your CSS writing experience. You can pick the plugins you need or even write a custom one for yourself.\n\n---\nHowever, there are PostCSS plugins that do not transform plain CSS, but operate on Sass-like syntax. One example is the PostCSS Simple Variables plugin, which allows you to implement variables (just like in Sass) that you can reuse throughout your code, as shown below.\n---\n\n```css\n$color-brand: darkgrey;\n$font-size: 1em;\nbody { color: $color-brand; \n       font-size: $font-size; \n     }\n```\n## PostCSS Installation\nYou can use yarn or npm to install PostCSS.\n```\nyarn global add postcss-cli\nnpm install -g postcss-cli\n```\nOnce you are done, the postcss command would be available in your command line.\n## Why use PostCSS?\nLet’s take a look at a few use cases for PostCSS via the power of its plugins.\n### Autoprefixing\nAs previously mentioned, the Autoprefixer plugin will add vendor prefixes to CSS properties using values from Can I Use. This reduces clutter in your code and improves readability. For example, this input:\n```css\n:fullscreen {\n}\n```\nGives this output:\n```css\n:-webkit-:full-screen {}\n:-moz-:full-screen {}\n:full-screen {}\n```\n### Using CSSNext features that browsers understand\nWith the PostCSS Preset Env plugin, you can write future CSS syntax, and the plugin will convert it to CSS that browsers will understand by working out the necessary polyfill. For example, this input:\n```css\n@custom-media --med (width <= 50rem);\n@media (--med) {\n  a { \n    &:hover {\n      color: color-mod(black alpha(54%));\n    }\n  }\n}\n```\nGives this output:\n```css\n@media (max-width: 50rem) {\n  a:hover  { \n    color: rgba(0, 0, 0, 0.54);\n  }\n}\n```\n### Avoiding errors in your CSS\n\nThe stylelint plugin points out errors in your CSS code. It supports the latest CSS syntax. For example, this input:\n```css\na { \n  color: #d3;\n}\n```\nGives this output:\n```css\napp.css\n2:10 Invalid hex color\n```\n### Using locally scoped CSS class names\nWith the CSS Modules plugin, you can write CSS that is locally scoped to components, meaning there won’t be any conflicts between your CSS class names no matter how generic they are. For example, this input:\n```css\n.name {\n  color: grey;\n}\n```\nGives this output:\n```css\n.Logo__name__SVK0g {\n  color: gray;\n}\n```\n### Creating stunning grids\nThe LostGrid plugin uses calc() to create grids based on fractions you define without the need to pass a lot of options. For example, this input:\n```css\ndiv {\n  lost-column: 1/3 \n}\n```\nGives this output:\n```css\ndiv {\n  width: calc(99.9% * 1/3 -  \n  (30px - 30px * 1/3)); \n}\ndiv:nth-child(1n) {\n  float: left; \n  margin-right: 30px; \n  clear: none; \n}\ndiv:last-child {\n  margin-right: 0; \n}\ndiv:nth-child(3n) {\n  margin-right: 0; \n  float: right; \n}\ndiv:nth-child(3n + 1) {\n  clear: both; \n}\n```\n## PostCSS Plugins\nPostCSS provides various tools for CSS Processing. Below is the list of popular plugins so that you can have an overview of what's possible to do with PostCSS.\n**autoprefixer**: It Parses your CSS and finds if some rules need a vendor prefix. Autoprefixer do so as per the Can I Use Data so you need not bother whether a feature needs a prefix, or if prefixes you use are unneeded because obsolete. You can write cleaner CSS with the help of the plugin.\n**cssnext**: This is a Babel of CSS and permits you to use modern CSS features and takes care of transpiling them to a CSS digestible to older browsers.\n\n* Adds prefixes taking help of Autoprefixer.\n* You can use CSS Variables.\n* You can even use nesting same as in Sass.\n\n**CSS Modules**: PostCSS allows you to use CSS Modules. These Modules aren't a part of CSS Standard and are a build-step process to have a scoped selectors.\n**csslint**: Linting allows us to write correct CSS and avoid errors. stylelint plugin permits you to lint CSS during the build time.\n**cssnano**: cssnano minimizes CSS and makes code optimizations so that the least amount of code is delivered in the production.\n\n## How PostCSS is different from Sass and Less?\n\nPostCSS can do the same work as preprocessors like Sass, Less, and Stylus, but PostCSS is modular and, in my experience, faster.\n\nThe main difference between PostCSS and CSS preprocessors is that you can pick the features you need. Sass and Less give you lots of features you may or may not use, and which you can’t extend.\n\nThere are also PostCSS plugins like PostCSS Sass and PreCSS, which are essentially complete replacements for Sass. This means you could literally write your own preprocessor powered by PostCSS.","positive_reactions_count":3,"cover_image":"https://res.cloudinary.com/practicaldev/image/fetch/s--bsKueGIL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rnqua826uvd1higzwa3p.png","tag_list":["css","postcss"],"canonical_url":"https://dev.to/dawnind/why-use-postcss-3afo","user":{"name":"Mainak Das","username":"dawnind","twitter_username":null,"github_username":"DawnMD","website_url":null,"profile_image":"https://res.cloudinary.com/practicaldev/image/fetch/s--JvD56N6_--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/656554/bbe6fd60-857e-475b-b6dc-3901e1638f62.jpeg","profile_image_90":"https://res.cloudinary.com/practicaldev/image/fetch/s--DiNb_ZuM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/656554/bbe6fd60-857e-475b-b6dc-3901e1638f62.jpeg"}}]
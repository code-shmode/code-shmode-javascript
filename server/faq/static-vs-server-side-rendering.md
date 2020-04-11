# Static rendering vs server rendering

Both these techniques create HTML on the server and send it to the browser. The difference lies in when the HTML is created.

## Static rendering
 
Static rendering happens when the site is built.

All pages that a user can visit must be known and the build process will fetch the data (usually from some kind of API) and build out the HTML with this data.

Static rendering results in very fast delivery times for your content as there is no server processing necessary when a user requests a page - the page has already been built and is simply delivered to the browser.

This kind of rendering is suitable if your content doesn't change that often.

Apart from occuring when your frontend source code changes, builds can be triggered when the data in your API changes. If you make a lot of content changes you may start to occur large build-time costs at your hosting provider. sss

## Server rendering

Server rendering happens when a user requests a page, not ahead of time. This is is similar to how sites built with a server-side language or framework like PHP and ASP.NET work.

This allows for dynamic content to be produced and is suitable if you have a lot of user generated content, for example reviews or a rating system where the voting totals are constantly being updated.

# Wordpress.com API

This will demonstrate how to access the API of a free site hosted on Wordpress.com.

---

Create an account <a href="https://wordpress.com/start/user?ref=logged-out-homepage-lp" target="_blank">here</a>.

Once signed up, enter a domain you would like to use and select the free subdomain option below:

![Wordpress.com subdomain](/images/wordpress/wp-subdomain.png "700")

Select <b>Start with a free site</b> on the next page.

![Wordpress.com free site](/images/wordpress/wp-free-site.png "400")

Verify your email address via the email you receive through the sign up process.

Once confirmed, launch your site.

![Wordpress.com launch site](/images/wordpress/wp-launch-site.png "350")

Select <b>Skip Purchase</b> on the next page.

![Wordpress.com skip purchase](/images/wordpress/wp-skip-purchase.png "350")

And then continue with your free site:

![Wordpress.com continue with free site](/images/wordpress/wp-continue-with-free-site.png "350")

## Viewing the API

Once launched, your site's API will be accessible via the following URL:

```html
https://public-api.wordpress.com/wp/v2/sites/your-domain.wordpress.com
```

Substitute your own subdomain for `your-domain` above.

With that URL you will be able to browse the endpoints in a program like Postman or directly in your browser.

> Firefox's displaying of json from an API call is far better than Chrome's.

To fetch a list of posts you would use the endpoint:

```html
https://public-api.wordpress.com/wp/v2/sites/your-domain.wordpress.com/posts
```

### Developer console.

Wordpress.com provides a console for browsing the API at <a href="https://developer.wordpress.com/docs/api/console/">https://developer.wordpress.com/docs/api/console/</a>.

![Wordpress.com dev console](/images/wordpress/wp-com-console.png "350")

## Adding and editing posts

You can add and edit posts via the Site -> Posts menu item.

![Wordpress.com site menu](/images/wordpress/wp-site-menu.png "350")

> You will need to upgrade your account or host your own Wordpress installation to install plugins and create custom post types.

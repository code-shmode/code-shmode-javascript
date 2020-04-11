# Introduction to Next.js

[Next.js](https://nextjs.org/) is a React framework that provides, amongst other things, pre-rendered pages, which will improve your site's SEO, and easy routing.

Part 1 of the intro will cover routing basics and rendering an array of data fetched from an API.

> This page uses yarn instead of npm. If you prefer using npm you can substitute `yarn` for `npm run` and `yarn add` for `npm install`.

First we'll use Create Next App to create a new Next app. Run the following command in your command line or terminal:

```js
npx create-next-app nextjs-intro
```

Change into that directory and start the app:

```js
cd nextjs-intro
yarn dev
```

> If you have another app running on port 3000, you can set the port number with a `-p` switch:
>
> ```
> yarn dev -p 3001
> ```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## App structure

`create-next-app` creates three folders for us:

-   `components` - all our components apart from our page components will live here.
-   `pages` - this will hold the components that will serve as the pages in our app.
-   `static` or `public` - if your version of `create-next-app` calls this folder `static`, please rename it to `public`. This is where things like images and favicons will go.

You can delete `components/nav.js`.

## Routing

Every file in the `pages` folder, such as `about.js` or `contact.js`, will be become a route we can navigate to without having to use a library like `react-router`.

The file names must match the browser url you want. If you want your About Us page to have the path `/about-us`, the file in pages must be called `about-us.js`.

Open `pages/index.js`, delete everything inside and replace it with the following:

```js
import React from "react";
import Link from "next/link";
import Head from "../components/head";

export default function Index() {
	return (
		<>
			<Head title="Next Intro" />

			<Link href="/about">
				<a>About</a>
			</Link>
		</>
	);
}
```

Page components are normal React components.

`Head` is a component provided by `create-next-app` that we can use on each page to create the contents of the HTML `<head>` tags, such as the `title` tag and `description` meta tag. Above we are using the `title` prop to set the title of the index page to "Next Intro". Because Next provides SSR, these values are easier found by search bots, improving your site's SEO.

`Head` utilises a component imported from `next/head` to append elements to the `head` tag. We'll use this same component shortly.

`Link` is a component provided by Next we can use to navigate around our app, similar to `NavLink` in React Router. The child of a link component must be an `a` tag. We are setting the `href` prop to `/about` which means clicking the link will navigate to `http://localhost:3000/about`. If you vist that page now you'll be greeted by Next's built-in 404 component.

### Adding a page

Create the file `pages/about.js` and add the following:

```js
import React from "react";
import Link from "next/link";
import Head from "../components/head";

export default function About() {
	return (
		<>
			<Head title="About | Next Intro" />

			<Link href="/">
				<a>Home</a>
			</Link>
		</>
	);
}
```

We've changed the title in the `Head` component and the `Link` component will take us back to the `index` page. (You may have to reload to see the changes when adding a new page).

## Adding a layout component

We're going to use `React Bootstrap` so install that:

```js
yarn add react-bootstrap
```

Create `components/layout/Layout.js` and add the following:

```js
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import NextHead from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Layout(props) {
	return (
		<>
			<NextHead>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
			</NextHead>
		</>
	);
}
```

We're using the `NextHead` component from `next/head` to append a link to the Bootstrap CSS CDN file.

Next we'll add the navbar below the `NextHead`:

```js
<Navbar bg="dark" variant="dark" expand="lg">
	<Link href="/">
		<a>
			<Navbar.Brand>Next Intro</Navbar.Brand>
		</a>
	</Link>
	<Navbar.Toggle aria-controls="basic-navbar-nav" />
	<Navbar.Collapse id="basic-navbar-nav">
		<Nav className="mr-auto">
			<Link href="/">
				<a>
					<Nav.Link as="span">Home</Nav.Link>
				</a>
			</Link>
			<Link href="/about">
				<a>
					<Nav.Link as="span">About</Nav.Link>
				</a>
			</Link>
		</Nav>
	</Navbar.Collapse>
</Navbar>
```

We need to render what we want wrapped in this layout using the `children` prop. Add the following below the `Navbar`:

```js
<Container>{props.children}</Container>
```

Full code for `Layout.js`: s

```js
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import NextHead from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Layout(props) {
	return (
		<>
			<NextHead>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
			</NextHead>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Link href="/">
					<a>
						<Navbar.Brand>Next Intro</Navbar.Brand>
					</a>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link href="/">
							<a>
								<Nav.Link as="span">Home</Nav.Link>
							</a>
						</Link>
						<Link href="/about">
							<a>
								<Nav.Link as="span">About</Nav.Link>
							</a>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container>{props.children}</Container>
		</>
	);
}
```

### Including the layout in pages

In both `pages/index.js` and `pages/about.js`, import the `Layout` component and replace the fragment tags `<></>` with this component.

How `pages/index.js` should look noww:

```js
import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/layout/Layout";

export default function Index() {
	return (
		<Layout>
			<Head title="Next Intro" />

			<Link href="/about">
				<a>About</a>
			</Link>
		</Layout>
	);
}
```

### A note on pre-rendered pages

Add the following to the `index` page:

```html
<p>Lorem ipsum dolor</p>
```

If you view the source of the page (not inspect), you will find that text as well as the `head` content and nav HTML. This is because Next generates the initial content on the server and then sends it to the browser. Updates will still happen in the browser.

This is not the case with apps generated with `create-react-app`. With that, only a very small amount of HTML is send to the browser and the rest is filled in by JavaScript.

Pre-rendered apps will improve the ability of search engines to index your content.

## API calls in Next

We want to store our API URL as a constant. In `constants/api.js`:

```js
export const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
```

Because Next pages are pre-rendered on the server, we need an HTTP library we can use in both the server and client (browser) environments. The built-in `fetch` method in JavaScript only works in the browser.

Install [axios](https://github.com/axios/axios):

```js
yarn add axios
```

Next provides two different kinds of pre-rendering: static generation and server-side rendering. You can read more about the differences between those terms [here](/server/faq/static-vs-server-side-rendering).

For each page in a Next app you can choose whether to staticly generate it or server-side render it. To do the former you would use the async function `getStaticProps`, and for the latter you'd use the `getServerSideProps` async function.

In this example we will use `getStaticProps`.

To use it we need to export it from the same file our page function is in.

In `pages/index.js`, import `axios` and `BASE_URL`:

```js
import axios from "axios";
import { BASE_URL } from "../constants/API";
```

We will use the async/await method of making API calls rather than promises and `then` methods.

After the `Index` function, add the following:

```js
export async function getStaticProps() {
	// in case there is an error in the API call
	// we'll send an empty array in as the prop
	let posts = [];

	try {
		const response = await axios.get(BASE_URL);
		// the log here will happen on the server, you can check the console in your editor
		console.log(response.data);
		posts = response.data;
	} catch (error) {
		console.log(error);
	}

	// the props object we return here will become the props in the component
	return {
		props: {
			posts: posts,
		},
	};
}
```

Inside this `getStaticProps` function we are using `axios` to make the API call. The return value from the API can be found on the `response.data` property. Logging this value will display the results in your editor's terminal, not the browser. This is because this call is happening on the "server".

We return an object from the function with a property of `props` that will become the `props` object that gets passed into our `Index` component.

Change the Index component to accept `props` as an argument and this time when we use `console.log` the data will be displayed in the browser console, i.e. on the client side.

This is how `pages/index.js` will look now with the `about` link removed and a `map` over the `posts` prop to display each title:

```js
import React from "react";
import PropTypes from "prop-types";
import Head from "../components/head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Index(props) {
	return (
		<Layout>
			<Head title="Next Intro" />

			{props.posts.map((post) => {
				return <h3 key={post.id}>{post.title}</h3>;
			})}
		</Layout>
	);
}

export async function getStaticProps() {
	// in case there is an error in the API call
	// we'll send an empty array in as the prop
	let posts = [];

	try {
		const response = await axios.get(BASE_URL);
		// the log here will happen on the server, you can check the console in your editor
		console.log(response.data);
		posts = response.data;
	} catch (error) {
		console.log(error);
	}

	// the props object we return here will become the props in the component
	return {
		props: {
			posts: posts,
		},
	};
}
```

The complete code on this page can be found in the <a href="https://github.com/code-shmode/nextjs-intro" target="_blank">repo</a> in the `part-1` branch.

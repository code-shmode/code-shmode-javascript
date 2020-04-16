# Scrolling within a page in React

### Links

-   <a href="https://react-scroll-example.netlify.app/" target="_blank">Demo</a>
-   <a href="https://github.com/code-shmode/react-scroll-example" target="_blank">Repo</a>

This example uses `refs` and the native JavaScript method `scrollTo` to scroll between sections on a page.

Refs are references to the underlying native HTML elements (like div, button, input etc).

You can create them using the `useRef` hook:

```js
const refApp = useRef(null);
```

Then you attach them to an element using the ref prop.

<div className="App" ref={refApp}>

The `div` with the `class` `App` will now be avaialable on the `current` property of the `ref`:

````js
console.log(appRef.current);
// output: <div class="App"></div>

Once you have access to a DOM element via a ref, you can call native JavaScript methods and properties on it like `scrollTo`.

```js
appRef.current.scrollTo({ behavior: "smooth", top: 0 });
```

You should always use refs when trying to access DOM elements in React, rather than native methods like `document.querySelector` or `getElementById`. React creates and uses its own virtual DOM to build out the real DOM, and if you use native JS methods the elements you are trying to select may not be available yet in the real DOM.

The relevant code is in `src/App.js`, with all the CSS in `App.css`.
````

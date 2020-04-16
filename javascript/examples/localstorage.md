# Local Storage

If you need to share variables across web pages, or store data that can be retrieved when the browser shuts down and is re-opened, you can use `localStorage`.

---

<a href="https://localstorage-example.netlify.app/" target="_blank">Demo</a> of a variable being stored across pages using local storage.

Its repo is <a href="https://github.com/code-shmode/localstorage-example" target="_blank">here</a>.

---

To store a value in localStorage, use the `setItem` method:

```js
localStorage.setItem("myKey", "myValue");
```

The first argument to the `setItem` method ("myKey" above) is the name you want to store the value under.

The second argument ("myValue" above) is the value you want to store.

Both arguments must be strings.

The `getItem` method is used to retrieve by it's name.

```js
const key = localStorage.getItem("myKey");
console.log(key);
// output: myValue
```

The example above stores a string literal value of "myValue", but you can ofcourse store variables.

```js
const valueToStore = "elephant";
localStorage.setItem("animal", valueToStore);
```

Both the name and the value can be variables:

```js
const name = "animal";
const valueToStore = "elephant";
localStorage.setItem(name, valueToStore);
```

## Storing more complex values

`localStorage` only allows you to store string values.

If you want to store more complex values like arrays or objects, you can use `JSON.stringify` to convert the value to a string when using `setItem`, and `JSON.parse` to convert it back to its original value when using `getItem`.

Storing and retrieving an array:

```js
const colours = ["red", "green", "blue"];

// convert the colours array to a string
const colourString = JSON.stringify(colours);

// save colourString under the name "colours"
localStorage.setItem("colours", colourString);

// retrieve colourString
const savedColourString = localStorage.getItem("colours");

// convert the string back to an array
const colourArray = JSON.parse(savedColourString);
```

# Hoisting

Function declarations are "lifted up" - hoisted - by the JavaScript engine to the top of the code, no matter where they are written. This makes them available to be called from anywhere, including before they are declared.

In the code below, we can call the `doSomething` function before it's declared.

```js
aDeclaredFunction();

function aDeclaredFunction() {
	console.log("I am a declared function");
}
```

Function expressions are not hoisted, they are not lifted up from where they are written in the code, so you can't do this:

```js
aFunctionExpression();

const aFunctionExpression = function () {
	console.log("I am a function expression");
};
```

The above code produces the following error:

```js
Uncaught ReferenceError: Cannot access 'aFunctionExpression' before initialization
```

You need to create function expressions before you use them.

## Scope

`Scope` refers to where variables are available to be used.

There are three types of scope:

-   global scope
-   functional scope
-   block scope

## Global scope

Variables in the global scope are available from anywhere in the code. No matter where you are in the code you can access a global variable.

If you enter the following at the top of a script file or in the console

```js
const animal = "giraffe";
```

you have created a global variable. It is accessible from anywhere, including inside functions:

```js
// declare the variable in the global scope
const animal = "giraffe";

// declare the function
function scopeTest() {
	// try to access the animal variable
	// we can access the animal variable here because it was declared in the global scope
	console.log(animal);
}

scopeTest();
// giraffe

// we can access the animal variable here too
console.log(animal);
// giraffe
```

## Functional scope

Variables defined inside a function are only available to other code inside that function.

Let's move the `animal` variable declaration inside a function:

```js
function scopeTest() {
	const animal = "giraffe";
	// we can access the animal variable here as the code is inside the same function the variable was declared in
	console.log(animal);
}

scopeTest();
// giraffe

// we can NOT access the animal variable here
console.log(animal);
// Uncaught ReferenceError: animal is not defined
```

When we try to access `animal` from outside the function we get an `Uncaught ReferenceError` as the code outside the function does not have access to any variable declared inside the function.

## Block scope

`Blocks` are created by curly braces `{}`. The code inside the braces is considered to be inside a block, except when the braces form part of a function. Then the code is inside the function.

Examples of blocks created by braces can be found in `if statements` and `for loops`:

```js
if (true) {
	// this is inside a block
}

for (let i = 0; i < 5; i++) {
	// this is inside a block
}
```

Variables created inside a block with `const` and `let` have `block scope`, they are only available to code inside the block.

If we try to access a variable declared in a block from outside the block, we will get a `ReferenceError`.

```js
if (true) {
	const number = 4;
}

console.log(number);
// ReferenceError: number is not defined
```

This is not true of variables created with `var` - it's possible to access a variable created inside a function with `var` from outside the function:

```js
if (true) {
	var number = 4;
}

console.log(number);
// 4
```

Before `ES6` introduced `const` and `let`, there was no `block scope` in JavaScript.

Variables created inside if statements, loops and other blocks were [hoisted](../functions/hoisting) up to the top of the program and available to code everywhere.

This meant that all variables not declared inside a function were global variables.

Global variables are best avoided. Apart from being hoisted and loaded into memory before any code is executed (thereby slowing the loading time of your program) there is also the potential for variable name clashes and accidentally reassigning a value to a variable with the same name.

One way to avoid placing variables in the global scope is to use an [IFFE](../functions/iife).

Because variables declared inside a function are part of their own scope, developers often use the following pattern to avoid `polluting the global scope`, as it's known.

```js
(function () {
	const number1 = 8;
	var number2 = 10;
})();

console.log(number1);
console.log(number2);
```

Neither of the variables declared inside the function will be available outside its scope, avoiding name clashes and reassignment bugs.

`Block scoped` variables make your code less prone to bugs and you should use `const` and `let` rather than `var` for your variable declarations.

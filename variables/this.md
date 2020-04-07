# this

The `this` keyword is often a source of confusion to new JavaScript developers.

`this` refers to the `execution context` of the code.

`Execution context` is a fancy way of saying `where the code is running` and it refers to the object that is executing the current code.

Enter the following in a script file or directly in the console:

```js
console.log(this);
```

![console.log(this)](variables/console-log-this.png)

The `Window` object is returned. This is the global context or object and this is the object that is executing the code, in this case `console.log(this);`.

Inside a regular function belonging to an object, `this` will point to its parent object, as that is the object where the function is being called from:

```js
const myObject = {
	myFunction: function() {
		console.dir(this);
	}
};

myObject.myFunction();
```

<!-- <img src="/images/js1/object-function-this.png" alt="object function this" style="max-width:300px"> -->

Using `this` you can access other properties of the object. If the object above had another property called `number`, we could access its value by using `this.number`.

```js
const myObject = {
	number: 10,
	myFunction: function() {
		console.dir(this.number);
	}
};

myObject.myFunction();
// 10
```

This won't work if the function is an arrow function. The `this` keyword won't point to the object it's a property of, but will inherit the value of `this` from the parent code.

This means that whatever the value of `this` is in `myObject`'s scope will be the value of `this` inside the arrow function.

```js
console.dir(this);
// Window

const myObject = {
	myFunction: () => console.dir(this)
};

myObject.myFunction();
// Window
```

In the first statement - the console log - `this` points to the `Window` object.

Because that is the value of `this` in `myObject`'s scope (where `myObject` lives), this is the value of `this` inside the arrow function property of the object.

The regular function `binds` its `this` value to its parent object, but the arrow function does not rebind its `this` value, it inherits it from the parent code.

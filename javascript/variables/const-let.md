# `const` and `let`

`ES6` introduced the `const` and `let` keywords for declaring variables.

A key difference between `const` and `let` is that `let` can have its value reassigned, where as `const` cannot.

If we declare a variable using `const` and assign it a value:

```js
const count = 1;
```

we cannot reassign its value - we can't give it a different value.

We can't do this

```js
count = 2;
```

or this

```js
count = count + 1;
```

or this

```js
count = count++;
```

The above statements try to assign a new value to `count`. This will give us an `Assignment to const variable` error.

In `for loops` we increment the counting variable using, for example, `count++` or `i++` and we need to use `let` to declare the variable in those loops because we can assign a new value to a variable declared with `let`.

We can do this

```js
let count = 1;
count = 2;
count = count + 1;
count++;

let i = 0;
i++;
```

so we can use that kind of declaration in loops:

```js
for (let count = 0; count > 10; count++) {}
```

or

```js
for (let i = 0; i > 10; i++) {}
```

<!-- > A another diffrence between both `const` and `let` and `var` is how `scope` and `this` are handled. -->

There is no standard way to use these two keywords, and some documentation uses `let` or even `var` for all variables.

It is a very common practice, though, to use `const` for most variables and only use `let` when needed.

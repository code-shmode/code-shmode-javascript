# IIFE

IIFE stands for `I`nstantly `I`nvoked `F`unction `E`xpression.

In programming, `invoke` is another word for `call`.

Say we had this function expression:

```js
function() {
    console.log("Hi!");
}
```

To call a function we use round brackets - parenthesis - `()`, and we can call an anonymous function expression by wrapping it in round brackets and using parenthesis to call it:

```js
(function () {
	console.log("Hi!");
})();
```

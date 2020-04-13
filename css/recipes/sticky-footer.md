# Sticky footer

A sticky footer with flexbox.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head></head>
	<body>
		<div class="container">
			All the content apart from the footer
		</div>
		<footer>Footer</footer>
	</body>
</html>
```

### CSS

```css
html,
body {
	height: 100%;
}

body {
	display: flex;
	flex-direction: column;
}

.container {
	flex: 1 0 auto;
}

footer {
	flex-shrink: 0;
}
```

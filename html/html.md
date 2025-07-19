

---

````markdown
# 🧠 Pro HTML Master Note


## ✅ 1. HTML Boilerplate & Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pro HTML</title>
</head>
<body>

</body>
</html>
````

> ✔️ Always start with a semantic structure and use proper indentation.

---

## 🧱 2. Core Tags & Semantics

* Headings: `<h1>` to `<h6>`
* Paragraph: `<p>`
* Line break: `<br>`
* Horizontal rule: `<hr>`
* Comments: `<!-- This is a comment -->`

---

## 🔗 3. Links & Navigation

```html
<a href="https://example.com" target="_blank" rel="noopener">Visit Site</a>

<nav>
  <ul>
    <li><a href="#home">Home</a></li>
  </ul>
</nav>
```

> 🔐 Use `rel="noopener"` for better security with `target="_blank"`

---

## 🖼️ 4. Media: Images, Audio, Video

```html
<img src="image.jpg" alt="Description" />

<video controls>
  <source src="video.mp4" type="video/mp4" />
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mp3" />
</audio>
```

---

## 🧮 5. Lists

* **Ordered**:

```html
<ol>
  <li>Item 1</li>
</ol>
```

* **Unordered**:

```html
<ul>
  <li>Item 1</li>
</ul>
```

* **Description**:

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>
```

---

## 🧠 6. Forms & Inputs

```html
<form action="/submit" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <input type="submit" value="Send" />
</form>
```

> Types: `text`, `email`, `password`, `radio`, `checkbox`, `file`, `date`, `range`, etc.

---

## 🗃️ 7. Tables

```html
<table>
  <thead>
    <tr><th>Name</th></tr>
  </thead>
  <tbody>
    <tr><td>Sachin</td></tr>
  </tbody>
</table>
```

> Use `thead`, `tbody`, and `tfoot` for better accessibility and structure.

---

## 🧩 8. Semantic Elements

* `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`

> ✔️ Boosts SEO and accessibility.

---

## 🔍 9. Metadata & SEO Tags

```html
<meta name="description" content="Pro HTML Notes" />
<meta name="keywords" content="HTML, Web, Frontend" />
<meta name="author" content="Sachin Dey" />
```

---

## ♿ 10. Accessibility (a11y)

* Use `alt=""` for images
* Semantic tags help screen readers
* Use proper heading hierarchy (`<h1>` → `<h2>` → etc.)
* Add `aria-` attributes when necessary

---

## ⚙️ 11. Scripts & External Files

```html
<script src="script.js" defer></script>
<link rel="stylesheet" href="style.css" />
```

> 🕒 Use `defer` for better loading performance

---

## ✅ 12. Form Validation (Native HTML)

```html
<input 
  type="text" 
  required 
  minlength="3" 
  maxlength="10" 
  pattern="[A-Za-z]{3,10}" />
```

---

## 🌐 13. Iframe & Embed

```html
<iframe src="https://example.com" title="Iframe Example"></iframe>
<embed src="doc.pdf" type="application/pdf" />
```

---

## 🧾 14. Code Blocks, Quotes

```html
<code>console.log('Hello');</code>

<pre>
function greet() {
  return "Hello";
}
</pre>

<blockquote cite="https://developer.mozilla.org">
  MDN Web Docs is a great resource!
</blockquote>
```

---

## 🧰 15. Custom Data Attributes

```html
<div data-user-id="12345"></div>
```

> Useful with JavaScript for storing extra info

---

## 🚫 16. Deprecated Tags to Avoid

* `<font>`
* `<center>`
* `<marquee>`
* `<bgsound>`

---

## 🛠️ 17. HTML Tools & Resources

* ✅ [W3C HTML Validator](https://validator.w3.org/)
* 📘 [MDN HTML Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
* 🔧 [Can I use](https://caniuse.com/)

---

## 🧠 Summary

* HTML is the **structure** of every webpage.
* Always use **semantic tags**.
* Combine with **CSS & JS** for styling and interactivity.
* Prioritize **accessibility** and **clean code**.

---

Made with ❤️ by **Sachin Dey (SigmaCoder)**

```

---


```

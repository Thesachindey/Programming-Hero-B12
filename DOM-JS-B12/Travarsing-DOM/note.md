# DOM Notes - by TSC  

---

## 🌐 All About DOM  

### The 4 Pillars of DOM (DOM-এর ৪টি প্রধান অংশ)
1. Selection of elements (HTML থেকে এলিমেন্ট নির্বাচন)  
2. Changing HTML  
3. Changing CSS  
4. Event Listeners  

---

## 🔎 Selecting Elements  

### 1. `getElementById("")` – Select element by **ID**
```javascript
document.getElementById("idName");
```
➡ Returns **a single HTML element**.  

---

### 2. `getElementsByClassName("")` – Select elements by **Class Name**
```javascript
document.getElementsByClassName("className");
```
➡ Returns an **HTMLCollection** (array-like).  
- Access elements by index (starting from 0).  
- The collection is **live**, meaning it updates if the DOM changes.  

---

### 3. `getElementsByName("")` – Select elements by **Name Attribute**
```javascript
document.getElementsByName("inputName");
```
➡ Returns a **NodeList** of matching elements.  

---

### 4. `getElementsByTagName("")` – Select elements by **Tag Name**
```javascript
document.getElementsByTagName("h1");
```
➡ Returns an **HTMLCollection** of all matching elements.  

---

### 5. `querySelector()` and `querySelectorAll()` – Select using **CSS Selectors**

#### a) `document.querySelector("")`
```javascript
document.querySelector("#id");     // Selects first element with id
document.querySelector(".class");  // Selects first element with class
```
➡ Returns the **first matching element**.  

#### b) `document.querySelectorAll("")`
```javascript
document.querySelectorAll(".class"); // Selects all elements with class
```
➡ Returns a **NodeList** (can use `forEach` to loop).  

---

## 📖 Reference Links
- [JavaScript DOM Tutorial](https://www.javascripttutorial.net/javascript-dom/)  
- [W3Schools DOM](https://www.w3schools.com/js/js_htmldom_html.asp)  
- [CodeWithHarry – Window Object](https://www.codewithharry.com/tutorial/js-window-object/)  


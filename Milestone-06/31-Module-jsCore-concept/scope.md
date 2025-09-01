
---

## 📌 Compact Notes on **Scope in JavaScript**

### 🔹 English

1. **Scope** → Defines where variables are accessible.
2. **Types of Scope**:

   * **Global Scope** → Variables declared outside functions/blocks, accessible everywhere.
   * **Function Scope** → Variables declared inside a function, accessible only inside it.
   * **Block Scope** → `let` & `const` inside `{ }`, accessible only in that block.
   * **Lexical Scope** → Inner functions can access parent function variables.
3. **var vs let/const**:

   * `var` → Function-scoped (not block-scoped).
   * `let` & `const` → Block-scoped.

---

### 🔹 বাংলা

1. **Scope** → ভ্যারিয়েবল কোথায় ব্যবহার করা যাবে, সেটাই scope।
2. **Scope এর ধরন**:

   * **Global Scope** → function/block এর বাইরে declare করলে, সর্বত্র পাওয়া যাবে।
   * **Function Scope** → function এর ভিতরে declare করলে, শুধু সেই function এর ভিতরে পাওয়া যাবে।
   * **Block Scope** → `{ }` এর ভিতরে `let`/`const` দিয়ে declare করলে, শুধু সেই block এর ভিতরে পাওয়া যাবে।
   * **Lexical Scope** → inner function, parent function এর ভ্যারিয়েবল ব্যবহার করতে পারে।
3. **var বনাম let/const**:

   * `var` → শুধু function এর ভেতর সীমাবদ্ধ (block respect করে না)।
   * `let` & `const` → block respect করে, block এর বাইরে কাজ করবে না।

```js
if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); // ✅ 10 (because var is function-scoped)
console.log(y); // ❌ Error (let is block-scoped)
```
---

👉 This note is enough for **revision** before an interview or exam.


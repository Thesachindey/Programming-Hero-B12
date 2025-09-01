
---

## **JavaScript Data Types & Classification**

### **1. Primitive Data (7 types)** (Simple, single value)

* **Number** → 25, 3.14
  👉 সংখ্যা, ইন্টিজার ও দশমিক
* **String** → "Hello"
  👉 লেখা বা টেক্সট
* **Boolean** → true / false
  👉 সত্য/মিথ্যা মান
* **Null** → intentional empty
  👉 ইচ্ছাকৃত খালি
* **Undefined** → not assigned
  👉 মান দেওয়া হয়নি
* **Symbol** → unique identifier
  👉 অনন্য পরিচয়
* **BigInt** → very large integers
  👉 খুব বড় সংখ্যা

**Key Point:** Primitive types are **immutable** → cannot change their value directly.
👉 Primitive টাইপ immutable → সরাসরি পরিবর্তন করা যায় না।

---

### **2. Non-Primitive (Reference) Data (1 Types)** (Objects, multiple values)

* **Object** → { name: "Sachin" }
  👉 key-value জোড়া
* **Array** → \[1, 2, 3]
  👉 মানের লিস্ট
* **Function** → function() { }
  👉 callable block of code
* Others → Date, RegExp, Map, Set, etc.

**Key Point:** Non-primitive types are **mutable** → can be changed, accessed by reference.
👉 Non-primitive টাইপ mutable → পরিবর্তনযোগ্য, reference দিয়ে access করা হয়।

---

### **3. Quick Comparison Table**

| Feature       | Primitive                                                | Non-Primitive (Reference)               |
| ------------- | -------------------------------------------------------- | --------------------------------------- |
| Value Storage | Single value                                             | Multiple values / object                |
| Mutable       | No                                                       | Yes                                     |
| Access        | By value                                                 | By reference                            |
| Examples      | Number, String, Boolean, Null, Undefined, Symbol, BigInt | Object, Array, Function, Map, Set, Date |

---

### **4. Summary**

**English:**

* JS has **Primitive** (immutable, single value) and **Non-Primitive** (mutable, reference) types.
* Primitive: Number, String, Boolean, Null, Undefined, Symbol, BigInt
* Non-Primitive: Object, Array, Function, Map, Set, Date

**Bangla:**

* জাভাস্ক্রিপ্টে আছে **Primitive** (immutable, একক মান) এবং **Non-Primitive** (mutable, reference) টাইপ।
* Primitive: Number, String, Boolean, Null, Undefined, Symbol, BigInt
* Non-Primitive: Object, Array, Function, Map, Set, Date

---



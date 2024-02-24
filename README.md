# Learn-JavaScript
Learning Javascript on YouTube


# 1. What are the different data types in JavaScript? (Number, String, Boolean, Object, etc.)

JavaScript has several fundamental data types:

#### Number: Represents numerical values (integers, floating-point numbers).
#### String: Represents sequences of characters (text).
#### Boolean: Represents logical values (true or false).
#### Object: Stores collections of key-value pairs.
#### Array: Ordered lists of values, accessed by index.
#### Function: Reusable blocks of code that perform actions.
#### Undefined: Represents a variable with no assigned value.
#### Null: Represents the intentional absence of a value.
#### Symbol: Unique and immutable identifiers.

## 2. How do you declare a variable in JavaScript? (Using var, let, or const?)

You can declare variables using var, let, or const:

var: Old-school declaration, has scope issues, avoid using it nowadays.
let: Modern declaration, block-scoped (usable within specific code blocks).
const: Modern declaration, immutable (value cannot be changed after assignment).
3. What is the difference between var, let, and const?

Scope: var is globally or function-scoped, let and const are block-scoped.
Reassignment: var and let can be reassigned, const cannot.
4. How do you write comments in JavaScript?

Single-line comments: // This is a single-line comment
Multi-line comments: /* This is a multi-line comment */
5. What is an operator? Give examples of different types of operators (arithmetic, comparison, logical).

Operators perform operations on values. Common types include:

Arithmetic: +, -, *, /, % (modulo)
Comparison: ==, === (strict equality), !=, !== (strict inequality), <, >, <=, >=
Logical: && (and), || (or), ! (not)
6. What is a conditional statement? (e.g., if, else if, else)

Conditional statements control program flow based on conditions:

JavaScript
if (condition) {
  // Code to execute if condition is true
} else if (anotherCondition) {
  // Code to execute if condition is false but anotherCondition is true
} else {
  // Code to execute if all conditions are false
}
Use code with caution.
7. What is a loop? (e.g., for, while)

Loops repeatedly execute a block of code:

for: Loops a specific number of times based on a counter.
while: Loops as long as a condition is true.
do...while: Similar to while, but the loop body executes at least once.
8. How do you access elements in an array?

Use the index of the element:

JavaScript
const myArray = ["apple", "banana", "cherry"];
const firstElement = myArray[0]; // "apple"
Use code with caution.
9. How do you create and access properties of an object?

Use dot notation or bracket notation:

JavaScript
const person = { name: "John", age: 30 };
const name = person.name; // "John"
const age = person["age"]; // 30
Use code with caution.
10. What is the difference between == and ===?

==: Loose equality, compares values after type coercion (e.g., "1" == 1 is true).
===: Strict equality, compares both value and type (e.g., "1" === 1 is false).
DOM Manipulation:

11. How do you select an element by its ID in JavaScript?

JavaScript
const element = document.getElementById("myElementId");
Use code with caution.
12. How do you change the text content of an element?

JavaScript
element.textContent = "New text content";
Use code with caution.
13. How do you add or remove CSS classes to an element?

JavaScript
element.classList.add("myClass"); // Add class
element.classList.remove("myClass"); // Remove class
Use code with caution.
14. How do you listen for events (e.g., click, hover) on an element?

JavaScript
element.addEventListener("click", function() {
  // Code to execute on click
// ------------------- Operators ------------------------

// Comma Operators
// Used to evaluate multiple expressions and return the last one.
let a = (1, 2, 3); // `a` will be 3
console.log(a);

// Unary Operators
// Operate on a single operand (e.g., `++`, `--`, `typeof`).
let b = 5;
b++; // Increment `b` by 1
console.log(typeof b); // "number"

// Relational Operators
// Compare two values (e.g., `<`, `>`, `<=`, `>=`).
console.log(3 > 2); // true

// Assignment Operators
// Used to assign values (e.g., `=`, `+=`, `-=`).
let c = 10;
c += 5; // c = c + 5

// Comparison Operators
// Compare two values and return true/false (e.g., `==`, `===`, `!=`, `!==`).
console.log(2 == "2"); // true (loose comparison)
console.log(2 === "2"); // false (strict comparison)

// Arithmetic Operators
// Perform mathematical operations (e.g., `+`, `-`, `*`, `/`).
let d = 10 + 5; // Addition
let e = 10 * 5; // Multiplication

// Bitwise Operators
// Perform bit-level operations (e.g., `&`, `|`, `^`, `~`).
console.log(5 & 1); // Bitwise AND -> 1

// Logical Operators
// Used for logical operations (e.g., `&&`, `||`, `!`).
console.log(true && false); // false
console.log(!true); // false

// BigInt Operators
// Used to perform operations on large numbers using `BigInt`.
let bigNum = BigInt(9007199254740991) + BigInt(1);

// Conditional Statements
// Statements that run based on a condition (e.g., `if`, `switch`, ternary `? :`).
let age = 18;
age >= 18 ? console.log("Adult") : console.log("Minor");

// Expressions & Operators
// An expression produces a value; operators act on values (e.g., `+`, `-`, `*`).
let x = 5 * 10; // This is an expression

// String Operators
// Combine or manipulate strings (e.g., `+`, `+=`).
let f = "Hello" + " World"; // Concatenation

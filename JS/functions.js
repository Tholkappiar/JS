// ---------------------- FUNCTIONS -------------------------

// A function is a reusable block of code designed to perform a task or calculate a value.
// Functions are defined with the `function` keyword, followed by a name, and then the code block.

// 1. Function Declaration
// This is the basic way to define a function.
function sayHello() {
    console.log("Hello!");
}

// You can call or invoke the function using its name followed by parentheses:
sayHello(); // Output: Hello!

// 2. Parameters and Arguments
// Functions can accept input values, known as parameters.
function greet(name) {
    // 'name' is a parameter.
    console.log("Hello, " + name);
}

// When calling the function, you pass arguments (actual values).
greet("Thor"); // Output: Hello, Thor

// 3. Return Statement
// Functions can return a value back to the code that called them.
function add(a, b) {
    return a + b; // The `return` keyword outputs a value and exits the function.
}

let sum = add(5, 3); // sum gets the returned value (8).
console.log(sum); // Output: 8

// 4. Function Expressions
// Functions can also be defined and stored as variables. This is called a function expression.
const multiply = function (x, y) {
    return x * y;
};

console.log(multiply(2, 3)); // Output: 6

// 5. Arrow Functions (ES6)
// A shorter syntax for writing functions. Great for simple functions.
const subtract = (x, y) => x - y; // No need for `function` keyword or return statement for one-liners.

console.log(subtract(5, 2)); // Output: 3

// 6. Default Parameters
// You can set default values for parameters if the argument is not provided.
function greetWithDefault(name = "Stranger") {
    console.log("Hello, " + name);
}

greetWithDefault(); // Output: Hello, Stranger

// 7. Rest Parameters (...)
// You can pass an indefinite number of arguments using rest parameters.
function sumAll(...numbers) {
    // The '...' syntax collects all arguments into an array.
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10

// 8. IIFE (Immediately Invoked Function Expression)
// A function that is defined and executed immediately.
(function () {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!

// 9. Closures
// A closure is a function that has access to its outer function's scope, even after the outer function has returned.
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const newFunction = outerFunction("Outer Value");
newFunction("Inner Value"); // Output: Outer: Outer Value, Inner: Inner Value

// 10. Callback Functions
// A callback is a function passed into another function as an argument, which can be executed later.
function processUserInput(callback) {
    const name = "Thor";
    callback(name);
}

processUserInput(greet); // Output: Hello, Thor

// 11. Higher-Order Functions
// Functions that take other functions as arguments or return them are called higher-order functions.
function higherOrder(fn) {
    return function (value) {
        return fn(value);
    };
}

const double = higherOrder(function (x) {
    return x * 2;
});

console.log(double(5)); // Output: 10

// 12. Pure Functions
// A function that, given the same inputs, always returns the same output and has no side effects.
function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3)); // Output: 5

// 13. Recursion
// A recursive function calls itself until it reaches a base case to stop.
function factorial(n) {
    if (n === 0) return 1; // Base case to stop recursion
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

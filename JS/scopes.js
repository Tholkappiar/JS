// ------------------- Scopes --------------------

/*
    Types - 
        Global Scope
        Function Scope
        Block Scope
        Module Scope

    Extra - Lexical Scope, Scope Chain
*/

// Global Scope - not within any functions or blocks, and can be accessed anywhere
let globalVar = "tony";

// Function Scope - var is function-scoped, meaning even when declaring the variable inside the block,
// the variable can be accessed in the function where the block is present.

function functionScope() {
    if (true) {
        var name = "Stark";
    }
    console.log(name); // accessible because var is function-scoped
}

// Block Scope - let and const are block-scoped, the declared variables in the blocks can't be accessed
// outside that block

function blockScope() {
    if (true) {
        let Name = "Iron Man";
        console.log(Name); // can be only accessed here
    }
    console.log(Name); // ReferenceError: Name is not defined
}

// Module Scope - Variables from the modules are only accessible when exported and imported.
// export const name = "someone";
// import { name } from './myModule.mjs';

// Lexical Scope - The scope where the function is defined determines its access to variables,
// even if the function is called from a different context. Inner functions can access variables from outer functions (closure).

let lex1 = 10;
function outerFunction() {
    let lex2 = 20;
    function innerFunction() {
        console.log(lex1 + lex2); // Can access lex1 from the global scope and lex2 from outerFunction
    }
    innerFunction(); // Outputs 30
}
outerFunction();

// Scope Chaining - A process where JavaScript tries to find a variable in the current scope,
// if not found, it goes up one level in the scope chain (lexical environment), and continues until it finds the variable or hits the global scope.

let a = 1;

function outer() {
    let b = 2;

    function inner() {
        let c = 3;
        console.log(a, b, c); // Accesses variables from the inner, outer, and global scopes (scope chain)
    }

    inner();
}
outer(); // Outputs: 1 2 3

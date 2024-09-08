/*

    var - function scoped 
    let and const - block scoped 

    var - gives undefined on hoisting
    let and const - returns the error 

    var and let - can be reassgined
    const - can't be reassigned 

    const - if it is an object we can change the properties. 
*/

//  ----------------- Scope Diff ---------------------
function functionScope() {
    if (true) {
        var a = 4;
    }
    console.log(a);
}

// a - not defined
function blockScope() {
    if (true) {
        let a = 10;
    }
    console.log(a);
}

// -------------------- Hositing Diff -----------------------

// undefined
// console.log(a);
var a = 5;

// reference error - can't access before initialization
// console.log(b);
let b = 4;

// ----------------------  Assignment Diff ---------------------

// var can be redeclared and reassgined
var a = 10;
var a = 20;
a = 40;
// console.log(a);

// let can be reassgined but not redeclared
let c = 10;
c = 30;

// const can't be redeclared and reassigned and but must intialized
const d = 10;

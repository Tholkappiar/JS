// ---------------- Hoisting -----------------

console.log(a); // results undefined coz of the var
var a = 10;

console.log(b); // Cannot access 'b' before initialization
console.log(c); // Cannot access 'c' before initialization

let b = 10;
let c = 10;

hoistingFunction(); // the function is hoisted
function hoistingFunction() {
    console.log("inside function");
}

// ---------------- Temporal Dead Zone ---------------

// TDZ indicates the period between the beginning of the
// variable's scope and its declaration where accessing the variable causes a ReferenceError.

// TDZ only occurs for let and const variables not for var variables , hoisting the var variable results in undefined
// whereas for let and const it'll say " Cannot access before initialization "

console.log(d); // TDZ starts
// TDZ
// TDZ
// TDZ
let d = 10; // TDZ Ends

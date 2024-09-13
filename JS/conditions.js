// ------------------ Conditions and Exception Handling -------------------

/* 
    Use if to specify a block of code to be executed, if a specified condition is true
    Use else to specify a block of code to be executed, if the same condition is false
    Use else if to specify a new condition to test, if the first condition is false
    Use switch to specify many alternative blocks of code to be executed
*/

if (true) {
    console.log("Inside if");
} else if (condition == someCondition) {
    console.log("Inside else if");
} else {
    console.log("Inside else");
}

let hero = "Iron Man";

switch (hero) {
    case "Captain":
        console.log("Captain");
        break;
    case "Iron Man":
        console.log("Iron Man");
        break;
    default:
        console.log("default");
}

/*  
    The try statement defines a code block to run (to try).
    The catch statement defines a code block to handle any error.
    The finally statement defines a code block to run regardless of the result.
    The throw statement defines a custom error.
*/

let x = 10;
try {
    x = y + x;
} catch (e) {
    console.log(e);
} finally {
    console.log("finally executed");
}

try {
    throw "userdefined";
} catch (e) {
    console.log(e);
} finally {
    console.log("finally executed 2");
}

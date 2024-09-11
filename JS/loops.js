// ------------------ Loops ------------------

/* 
| Loop Type     | Iterable On           | Allows break/continue | Description                                                                  |
|---------------|-----------------------|-----------------------|------------------------------------------------------------------------------|
| for           | Arrays, Strings, etc. | Yes                   | A traditional loop that runs a fixed number of times based on a condition.   |
| for...of      | Arrays, Strings, Sets,| Yes                   | Iterates over the values of an iterable like arrays or strings.              |
|               | Maps, etc.            |                       |                                                                              |
| for...in      | Objects, Arrays       | Yes                   | Iterates over the enumerable properties (keys) of an object or array index.  |
| while         | Any condition         | Yes                   | Continues as long as the condition is true.                                  |
| do...while    | Any condition         | Yes                   | Executes at least once, then continues while the condition is true.          |
| forEach       | Arrays                | No                    | Calls a function for each array element. Cannot use break/continue.          |
| for await...of| Async Iterables       | Yes                   | Used for asynchronous iteration over objects that return promises.           |
*/

// Normal For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let j = 5;
while (j > 0) {
    console.log(j);
    j--;
}

// Do - While Loop
let k = 5;
do {
    console.log(k);
    k--;
} while (k < 0);

// For - in Loop  => for both Objects and Arrays
let user = {
    firstName: "Tony",
    lastName: "stark",
    hero: "Iron Man",
};
for (let key in user) {
    console.log(user[key]);
}

// For - of Loop  => similiar to for-each loop but no callbacks, can use break and continue
let arr = ["yellow", "Red", "pink"];
for (let element of arr) {
    console.log(element);
}

// For - each Loop  => can't use break and continue
arr.forEach((element, index) => console.log(element + " index : " + index));

//  ------------------ Array Destructuring and Spread Operator -----------------

// Array destructuring: Extract values from an array into variables.
const array = ["captain", "tony", "hulk", "Nat"];
const [first, second, ...rest] = array;
// `first` gets "captain", `second` gets "tony", and `rest` gets ["hulk", "Nat"]

console.log(first); // "captain"
console.log(second); // "tony"
console.log(rest); // ["hulk", "Nat"]

// Spread operator in arrays: Combine elements or create new arrays.
const numbers = [1, 2, 3];
const moreNumbers = [0, ...numbers, 4, 5];
// `moreNumbers` is [0, 1, 2, 3, 4, 5]

console.log(moreNumbers); // [0, 1, 2, 3, 4, 5]

// Spread operator in objects: Copy or merge objects.
const Thor = {
    firstName: "Thor",
    lastName: "Odin",
    hero: "Thor",
    power: ["lightning", "strength", "age"],
};

const IronMan = {
    firstName: "Tony",
    lastName: "Stark",
    hero: "Iron Man",
    power: ["Intelligence", "Suit"],
};

// Combine objects into an array
const Heros = [{ ...Thor }, { ...IronMan }];
// `Heros` is an array of the two hero objects

console.log(Heros);

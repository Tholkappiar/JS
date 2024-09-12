// --------------- == vs === vs Object.is -------------------

// `==` (Loose Equality)
// - Compares values after type conversion (coercion), meaning different types can be considered equal.
console.log(2 == "2"); // true -> '2' is converted to number before comparison
console.log(false == 0); // true -> false is converted to 0
console.log(null == undefined); // true -> treated as equal

// `===` (Strict Equality)
// - Compares values without type conversion. Both value and type must be the same.
console.log(2 === "2"); // false -> different types (number and string)
console.log(false === 0); // false -> different types (boolean and number)
console.log(null === undefined); // false -> different types

// `Object.is()` (Strict comparison with special cases)
// - Similar to `===` but handles edge cases like `NaN` and `-0/+0` differently.
console.log(Object.is(NaN, NaN)); // true -> Unlike `===`, `Object.is` treats NaN as equal to NaN
console.log(NaN === NaN); // false -> In `===`, NaN is not equal to NaN

console.log(Object.is(+0, -0)); // false -> `Object.is` treats +0 and -0 as different
console.log(+0 === -0); // true -> `===` treats +0 and -0 as the same

// Summary:
// - `==` allows type conversion (loose equality).
// - `===` requires both type and value to be the same (strict equality).
// - `Object.is()` is like `===` but correctly handles `NaN` and distinguishes between `+0` and `-0`.

// ------------------ JSON -------------------

// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent

// Rules
/* 
    Keys must be strings
    Data is in key-value pairs
    Values can be several data types
    Arrays can contain multiple types
    Objects must be enclosed in curly braces
    No trailing commas
    Strings must be in double quotes
    Numbers are written without quotes
*/

// JS Object
let user1 = [
    {
        firstName: "Tony",
        lastName: "Stark",
        hero: "Iron Man",
    },
    {
        firstName: "Steve",
        lastName: "rogers",
        hero: "Captain America",
    },
];

// Actual JSON
/* 
[
    {
        "firstName": "Tony",
        "lastName": "Stark",
        "hero": "Iron Man"
    },
    {
        "firstName": "Steve",
        "lastName": "rogers",
        "hero": "Captain America"
    },
    {
        "organisms": ["human", "alien"]
    }
]
*/

let stringifiedData = JSON.stringify(user1);
console.log(stringifiedData);
let parsedData = JSON.parse(stringifiedData);
console.log(parsedData.organism);

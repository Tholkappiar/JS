// ------------------- Type casting ----------------

/*  Type coercion - is the automatic or implicit conversion of values 
    from one data type to another (such as strings to numbers).
    
    Type conversion - can be either implicit or explicit.
*/

// Original Value     | Converted to Number | Converted to String | Converted to Boolean
// -------------------------------------------------------------------------------------
// false              | 0                   | "false"             | false
// true               | 1                   | "true"              | true
// 0                  | 0                   | "0"                 | false
// 1                  | 1                   | "1"                 | true
// "0"                | 0                   | "0"                 | true
// "000"              | 0                   | "000"               | true
// "1"                | 1                   | "1"                 | true
// NaN                | NaN                 | "NaN"               | false
// Infinity           | Infinity            | "Infinity"          | true
// -Infinity          | -Infinity           | "-Infinity"         | true
// ""                 | 0                   | ""                  | false
// "20"               | 20                  | "20"                | true
// "twenty"           | NaN                 | "twenty"            | true
// []                 | 0                   | ""                  | true
// [20]               | 20                  | "20"                | true
// [10,20]            | NaN                 | "10,20"             | true
// ["twenty"]         | NaN                 | "twenty"            | true
// ["ten","twenty"]   | NaN                 | "ten,twenty"        | true
// function(){}       | NaN                 | "function(){}"      | true
// {}                 | NaN                 | "[object Object]"   | true
// null               | 0                   | "null"              | false
// undefined          | NaN                 | "undefined"         | false

// ------------------------ DATE -----------------------------

// 1. Creating a Date Object
// JavaScript has a built-in `Date` object for working with dates and times.

const now = new Date(); // Creates a new Date object with the current date and time.
console.log(now); // Outputs the current date and time (e.g., 2024-09-13T10:15:30Z)

// 2. Specific Date
// You can create a Date object for a specific date by passing year, month, day, etc.
const specificDate = new Date(2024, 8, 13); // Months are zero-indexed (0 = January, 8 = September)
console.log(specificDate); // Output: September 13, 2024

// 3. Date String
// You can also pass a date string to create a Date object.
const dateFromString = new Date("2024-09-13T12:00:00");
console.log(dateFromString); // Output: 2024-09-13T12:00:00.000Z

// 4. Timestamps
// The Date object can be created using a timestamp (milliseconds since January 1, 1970).
const timestamp = new Date(0); // 0 means the start of 1970.
console.log(timestamp); // Output: 1970-01-01T00:00:00.000Z

// 5. Getting Parts of a Date
// You can retrieve specific parts of a Date object using various methods.

console.log(now.getFullYear()); // Gets the year (e.g., 2024)
console.log(now.getMonth()); // Gets the month (0 = January, so September = 8)
console.log(now.getDate()); // Gets the day of the month (1-31)
console.log(now.getDay()); // Gets the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
console.log(now.getHours()); // Gets the hour (0-23)
console.log(now.getMinutes()); // Gets the minutes (0-59)
console.log(now.getSeconds()); // Gets the seconds (0-59)
console.log(now.getMilliseconds()); // Gets the milliseconds (0-999)

// 6. Setting Parts of a Date
// You can also modify parts of a date.
now.setFullYear(2025); // Sets the year to 2025
now.setMonth(11); // Sets the month to December (11 = December)
now.setDate(25); // Sets the day of the month to 25
console.log(now); // Output: The modified date (December 25, 2025)

// 7. Date Formatting
// You can convert a date to a readable string in various formats.

console.log(now.toDateString()); // Outputs a human-readable date (e.g., "Fri Dec 25 2025")
console.log(now.toISOString()); // Outputs ISO string format (e.g., "2025-12-25T12:00:00.000Z")
console.log(now.toLocaleDateString()); // Outputs the date in the local format (e.g., "12/25/2025" for US)
console.log(now.toLocaleTimeString()); // Outputs the time in the local format (e.g., "12:00:00 PM")

// 8. Time Difference Between Dates
// You can calculate the difference between two dates in milliseconds.
const startDate = new Date("2024-09-13T00:00:00");
const endDate = new Date("2024-09-14T00:00:00");

const timeDiff = endDate - startDate; // Subtracting dates gives a difference in milliseconds
console.log(timeDiff); // Output: 86400000 milliseconds (1 day)

// 9. Converting Time Difference
// You can convert the time difference into days, hours, minutes, etc.

const millisecondsInADay = 24 * 60 * 60 * 1000; // 86,400,000 milliseconds in a day
const daysDiff = timeDiff / millisecondsInADay;
console.log(daysDiff); // Output: 1 day

// 10. Working with UTC Dates
// Dates can also be handled in UTC format (Universal Coordinated Time).

console.log(now.getUTCFullYear()); // Gets the year in UTC
console.log(now.getUTCHours()); // Gets the hours in UTC

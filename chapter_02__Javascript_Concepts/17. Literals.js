let name = "Shalini"; // This is a string literal
let age = 25; // This is a number literal
let isStudent = true; // This is a boolean literal
let pi = 3.14; // This is a number literal
let hobbies = ["reading", "traveling", "coding"]; // This is an array literal
let person = { name: "Shalini", age: 25 }; // This is an object literal
let isNull = null; // This is a null literal
let isUndefined; // This is an undefined literal
let greeting = `Hello, my name is ${name} and I am ${age} years old.`; // This is a template literal

//real life exmaple for template literal
let env = "staging";
const userID = 12345;
const APIurl = `https://api.example.com/${env}/users/${userID}`; // This is a template literal

// undefined vs null
// -----------------
// undefined = "no value assigned yet" (JS gives it automatically)
// null      = "developer says this intentionally has no value"

let a; // undefined
let b = null; // null

typeof a; // "undefined"
typeof b; // "object"   <- the famous JS bug
a == null; // true       (loose equality treats them the same)
a === null; // false      (strict equality does not)

// Quick rules:
// - undefined -> never assigned a value, missing param, missing property (obj.x), void 0
// - null      -> explicitly emptied, "I know there's nothing here"
// - Prefer null when you want to clear a value deliberately
// - Prefer undefined for "not set yet"
// - Always compare with === (so null doesn't accidentally match undefined)




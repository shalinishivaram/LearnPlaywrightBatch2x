//JS engine
// Line by Line, JIT compliation

console.log(greet);
var greet = "Hello";
console.log(greet);

//Behind the scenes, JS engine does this
// var greet;    --> hoisted with undefined
// console.log(greet);  --> undefined
// greet = "Hello";  --> assignment stays in place
// console.log(greet); --> "Hello"

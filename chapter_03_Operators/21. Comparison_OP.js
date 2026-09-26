// Comparison operators are used to compare two values and return a boolean result (true or false). Here are some common comparison operators in JavaScript:
// Comparison Operators
let x = 10;
let y = 5;
console.log(x > y); // 10>5 Output: true
console.log(x < y); // 10<5 Output: false
console.log(x >= y); // 10>=5 Output: true , uses OR GATE either greater than or equal to
console.log(x <= y); // 10<=5 Output: false
console.log(x == y); // 10==5 Output: false
console.log(x === y); // 10===5 Output: false
console.log(x != y); // 10!=5 Output: true
console.log(x !== y); // 10!==5 Output: true

//Interview QUESTIONS

console.log(0 == "") // 0 == "" Output: true because it is a loose comparison, it converts the empty string to 0 before comparing
console.log(0 === "") // 0 === "" Output: false because it is a strict comparison, it does not convert the empty string to 0 before comparing
console.log(0 == "0") // 0 == "0" Output: true because it is a loose comparison, it converts the string "0" to 0 before comparing
console.log(0 === "0") // 0 === "0" Output: false because it is a strict comparison, it does not convert the string "0" to 0 before comparing

//Transitivity broken javascript
console.log("" == "0") // "" == "0" Output: false because it is a loose comparison, it does not convert the string "0" to an empty string before comparing
console.log("" === "0") // "" === "0" Output: false because it is a strict comparison, it does not convert the string "0" to an empty string before comparing
console.log(0 == false) // 0 == false Output: true because it is a loose comparison, it converts the boolean false to 0 before comparing
console.log("" == "0") // "" == "0" Output: false because it is a loose comparison, it does not convert the string "0" to an empty string before comparing
console.log("" === "0") // "" === "0" Output: false because it is a strict comparison, it does not convert the string "0" to an empty string before comparing
console.log(0 == false) // 0 == false Output: true because it is a loose comparison, it converts the boolean false to 0 before comparing



console.log(true == 1) //  Output: true because it is a loose comparison, it converts the boolean true to 1 before comparing
console.log(true === 1) //  Output: false because it is a strict comparison, it does not convert the boolean true to 1 before comparing
console.log(false == 0) //  Output: true because it is a loose comparison, it converts the boolean false to 0 before comparing
console.log(false === 0) // Output: false because it is a strict comparison, it does not convert the boolean false to 0 before comparing
console.log(true == "1") // Output: true because it is a loose comparison, it converts the string "1" to 1 before comparing
console.log(true === "1") // Output: false because it is a strict comparison, it does not convert the string "1" to 1 before comparing
console.log(false == "") //  Output: true because it is a loose comparison, it converts the empty string to 0 before comparing
console.log(false === "") // Output: false because it is a strict comparison, it does not convert the empty string to 0 before comparing

console.log(false == null) // Output: false, because it is a loose comparison, it does not convert null to 0 before comparing
console.log(false === null) //  Output: false because it is a strict comparison, it does not convert null to 0 before comparing
console.log(false == undefined) // Output: false because it is a loose comparison, it does not convert undefined to 0 before comparing
console.log(false === undefined) // Output: false because it is a strict comparison, it does not convert undefined to 0 before comparing    

console.log(true == 2) // Output: false, because it is a loose comparison, it converts the boolean true to 1 before comparing
console.log(true === 2) // Output: false, because it is a strict comparison, it does not convert the boolean true to 1 before comparing
console.log(false == -1) // Output: false, because it is a loose comparison, it converts the boolean false to 0 before comparing
console.log(false === -1) // Output: false, because it is a strict comparison, it does not convert the boolean false to 0 before comparing

console.log(null == undefined) // Output: true because it is a loose comparison, it considers null and undefined to be equal
console.log(null === undefined) // Output: false because it is a strict comparison, it does not consider null and undefined to be equal  


// = is the assignment operator, (puts a variable into the variable)
// == is the equality operator, loose comparison (compares two values for equality, ignoring their data types)
// === is the strict equality operator, strict comparison (compares two values for equality, considering their data types)
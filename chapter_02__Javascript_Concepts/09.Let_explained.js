//let - Block scoped, can be reassigned but cannot be redeclared in the same scope. It is recommended to use let instead of var in modern JS.

let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry Count:", retryCount); // Output: Retry Count: 2

// let retryCount = 5; // This will throw an error because 'retryCount' has already been declared in the same scope.
//SyntaxError: Identifier 'retryCount' has already been declared

let testStatus = "pending";
if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside Block:", executionTime); // Output: Inside Block: 1200
}

//console.log("Outside Block:", executionTime); // This will throw an error because 'executionTime' is not accessible outside the block.
//ReferenceError: executionTime is not defined

//{} --> Block
//if(){} --> Block
//function name(){} -- Block


//let is block scoped, can be reassigned but cannot be redeclared in the same scope. It is recommended to use let instead of var in modern JS.

//let = loyal


// const = Blocked scoped, cannot be reassigned or redeclared
const BASE_URL = "https://api.example.com";

//Redeclaration 
//const BASE_URL = "https://api.example.com"; // This will throw an error because 'BASE_URL' has already been declared in the same scope.
//SyntaxError: Identifier 'BASE_URL' has already been declared

//Reassignment
//BASE_URL = "https://api.newexample.com"; // This will throw an error because 'BASE_URL' is a constant and cannot be reassigned.
//TypeError: Assignment to constant variable.

//block scope
const name = "Shalini";
{
   const name = "Joey";
   console.log("Inside Block:", name); // Output: Inside Block: Joey
}
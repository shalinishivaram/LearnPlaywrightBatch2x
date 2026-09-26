console.log(c); // ReferenceError: Cannot access 'c' before initialization
//--TDZ for "c" STARTS HERE----
console.log("Hi");
console.log("Hii");
console.log("Hiii");
console.log("Hiiii");
//--TDZ for "c" ENDS HERE----
const c = 100; // Declaration and initialization of the variable c
console.log(c); // Output: 100 (Safe to access)


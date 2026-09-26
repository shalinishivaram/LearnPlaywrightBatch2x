console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100;

//--------- TDZ for "score" STARTS HERE---------
// TDZ (Temporal Dead Zone) is a behavior in JavaScript that occurs when you try to access a variable before it has been declared and initialized. In this case, the variable score is declared using let, which means it is block-scoped and cannot be accessed before its declaration. When you try to log the value of score before it has been initialized, you will get a ReferenceError indicating that you cannot access 'score' before initialization. This is because the variable is in the TDZ until it is declared and initialized.
// console.log(score); // ReferenceError
//score = 100; // ReferenceError
// typeof score; // ReferenceError
//--------- TDZ for "score" ENDS HERE---------
let score1 = 100; // Declaration and initialization of the variable score
console.log(score1); // Output: 100(Safe to access)


// let hoisting in Block scope

let x = "global";
if (true) {
    //console.log(x); // ReferenceError: Cannot access 'x' before initialization
    //--TDZ for "x" STARTS HERE----
    
    
    
    let x = "block";
    console.log(x); // Output: block
}
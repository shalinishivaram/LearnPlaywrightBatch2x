getUserStatus();

function getUserStatus() {
    //var status_code, JS engine(optimized the code)
    console.log(status_code); //undefined, because of hoisting
    var status_code = "active";
    console.log(status_code);
}
getUserStatus();

//Note: var is function scoped, so the variable status_code is hoisted within the function scope.
//the top of the getUserStatus, not the global variable.
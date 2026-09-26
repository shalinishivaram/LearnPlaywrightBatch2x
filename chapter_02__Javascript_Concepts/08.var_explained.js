var a = 10;

console.log(a); //global variable

function greet() {  //var is functioned scoped
    console.log("Hello, Shalini!");
    var a = 20;
    console.log(a);  // This will log the local variable 'a' which is 20. local scope has the highest priority than global scope.    
    if (true) {
        var a = 30;
        console.log(a);  // This will log the local variable 'a' which is 30. local scope has the highest priority than global scope.
    }
}


if (true) {
    var b = 40;
    console.log(b);  // This will log the local variable 'b' which is 40. local scope has the highest priority than global scope.
}


greet();
console.log(a); //global variable

//var can be redeclared, reassigned and function scoped

//var == dual faced, not trust worthy, can be redeclared, reassigned and function scoped. It is not block scoped. It is not recommended to use var in modern JS. Use let and const instead.
var a= 10;
console.log(a); //global variable

function greet() {  //var is functioned scoped
    console.log("Hello, Shalini!");
    var a = 20;// local scope
    console.log(a);
    if (true) {
        var a = 30; // local scope
        console.log(a);
    }
    console.log("F-->", a); // local scope
}
console.log("G-->", a); //global variable
greet();
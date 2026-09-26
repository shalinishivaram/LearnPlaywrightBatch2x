let a = 10;
console.log(a); //global variable

function greet() {  //let is block scoped
    console.log("Hello, Shalini!");
    let a = 20;// local scope
    console.log(a);
    if (true) {
        let a = 30; // local scope
        console.log(a);
    }
    console.log("F-->", a); // local scope
}
console.log("G-->", a); //global variable
greet();
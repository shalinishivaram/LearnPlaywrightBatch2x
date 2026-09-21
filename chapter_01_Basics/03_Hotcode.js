console.log("Hello"); // no need for optimization 



//Needs optimization as it runs the loop multiple times
function add(a,b) {
    return a+b;
}
let result;
for(let i=0; i<10000; i++)
{
    result =add(i, i+1);
}
console.log("After 10000 calls:", result);
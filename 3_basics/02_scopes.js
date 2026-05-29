var c=80
 if (true) {
    let a=20
const b=30
var c=40
 }
//  console.log(c);
 
//  +++++++++++++ interesting +++++++++++++++++++

function addone(num1){
    return num1 +1
}
console.log(addone(3))
// in addone type of dcelaration it will not give the error can be declare before or after the function

// addtwo(5) // this will give error
const addtwo = function(num2){
    return num2 +2
}
addtwo(5) // here it is okay to put it will not give error
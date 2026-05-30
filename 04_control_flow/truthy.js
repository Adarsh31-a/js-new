const userEmail = "Adarsh"
if(userEmail) {
    console.log(userEmail);
    
}
else{
    console.log("We don't have any email");
    
}

// Falsy values :: false , 0 ,-0 , BigInt 0n , "" , null , undefinded , NaN

//Truthy Values :: true ,"0" , 'false' , [] ,{} , " ", function(){}

// We can use [ ] by chech it's size

// Nullish Coalescing Operator(??) :: null , undefined

// const var1 = 5 ?? 11
// const var1 = null ?? 8
const var1 = undefined ?? 8
console.log(var1);

// Ternary Opereator

// condition ? true : false

const icetea = 100

console.log(icetea>100 ? true :false)
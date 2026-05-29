
function saymyname(){
    console.log("A");
console.log("D");
console.log("A");
console.log("R");
console.log("S");
console.log("H");

}

// saymyname() // to run a program 

// function addtwonum(number1 , number2){
//     console.log(number1+number2);
    
// }
function addtwonum(number1 , number2){
   return number1+number2;
    
}

const result = addtwonum(3,7)
// console.log(result);

function loginuser(username = "san"){ // this will gave it a default value if it was empty
    if(!username){
        console.log("Please define username");
        return
    }
        return `${username} has login `
}
// console.log(loginuser("Adarsh"));
//  console.log(loginuser()); // when. nothing pass than it will show undefined

 // When we don't know how many parameters will come(we use rest operator ...)
 function calculatetotalprice(...num1){
    return num1
 }
// console.log(calculatetotalprice(100,1200,280));

const user ={
    name : "Adarsh",
    price : 199
}
function handleObject(anyObject){
    console.log(`Usename is ${anyObject.name} and his price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({ // how we can do manually
    name : "Kartik",
    price : "Free"
})

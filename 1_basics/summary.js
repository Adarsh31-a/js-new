// Primitive
// Types :: Strings ,  Number , Boolean , NUll, undefinded , symbol , BigInt 

//References(Non Primitive)
// Array , Objects , Functions

const heroes=["Ironman" , "Captain America", "Thor"]

let myobj={
    name: "Adarsh",
    age: 18,
}

let myfunc = function(){
console.log("hello world");

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

let emailId="adarsh@gmail.com"
let anotherId=emailId
anotherId="kartikk@gmail.com"

console.log(emailId);

console.log(anotherId);

let userone ={
    email:"abcd@gamil.com",
    age: 33,
}

let usertwo=userone

usertwo.email = "def@gmail.com"
console.log(userone.email);
console.log(usertwo.email);

// Heap give Call By Reference that means it gave the original one not the copy
// Stack give the Call By value that means it gave the copy of the original one
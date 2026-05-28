// not singleton in this it will be in next

// object laterals 

const mysym1= Symbol("Key1")
const letuser = {   
    name:"Adarsh",
    "full name" : "Adarsh Kumar",
    [mysym1]: "myKey1",
    age: 20,
    location : "Etawah",
    email : "adarsh@google.com",
    isLoggedIn:false
}
// console.log(letuser.name);
// console.log(letuser["name"]);
// console.log(letuser["full name"]);
// console.log(letuser.mysym1);
// // to use this as symbol
// console.log(letuser[mysym1]);

letuser.email = "adarshk8188@hmail.com"
// Object.freeze(letuser)
// letuser.email = "kartoikk0504@hmail.com"
// console.log(letuser);

letuser.greeting = function(){
    console.log("Hello my World");
    
}

letuser.greetingtwo = function(){
    console.log(`This is ${this.name} Here`);
    
}

console.log(letuser.greeting())
console.log(letuser.greetingtwo())
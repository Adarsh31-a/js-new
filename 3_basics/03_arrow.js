// const { use } = require("react");

const user = {
    username : "Adarsh",
    price : 990,
  welcomemessage : function(){
    console.log(`${this.username} ,welcome to this website`);
    console.log(this);
    
  }

}
// (this) will give you the current context 
// Iside browser the global object is window
//(this) cannot be used inside a function

// user.welcomemessage()
// user.username = "Kartik"
// user.welcomemessage()

function love(){
    const name = "Akdom"
    console.log(this.name);
    
}
// love()

//ARROW FUNCTION syntax
 ()=>{}

// const addtwonum = (num1,num2)=> num1*num2

const addtwonum = (num1,num2)=>({name : "kartik"}) // to deal with objects 
console.log(addtwonum(9,29));

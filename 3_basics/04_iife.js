//Immediately Invoked Function Expression
// Why we use IIFE? because somtetimes global variable arises some problem so to avoid such problems we use IIFE 
(function code(){ // named iife
    console.log("Hey Everyone there !!!")
})(); // ALERT!! WE SHOULD USE TERMINATION (;) HERE TO STOP THIS 

((name)=>{
    console.log(`Tu saale ${name}`);
    
})("Love")
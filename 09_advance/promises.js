const promiseone = new Promise(function(resolve,reject){
// create a async '

setTimeout(function(){
    console.log("hey there");
    resolve() // this will conect to then
},1000)
})

promiseone.then(function(){
    console.log("promised `");
    
})

// how we can do it shorty in. just one function
const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn 3 with promise");
        resolve({username :"Adarsh Kumar" , email : "adarshk@gmail.com"})
    },1000)
})

promisethree.then(function(e){
    console.log(e);
    console.log("promise 3 done");
    
})

const promisefour = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = false
    if(!error){
        resolve({userna :"Adarsh" , email : "adarshk@gmail.com"})
    }
    else {
        reject('ERROR THROWN')
    }
},1000)
})

promisefour
.then((user)=>{
    console.log(user);
    return user.userna;
}).then(
    (username)=>{
        console.log(username);
        
    }
).catch((errot)=>{
    console.log(errot);
    
}).finally(()=>{
    console.log('promise is resolved');
    
}) //it's like default


const promisefive = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true
    if(!error){
        resolve({userna :"Java" , email : "java@gmail.com"})
    }
    else {
        reject('ERROR THROWN AS NOT COMPLILED')
    }
},1000)
})
// it directly cannot handle the wait
async function consumepromisefive() {
   try {
     const waits = await promisefive
    console.log(waits);
   } catch (error) {
    console.log(error);
    
   }
    
}
consumepromisefive()

// async function getallusers() {
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//   } catch (error) {
//     console.log("e : ",error);
    
//   }
// }
// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((respond)=>{
    return respond.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
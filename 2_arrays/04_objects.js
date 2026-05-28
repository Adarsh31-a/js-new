// singleton in this 

// const tinderuser = new Object() // Singleton Object
const tinderuser = {} // laterals 
tinderuser.name = "ADARSH KUMAR"
tinderuser.email = "adarsh@hom.com"
tinderuser.ismale = true
const regularuser = {
    email : "akdon@gmail.com",
    fullname :{
        username : {
            firstname : "Adarsh",
            lastname : "kumar"
        }
    }
}
// console.log(regularuser.fullname.username.firstname);

// how to combine objects

const obj1 = {1:"a" , 2 : "b"}
const obj2 = {3:"a" , 4 : "b"}
const obj3 = {5:"a" , 6 : "b"}

// const obj4 = Object.assign({},obj1,obj2,obj3) // {}-> is used to avoid the space in original one as it created a empty object 
const obj4 = {...obj1, ...obj2 , ...obj3} // we will. use the spread syntax
// console.log(obj4);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser)); // array ke andar array
// console.log(tinderuser.hasOwnProperty('ismale'));


const course = {
    name: "Duniya kaise khtm kare",
    price : 0,
        Courseinstructor : "Lavda sur"
}
// another way to access elements of function

const {Courseinstructor : ints} = course
console.log(ints);
//JSON => in this we take both keys and values as string
// {
// "name" : "adarshk"
// "cousename" : "kkkk"
// }
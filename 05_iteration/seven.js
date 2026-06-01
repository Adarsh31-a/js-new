const nums = [1,2,3,4,5]
const mytotal = nums.reduce(function(acc,currval){
    // console.log(`The current value is ${currval} and accumulatar is ${acc}`);
    
        return acc + currval
},0)

// console.log(mytotal);

const shoppingCart =[
    {
        itemname : "js course",
        price : 999
    },
    {
        itemname : "python course",
        price : 1599
    },
    {
        itemname : "web dev course",
        price : 99
    }
    ,
    {
        itemname : "mobile dev course",
        price : 9999
    }
]
const totalbill = shoppingCart.reduce((acc,currval) => (acc+currval.price),0)

console.log(totalbill);

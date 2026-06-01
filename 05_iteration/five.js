const array = ["js" , "python" , "cpp" , "ruby"]
array.forEach(function(item){
    // console.log(item);
    
})
// forEach donnot return any value (remember)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num>6) //filter helps to find us 
// console.log(newNums);

// how to do with forEach 

const newNums =[]
myNums.forEach((num)=>{
    if (num >5) {
        newNums.push(num);
    }
})
// console.log(newNums);


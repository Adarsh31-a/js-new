const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.map((num)=>(num+5))

// console.log(newnums);

//CHAINING

const newnums = mynums
                .map((num)=>(num*5))
                .map((num)=>num+3)
                .filter((num)=>num>15)

console.log(newnums);
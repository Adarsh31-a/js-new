const arr=[1,2,3,4,5]
// console.log(arr);

// arr.push(6)
// console.log(arr);
// arr.pop()

// arr.unshift(8) // put the number at beginning

// arr.shift() // delete the first element in array

// console.log(arr.includes(8))
// console.log(arr.indexOf(8))

// const newarr = arr.join() // convert the array into string


// console.log(arr);
// console.log(newarr)

// slice and splice

// slice :: the original part remains same only the copy was shown
// splice :: the original part changes by removing the given splice  
console.log("A ",arr)

const myn1 = arr.slice(1,3)
console.log("B ",arr)
console.log(myn1)

const myn2 = arr.splice(1,3)
console.log("C ",arr)
console.log(myn2)


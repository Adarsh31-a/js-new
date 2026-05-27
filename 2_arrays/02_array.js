const marvel_heroes = ["thor", "ironman" , "captain america"]
const dc_heroes = ["superman" , "batman", "flash"]

// marvel_heroes.push(dc_heroes) // this will add the whole array as element 
// console.log(marvel_heroes);

// console.log(marvel_heroes.concat(dc_heroes));

// use  of spread like a glass fall and spread 

// const all_heroes = [...dc_heroes,...marvel_heroes]
// console.log(all_heroes);

const another_array = [ 1, 2, 3 , [4, 5], 6, [7 ,8 , [9, 10 ,11]]]
console.log(another_array);

const ccarray= another_array.flat(Infinity)
console.log(ccarray);

console.log(Array.isArray("Adarsh "));
console.log(Array.from("Adarsh "));
console.log(Array.from({name:"Adarsh"})); //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

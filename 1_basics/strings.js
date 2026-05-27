const name= "Adarsh"
const age = 19

// console.log(name + age + " Kumar") (this is old fashioned so we don't use this instead we use)

console.log(`My name is ${name} and my age is ${age}`);

const name2= new String('adarsh')
console.log(name2[0]);
console.log(name2.__proto__);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('a'));

const newstr = name.substring(0,5) // cannot give starting value as negative
console.log(newstr);

const anotherstr= name.slice(-5,3)
console.log(anotherstr);

const str1="  Kartik   "
console.log(str1);
console.log(str1.trim());

const url="https://akmotors.com/ak%20adarsh/"
console.log(url.replace('%20','-'));
console.log(url.includes('ak'));

console.log(url.split('/')); // make a array 

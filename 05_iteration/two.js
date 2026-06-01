// for of

// ["", "" , " "]
// [{},{},{}]

const array = [1,2,3,4,5,6]
for (const num of array) {
    // console.log(num)
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet);
}

// MAP
const map = new Map()
map.set('IN','India')
map.set('Fr','France')
map.set('Ch', ' China')

// console.log(map);

for (const [keys, values] of map) {

    console.log(keys , ":->" , values);
}


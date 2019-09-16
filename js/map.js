import { separetor } from 'globalObjectDecode.js'
//the map object holds key-value pairs and remembers the original insertion order of the keys
//any value may be used as key or a value

//the intial value of the iterator property is the same function object as the initial valu eof the entries method
//syntax : myMap[Symbol.iterator]
var map = new Map()

map.set(1, "one")
map.set(2, "two")
map.set(3, "three")
map.set(4, "four")

var iterator = map[Symbol.iterator]()

for (let item of iterator) {
    console.log(item)
}
console.log(iterator.next().value)//undefined

//its possible to do this way

console.log("---other way---")

for (let [key, value] of map) {
    console.log(key, "-> ", value)
}
separetor()
//the toStringTag property has an initial value of the Map
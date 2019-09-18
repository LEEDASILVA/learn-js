const separetor = require('./helper.js')

//the map object holds key-value pairs and remembers the original insertion order of the keys
//any value may be used as key or a value

//the intial value of the iterator property is the same function object as the initial valu eof the entries method
//syntax : myMap[Symbol.iterator]
var map = new Map()

map.set(1, "one")
map.set(2, "two")
map.set(3, "three")
map.set(4, "four")
separetor('iterator')
var iterator = map[Symbol.iterator]()

for (let item of iterator) {
    console.log(item)
}
//the iterator contains the key and the value pairs for each element in the map object in insertion order
console.log(iterator.next().value)//undefined

//its possible to do this way

separetor('other way beside the iterator')
const printMap = (Mapp) => {
    for (let [key, value] of Mapp) {
        console.log(key, "-> ", value)
    }
}
printMap(map)
separetor('clear')

//the toStringTag property has an initial value of the Map

// the clear method has the name says it removes all elemets from a Map object
// the size gives the lenght of the map

console.log('size of the map-> ', map.size)
map.clear()
console.log('clear of the map-> ', map.size)

separetor('delete')
//delete method removes the specified element from a Map object
//this will return a boolean indicaring if it was successful or not
//ex:
map.set('assassin', 'creed')
map.set('assassin creed', 'odyssey')
console.log('before bing deleted:')
printMap(map)

console.log(map.delete('assassin'))

printMap(map)

separetor('foreach')
//the foreach method executes a provided function once per aech key nad value
//pair in the Map object, in insertion order
const upper = (value, key) => {
    return value.charAt(0).toUpperCase() + value.slice(1), key.charAt(0).toUpperCase() + key.slice(1)
//or
    /*
    
    */
}

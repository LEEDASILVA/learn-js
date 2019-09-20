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
        console.log('key:', key, ', value:', value)
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
    console.log(`map[${key}] = `+value.charAt(0).toUpperCase() + value.slice(1))
//or
    /*
    return value.replace(/(\b\w)/gi,function(m){return m.toUpperCase()})
    */
}
console.log(map)
console.log(map.forEach(upper))
separetor('get')

//get returns aspecified element from a Map object
//ex:

let assassinMap = new Map()
const setAssasinMap = () => {
    let assassinArray = ['Assassin odyssey', 'Assassin rougue remastered', 'Assassin origins', 'Assassin The Ezio Collection', 'Assassin Chronicles: Russia', 'Assassin Chronicles: India','Assassin Syndicate'
                         ,'Assassin Chronicles', 'Assassin Unity', 'Assassin IV Black Flag', 'Assassin Revelations', 'Assassin Brotherhood','Assassin III', 'Assassin II', 'Assasin I']
   //i put the wrong order, i'm lazy as hell so i'm just gona inverte the order
   assassinArray.reverse()
   assassinMap.clear()
    for(let i = 0; i < assassinArray.length; i++) {
        assassinMap.set("assassin " + (i+1).toString(), assassinArray[i])
    }
}

setAssasinMap()
printMap(assassinMap)
//random number between 0 and the len of the map
let randIndex = Math.floor(Math.random() * assassinMap.size)

console.log('\nThis will ge the value, using the key:\n', assassinMap.get('assassin 1'))
console.log(assassinMap.get('assassin 12'))

separetor('has')
//this will return false or true depending on the existens of the key selected

console.log(assassinMap.has('assassin 15'))
console.log(assassinMap.has('assassin 16'))

const printifExist = (mapp, key) => {
    if(mapp.has(key)) {
        console.log(mapp.get(key))
    }
}

printifExist(assassinMap, 'assassin 7')

separetor('key')
//key method returns a new Iterator object that contains the key for each element in the map object in insetion order
//ex:
let keyIterator = assassinMap.keys()

console.log(keyIterator)

console.log(keyIterator.next().value)
console.log(keyIterator.next().value)
console.log(keyIterator.next().value)

separetor('values')
//values method returns a new Iterator object that contains the values for each element in the map object in insetion order
//ex:
let valueIterator = assassinMap.keys()
console.log(valueIterator)

console.log(valueIterator.next().value)
console.log(valueIterator.next().value)
//ARRAY

//the javascript array object is a global tahat is used in the construction of arrays

//create an array:
var fruits = ['apple','banana'];
console.log(fruits, fruits.length);

//loop over an array
//foreach has a callback function that takes the item the index and the array
fruits.forEach(function(item, index, array) {
    console.log(item, index, array)
});

//add to end of the array, push adds and returns the new lenght of the pushed array
var newLenght = fruits.push('Orange');
console.log(fruits, newLenght);

//remove from the end of an array
var last = fruits.pop();
console.log(fruits, last);

//remove from the front of an array
var first = fruits.shift();
console.log(fruits, first);

//add to the first position of the array returns the position
var first = fruits.unshift('Strawberry');
console.log(fruits, first);

//indexOf finds the index of a given element
//in case it doesnt have the elemente returns -1
var pos = fruits.indexOf('banana');
console.log(fruits, pos)

//remove a element by index
//return a arr of all the ele from that position
var removeItem = fruits.splice(pos, 1);
console.log(fruits, removeItem);

////////////ex:
console.log('\n','example: ')
var vegetable = ['cabbage', 'turinp','radish','carrot'];

console.log(vegetable);

var pos = 1, n = 2;

var removedItems = vegetable.splice(pos, n);

console.log(vegetable, removeItem)
////////////

//make a copy of an array
console.log('\n', 'copy of an array: ')
var shallowCopy = vegetable.slice()
console.log(vegetable, shallowCopy)

//
var promise = {
    'var' : 'text',
    'array' : [1,2,3,4,5,6]
}
console.log(promise, promise['var'])

//When setting a property on a JavaScript array when the property is a valid array 
//index and that index is outside the current bounds of the array, 
//the engine will update the array's length property accordingly:

fruits.push('banana' ,'apple', 'peach')

fruits[6] = 'mango'

console.log("\n update the array's length property accordingly: ",fruits)

//updating the lenght can increase the lenght of an array but it can delete elements if 
//we decrease elements
fruits.length = 2

console.log("\n change on the lenght array: ", fruits, fruits.length)

//a match between a regular expression and a string can create a JS array, this array has information about the match
//this case that matches d+b+d the i is a flag could be g, says the first match that it finds
var matchDandB = /d(b+)(d)/i
var array = matchDandB.exec('cdbBdbsdbdz')
console.log(array, matchDandB)


//it exists the Array constructor, this as differet methods:
//  -> Array.from(): 
//          Creates a new Array instance from an array-like or iterable object.
//  -> Array.isArray():
//          it's a bool, if it's an array or not (true or false)
//  ->Array.of().
//          Creats a new array instance with a variable number of arguments
//          ex: Array.of(1,2,3,4) --> [1,2,3,4]

//sort a array
//we can sort a array in ascii order or give a function to sort as we what
console.log('-----sort list-----')
arr = [5,1,4,3,2]

console.log(arr.sort(function(a, b) {
    return a - b
}))

console.log(arr.sort(function(a, b) {
    return b - a
}))

console.log(arr.sort())

console.log(arr.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
))
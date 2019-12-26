// arrays

// in an array we can store various date types: string, intm objects...
let arr = [1, "bread", "cheese", 2, "chocolat", ["hello", 2], {key : "value"}, "juice", "fruite"]

console.log(arr.length)

// you can split a string into a array using the method '.split(pattern)'
let str = 'hello, to, you, man, there, how, are, is, nothing, do, ...'
arr = str.split(',')
console.log(arr)

// swapping names, using array.prototype constructor allowes to
// create and add a new functions linked to the Array object
// this way we created and added the function swap to the array object
Array.prototype.swap = function (x, y) {
  let b = this[x]
  this[x] = this[y]
  this[y] = b
  return this
}
arr.swap(1, 5)
arr.swap(2, 3)
arr.swap(2, 6)
arr.swap(4, 6)
arr.swap(5, 6)
arr.swap(6, 7)
arr.swap(7, 8)
console.log(arr)
// hello how are you man there is nothing to do ...

// you can join an array into a string using '.join(pattern)'
// another way, you can use '.toString()'
str = arr.join('')
console.log(str)

// adding and removing element in an array
console.log('------adding and removing------')
let removedElement = arr.pop()
console.log('removed element->', removedElement, '\nadded element-> here')

arr.push(' here')
let allStr = ""
arr.forEach(element => {
  allStr += element
})
console.log(allStr)

// the shift and unshift it's the same but with the first element
console.log('shift() and unshift()')

arr.unshift('You')
console.log(arr)

let rmLast = arr.shift()
console.log(rmLast, arr)

console.log('------creating an array using the result of a match-------')

var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');
console.log(myArray)
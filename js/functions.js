//we can do a function declarations and functions expressions
//funciton declarations, that's :
function declFunction() {

}
// this is hoisted entirely to the top of the scope, while the let and const they are block scoped as well
//this means that the following will work:

//declFunction()
function declFunction(someVar) {
    console.log(someVar)
}

//a function expression that is: 
const b = function(){

} 
//or 
const a = (someVar) => {
    console.log(someVar)
}

//Is the creation of an anonymous function (function () {}) and the creation of a variable, 
//and then the assignment of that anonymous function to that variable.
//exemple os the two
a('ola')

declFunction('ola')

//we can use the key word arguments to run the loop
//ex:

function loopF () {
    for (let letters of arguments) {
        console.log(letters)
    }
}
loopF('a', 'b', 'c', 'd')

//imagin you have a recusive function but this function is a anonumos function
//we can use the arguments.callee 
//ex:

//factorial of a number recusively
function  create() {
    return function(n) {
        if (n <= 1) {
            return 1
        }
        return n*arguments.callee(n-1)
    }
}

console.log(create()(6))

//the arguments uses lenght too .....

//arrow functions, talked above
//this type of functions can be used as constructors

let material = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
]

//returns an array of the lenth of each words of the material array
console.log(material.map(material => {
    return material.length
}))

//Default function parameters allow named
// parameters to be initialized with default values if no value or undefined is passed.
//ex:

//the default, thats b = 1, so if the b is not given when the function is called the default is 1
const multiply = (a, b = 1) => {
    return a*b
}

console.log(multiply(5,7))

console.log(3)

// the applay method calls a function with a given this value, and arguments
//provided as an array
//ex:

//appending an array to other array
//we can use the push method:

let array = [1, 2, 3, 4]
let array1 = ['a', 'b', 'x']

array.push.apply(array, array1)

console.log(array)


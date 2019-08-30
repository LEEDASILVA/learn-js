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

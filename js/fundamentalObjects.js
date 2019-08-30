//objects
//the object constructor creates an object wrapper
//The Object constructor creates an object wrapper for the given value. If the 
//value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a
// Type that corresponds to the given value. If the value is an object already, it will return the value.

var object1 = {a: 'foo', b: 42, c: {}};

console.log(object1.a);
var a = 'foo';
var b = 42;
var c = {};
var object2 = {a: a, b: b, c: c};

console.log(object2.b);

//we can creat a new function object or even a boolean object 
var sum = new Function('a', 'b','return a+b');

console.log(sum(3,4));

//andAny object of which the value is not undefined or null, including a Boolean object whose value is false, evaluates to
// true when passed to a conditional statement. For example, the condition in the following if statement evaluates to true

var c = new Boolean(false);

if(c) {
    console.log(c);
}

if(c == true) {
    console.log(c);
}

//Symbol() function returns a valur of type symbol, has static properties that expose several
//members of built-in objects, has static methods that expose the global symbol registry, and 
//resembles a built-in object class but is incomplete as a constructor because it does not support
//the syntax "new Symbol()"

//normaly used as an identifire for object properties

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
console.log(symbol2.toString());
console.log(symbol3);

//each one is unic!!!!!
console.log(Symbol('foo') === Symbol('foo'));

//                          ERROR
//the Error() constructor an error object. Instances of Error objects are thrown when
//runtime errors .The Error object can also be used as a base object for user-defined exception.

//new Error([message[,fileName[,lineNumber]]])


//const x = Error('I was created using a function call!');
​​​​// has the same functionality as this:
//const y = new Error('I was constructed via the "new" keyword!');

//new EvalError([message[,fileName[,lineNumber]]])
//object indicates an error regarding the global eval() function

//new RangeError([message[,fileName[,lineNumber]]])
//object indicates an error ehen a value is not in the set or range of allowed values
//...............

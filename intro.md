# introduction

## The difference between `var` and `let`

- When you use `var`, you can declare the same variable as many times as you like, but with `let` you can't. The following would work :

```javascript
var myName = 'Chris';
var myName = 'Bob';
```

- But the following would throw an error on the second line:

```javascript
let myName = 'Chris';
let myName = 'Bob';
```

- You'd have to do this instead:

```javascript
let myName = 'Chris';
myName = 'Bob';
```

## arrays

- An array is a single object that contains multiple values enclosed in square rackets and separated by commas.

```javascript
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];
```

## objects

- An object is a structure of code that models a real-life object. You can have a simple object that represents a box and contains information about its width, length, and height, or you could have an object that represents a person, and contains data about their name, height, weight, what language they speak, how to say hello to them, and more.

```javascript
let dog = { name : 'Spot', breed : 'Dalmatian' };

dog.name
```

## dynamic typing

- JavaScript is a "dynamically typed language", which means that, unlike some other languages, you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc).

```javascript
let myString = 'Hello';
```

```javascript
let myNumber = '500';
typeof myNumber; // 'string'
myNumber = 500;
typeof myNumber; // 'number'
```

## constants

- In javascript constant are define using the key word `const` this will be a value that once declared can't be changed.

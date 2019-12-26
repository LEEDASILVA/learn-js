# Arrays

- Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value.

## adding and removing elements in an array

- adding just use `array.push('element')`
- removing `array.pop()` removes the last element of an array, `.pop()` returns the last element removed from the array.

## creating an array using the result of a match

- The result of a match between a regular expression and a string can create a JavaScript array. This array has properties and elements which provide information about the match. Such an array is returned by RegExp.exec, String.match, and String.replace.

```javascript
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');
```

## **You can see the examples on the arrays.js file**

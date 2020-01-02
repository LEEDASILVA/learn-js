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

## Array.from(arrayLike[, mapFn[, thisArg]])

- `arrayLike`
  - An array-like or iterable object to convert to an array.
- `mapFnOptional`
  - Map function to call on every element of the array.
- `thisArgOptional`
  - Value to use as this when executing `mapFn`.

## .indexOf(searchElement[, fromIndex])

- `searchElement`
  - Element to locate in the array.
- `fromIndex` Optional
  - The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).

## **You can see the examples on the arrays.js file**

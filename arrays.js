// arrays

const sep = str => console.log(`------${str}--------`);
// in an array we can store various date types: string, intm objects...
let arr = [
  1,
  "bread",
  "cheese",
  2,
  "chocolat",
  ["hello", 2],
  { key: "value" },
  "juice",
  "fruite"
];

console.log(arr.length);

// you can split a string into a array using the method '.split(pattern)'
let str = "hello, to, you, man, there, how, are, is, nothing, do, ...";
arr = str.split(",");
console.log(arr);

// swapping names, using array.prototype constructor allowes to
// create and add a new functions linked to the Array object
// this way we created and added the function swap to the array object
Array.prototype.swap = function(x, y) {
  let b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};
arr.swap(1, 5);
arr.swap(2, 3);
arr.swap(2, 6);
arr.swap(4, 6);
arr.swap(5, 6);
arr.swap(6, 7);
arr.swap(7, 8);
console.log(arr);
// hello how are you man there is nothing to do ...

// you can join an array into a string using '.join(pattern)'
// another way, you can use '.toString()'
str = arr.join("");
console.log(str);

// adding and removing element in an array
sep("adding and removing");
let removedElement = arr.pop();
console.log("removed element->", removedElement, "\nadded element-> here");

arr.push(" here");
let allStr = "";
arr.forEach(element => {
  allStr += element;
});
console.log(allStr);

// the shift and unshift it's the same but with the first element
console.log("shift() and unshift()");

arr.unshift("You");
console.log(arr);

let rmLast = arr.shift();
console.log(rmLast, arr);
sep("creating an array using the result of a match");

var myRe = /d(b+)(d)/i;
var myArray = myRe.exec("cdbBdbsbz");
console.log(myArray);

sep("methods");
sep(".fill()");

// fill(value, start, end)

const array = [1, 2, 3, 4, 5];
console.log(array.fill(0, 3, 7));
const array1 = [6, 7, 8];

sep(".copyWithin(target, start, end)");
const newArray = [1, 2, 3, 4, 5];
console.log(newArray, newArray.copyWithin(0, 3));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));

sep(".concat()");

console.log(array.concat(array1));

sep(".every(callback)");

const isOk = currentValue => currentValue < 10;
console.log(newArray, newArray.every(isOk));
newArray.push(20);
console.log(newArray, newArray.every(isOk));

sep(".filter(callback)");
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];
const fun = str => str.length > 6;
// each element
const result = words.filter(fun);
console.log("old->", words, "filtered->", result);

sep(".find(callback) and .findIndex(...)");

const found = words.find(fun);
const foundIndex = words.findIndex(fun);
console.log(words, found, foundIndex);

sep(".flat(depth)");

//The flat() method creates a new array with all sub-array elements
// concatenated into it recursively up to the specified depth
var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());

var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2, arr2.flat());

var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3, arr3.flat(2));

sep("-map(function callback(currentValue))");

arr = [1, 4, 9, 16];

const map1 = arr.map(x => x * 2);

console.log("old arr->", arr, "new arr->", map1);

let objectArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
  { key: 4, value: 40 }
];

// map returns an array with the new elements in it
//
let reformatArray = objectArray.map(obj => {
  let newObj = {};
  newObj[obj.key] = obj.value;
  return newObj;
});

console.log("old->", objectArray, "new->", reformatArray);

sep(".flatMap(callback)");

// The flatMap() method first maps each element using a mapping function,
// then flattens the result into a new array
let arr4 = [1, 2, 3, 4];

console.log(arr4);

// map returns each changed element of the array
let a = arr4.map(x => [x * 2]);
console.log(a);

// flats the array one time
a = arr4.flatMap(x => [x * 2]);
console.log(a);

// only one level is flattened
a = arr4.flatMap(x => [[x * 2]]);
console.log(a);

// good example
arr4 = ["it's sunny in", "", "Portugal"];

// splits each element by " " creating several array
a = arr4.map(x => x.split(" "));
console.log("using .map", arr4, a);

// splits each element by " " creating several array
// and flattenes it by one
a = arr4.flatMap(x => x.split(" "));
console.log("using .flatMap", arr4, a);

sep(".from(arrayLike[, mapFn[, thisArg]])");
str = "Creativity is the residue of time wasted";

console.log(str, Array.from(str));

str = "I never think of the future - it comes soon enough.";

arr = str.split(" ");
console.log(str, arr);

// the arrayLike is the convert the object into an array
// the mapFn call on every element of the array
console.log(
  "Array.from",
  Array.from(arr, x => [x])
);

sep("includes(searchElement[, fromIndex])");

str = "The only reason for time is so that everything doesn't happen at once.";
arr = str.split(" ");

console.log(arr, "includes time?", arr.includes("time"));
console.log(arr, "includes time? begening on index 2", arr.includes("time", 2));
console.log(arr, "includes time? begening on index 7", arr.includes("time", 7));

sep(".reduce(calback[, initialValue])");

let arrObj = [{ x: 1 }, { x: 2 }, { x: 3 }];
console.log(arrObj);

// the callback functions has to present a accumulator and a currectValue
// the 0 is the number in witch the acc starts
const sum = arrObj.reduce((acc, cv) => acc + cv.x, 0);

console.log(sum);

const names = [
  "Jesse",
  "Lito",
  "Odilia",
  "Lito",
  "Patricia",
  "Patricia",
  "Jesse",
  "Lito",
  "Odilia",
  "Odilia",
  "Lito",
  "Patricia",
  "Jesse",
  "Jesse",
  "Odilia",
  "Patricia",
  "Lee"
];
console.log(names);

// this will create an object with the count of all the repeted names
// {} significa that the acc will be a empty object
let nameCounter = names.reduce((acc, cv) => {
  if (cv in acc) {
    acc[cv]++;
  } else {
    acc[cv] = 1;
  }
  return acc;
}, {});

console.log(nameCounter);

const people = [
  { name: 'Odilia', age: 30 },
  { name: 'Lee', age: 20 },
  { name: 'Lito', age: 30 },
  { name: 'Jesse', age: 20 },
  { name: 'Patricia', age: 20 }
]

const groupBy = (obj, property) => {
  return obj.reduce((acc, cv) => {
    let key = cv[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(cv)
    return acc
  }, {})
}

let groupedAge = groupBy(people, 'age')
console.log(groupedAge)
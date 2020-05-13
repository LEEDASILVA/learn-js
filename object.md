# Object

object syntax

```javascript
// Object initialiser or literal
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
new Object([value])
```

`nameValuePair1, nameValuePair2, ... nameValuePairN`

- Pairs of names (strings) and values (any value) where the name is separated from the value by a colon.

`value`

- Any value

The Object constructor creates an object wrapper for the given value. If the value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value.

If the value is an object already, it will return the value

## Properties

- `Object.length`
- `Object.prototype` : allows the addition of properties to all objects of type Object

## Methods

### assign

- The `Object.assign()` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

You can use this methods for several things, like:

- cloning an object, **warning for Deep cloning**
- merging objects

### constructor

The constructor property returns a reference to the object constructor function that created the instance object.

Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as `1`, `true` and `test`.

```javascript
let o = {};
o.constructor === Object;
// true

let o = new Object;
o.constructor === Object;
// true

let a = [];
a.constructor === Array;
// true

let a = new Array;
a.constructor === Array;
// true

let n = new Number(3);
n.constructor === Number;
// true
```

### Create

The `Object.create()` method creates a new object, using an existing object as the prototype of the newly created object.

### entries

The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well) .

The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array needs to be sorted first like Object.entries(obj).sort((a, b) => a[0] - b[0]);.

this is very good:

```javascript
const obj = {
    a: 'value'.
    b: 'something',
    c: 2
}

const arr = Object.entries(obj)

console.log(arr, Array.isArray(arr))
// [['a', 'value'], ['b', 'something'], ['c', 2]] true
```

### freeze

The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it

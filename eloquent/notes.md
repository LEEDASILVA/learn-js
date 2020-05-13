# JS

## Special Numbers

- infinity and -infinity
- NaN (not a number) displays specially when it's invalid number ex: 1/0 or 0/0 or infinity - infinity, this primitive is special for one reason, it's not equal to anything. So `NaN === NaN` -> this will be always false.

--------

## String

strings can be used with '' `` or "".

```javascript
let str = "something \n new line using \"\""
let str1 = 'something \n new line using \'\''
let templateLiterals = `something
 new line using ${str+str1}`
console.log(str)
console.log(str1)
console.log(templateLiterals)
```

--------

## Boolean

there is one value that is not equal to itself that is NaN

```javascript
console.log(NaN == NaN) // false
```

--------

### ternary operating

- three values:

```javascript
console.log(true ? 1 : 2) // 1
console.log(false ? 1 : 2) // 2
```

--------

## Automatic type conversion (type coercion)

```javascript
console.log(8 * null) // 0
console.log("5" - 1) // 4
console.log("5" + 1) // 51
console.log("five" * 2) // NaN
console.log(false == 0) // true
```

- when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

```javascript
console.log(null == undefined) // true
console.log(null == 0) // false
```

the difference between `undefined` and `null`:

- `undefined` means a variable has been declared but has not yet been assigned a value

- `null` is an assignment value. It can be assigned to a variable as a representation of no value

- `undefined` and `null` are two distinct types: undefined is a type itself (undefined) while null is an object

--------

## Short-circuiting of logical operators

The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.

`&&` and `||`

```javascript
if (online) {
    getData()
}
// it the same thing if you write
online && getData()
// --------------------
var person = {
  name: 'Jack',
  age: 34,
  job: 'teacher'
}
console.log(person.job || 'unemployed');// teacher
// but if there is no job it will return unemployed
var person = {
  name: 'Jack',
  age: 34,
}
console.log(person.job || 'unemployed');// unemployed
```

- they evaluate from left to right
- they **short-circuit**, this means that if the first operand is false, JS will short-circuit and not even look at the second operand

--------

## Optional Arguments

- JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined .

```javascript
const minus = (a, b) => {
  if (b == undefined) return -a
  else return a-b
}
console.log(minus(10)) // -10
console.log(minus(10, 8)) // 2
```

- the cool thing is that you can use a `=` operation after a parameter, followed by an expression. The value of that expression will replace the argument when it is not given.

```javascript
const power = (base, exponent = 2) => {
  return exponent == 0 ? 1 : power(base, exponent-1)*base
}

// this will say that the exponent is undefined so it will
// assign it to the default value that is 2
console.log(power(4))
// 16
console.log(power(2, 6))
// 64
```

--------

### Closure

- The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called

```javascript
const wrapValue = n => {
    let local = n
    return () => local
}

console.log(wrapValue(1))
// 1
console.log(wrapValue(2))
// 2
```

--------

## Growing functions

- you must not add and add ..... more code to a function that repeats every time the client whats something. You should take a better look and make a function that can adapt to more information you can se an example in the `growingfunction.js`

# Data Structures

## Data Sets

### properties difference between value.x and value[x]

- Both `value.x` and `value[x]` access a property on `value` but not necessarily the same property. The difference is in how `x` is interpreted.

- When using a dot, the word after the dot is the **literal name of the property**. When using square brackets, the expression between the brackets is evaluated to get the **property name**.
  - Whereas `value.x` fetches the property of value named `x`, `value[x]` tries to evaluate the expression x and uses the result, converted to a string, as the property name.

- So if you know that the property you are interested in is called color, you say value.color . If you want to extract the property named by the value held in the binding `i` , you say `value[i]` . Property names are strings.

------

### Methods

- they are properties that hold functions, so both string and array object present a number of methods

```javascript
let a = "something"

console.log(typeof a.toUpperCase)
// function
console.log(a.toUpperCase())
// SOMETHING
```

------

## Arrays

arrays object present allot of methods you can take a look of some of them in the folder [**learn-js/arrays.js**](https://github.com/LEEDASILVA/learn-js/blob/master/arrays.js) and [**learn-js/arrays.md**](https://github.com/LEEDASILVA/learn-js/blob/master/arrays.md)

------

## Objects

- you can take a look about objects in the folders [**learn-js/object.js**](https://github.com/LEEDASILVA/learn-js/blob/master/object.js) or [**learn-js/object.md**](https://github.com/LEEDASILVA/learn-js/blob/master/object.md)

-----

## Mutability

Objects work differently. You can change their properties, causing a single object value to have different content at different times.

When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. Consider the following code:

```javascript
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
63console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```

- The `object1` and `object2` bindings grasp the same object, which is why changing `object1` also changes the value of `object2`. They are said to have the same *identity*.

- The binding `object3` points to a different object, which initially contains the same properties as `object1` but lives a separate life.






--------

## Regular Expressions

- quantifiers :

- the `+` sign is 1 or more, the `*` is 0 or more
  - `*` Repeats the previous item zero or more times. Greedy, so as many items as possible will be matched before trying permutations with less matches of the preceding item, up to the point where the preceding item is not matched at all.

  - basically the difference is that `*` matches an empty string while `+` doesn't.

```javascript
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true
```

- `?` A question mark makes a part of a pattern optional, meaning it may occur zero times or one time.

```javascript
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → truelet neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true
```

you can apply the `+` or `*` in a group :

```javascript
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
```

The first and second + characters apply only to the second o in boo and hoo,
respectively. The third + applies to the whole group (hoo+) , matching one or
more sequences like that.

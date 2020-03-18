# JS

## Special Numbers

- infinity and -infinity
- NaN (not a number) displays specially when it's invalid number ex: 1/0 or 0/0 or infinity - infinity, this primitive is special for one reason, it's not equal to anything. So `NaN === NaN` -> this will be always false.

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

## Boolean

there is one value that is not equal to itself that is NaN

```javascript
console.log(NaN == NaN) // false
```

### ternary operating

- three values:

```javascript
console.log(true ? 1 : 2) // 1
console.log(false ? 1 : 2) // 2
```

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

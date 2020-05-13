// objects
const sep = (str = "----") => console.log(`------${str}--------`)

// assign method
sep(`Object.assign(target, ...sources)`)

let aa = { a: 1, b: 2 }
let bb = { b: 4, c: 5 }

let newtarget = Object.assign(aa, bb)

console.log(aa)
console.log(bb)
console.log(newtarget, "\n")

// the object is mutable so it means that you can assign a same object to different instances
// so if we change aa we will change newtarget
// but if you change the bb its not gonna change the targets
aa.a = 123
bb.b = 321
console.log(aa, newtarget)

// you can use assign to clone an object
console.log("cloning a object")

let obj = { a: 123, b: 321 }
let clone = Object.assign({}, obj)
console.log(clone, "\n")

// you can merge objects
console.log("merging a object")
let o1 = { a: 1, b: 1, c: 1 }
let o2 = { b: 2, c: 2 }
let o3 = { c: 3 }

let mergedObj = Object.assign({}, o1, o2, o3)
console.log(mergedObj, "\n")

sep("object.constructor")

let o = {}
console.log(o.constructor, o.constructor === Object)

o = new Object()
console.log(o.constructor, o.constructor === Object)

let arr = []
console.log(arr.constructor, arr.constructor === Array)

arr = new Array()
console.log(arr.constructor, arr.constructor === Array)

let n = new Number(3)
console.log(n.constructor, n.constructor === Number)

console.log("\n")

// object create
sep("Object.creat")

const person = {
  type: "good",
  instruction: function() {
    console.log(`My name is ${this.name}. i'm a ${this.type}.`)
  }
}

const someone = Object.create(person)
someone.name = "L"
someone.type = "human"

console.log(someone)
someone.instruction()


sep('defineProperties')
sep('defineProperty')

sep('entries')

obj = {
    a: 'something',
    b: 1
}
let arrObj = Object.entries(obj)

console.log('is it an array', Array.isArray(arrObj), arrObj)

for (let [key, value] of arrObj) {
    console.log(key, value)
}

// or

sep('or')
Object.entries(obj).forEach(([key, value]) => console.log(key, value))

sep('freeze')
// if the object is freezed it cant be changed
Object.freeze(obj)
obj.a = 'merda'
console.log(obj.a)

sep('formEntries')
// it will transform a list of key-values pair into an object
let entries = new Map([['name', 'L'],['age', 123]])

const newObj = Object.fromEntries(entries)
console.log(newObj)


const round = nbr => {
  return Math.round(nbr)
}
console.log('-----', round(3.14))

// ----------------------------

const isValidIP = str => {
  let cases = str.split(".")
  if (
    cases.length < 4 ||
    cases.length > 4 ||
    str.match(/[\n a-zA-Z]/i)
  )
    return false

  for (let i = 0; i < cases.length; i++) {
    if (cases[i].length != 1 && cases[i][0] == "0") return false
    cases[i] = parseInt(cases[i])
    if (isNaN(cases[i]) || cases[i] < 0 || cases[i] > 255) return false
  }
  return true
}

// Begin of tests
const assert = require("assert").strict
assert.deepEqual([[1, 2],[3, 4]], [[1, 2],[4, 4]])

assert.strictEqual(isValidIP("0.0.0.0"), true)
assert.strictEqual(isValidIP("12.255.56.1"), true)
assert.strictEqual(isValidIP("137.255.156.100"), true)

assert.strictEqual(isValidIP(""), false)
assert.strictEqual(isValidIP("abc.def.ghi.jkl"), false)
assert.strictEqual(isValidIP("123.456.789.0"), false)
assert.strictEqual(isValidIP("12.34.56"), false)
assert.strictEqual(isValidIP("01.02.03.04"), false)
assert.strictEqual(isValidIP(" 256.1.2.3"), false)
assert.strictEqual(isValidIP("1.2.3.4.5"), false)
assert.strictEqual(isValidIP("123,45,67,89"), false)

assert.strictEqual(isValidIP("1e0.1e1.1e2.2e2"), false)

assert.strictEqual(isValidIP(" 1.2.3.4"), false)
assert.strictEqual(isValidIP("1.2.3.4 "), false)
assert.strictEqual(isValidIP("12.34.56.-7"), false)
assert.strictEqual(isValidIP("1.2.3.4\n"), false)
assert.strictEqual(isValidIP("229.136.8.199a"), false)

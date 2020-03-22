/**
 *
 * Write a function countBs that takes a string as its only argument and returns
 * a number that indicates how many uppercase “B” characters there are in the
 * string.
 * Next, write a function called countChar that behaves like countBs , except
 * it takes a second argument that indicates the character that is to be counted
 * (rather than counting only uppercase “B” characters). Rewrite countBs to
 * make use of this new function.
 */

const countBs = str => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    str.charAt(i) == "B" && count++
  }
  return count
}

// improved count
const countChars = (str, char) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    str.charAt(i) == char && count++
  }
  return count
}

// Begin of tests
const assert = require("assert").strict

const randomStr = (size = 30) => {
  const alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""
  for (let i = 0; i < size; i++) {
    result += alf.charAt(Math.floor(Math.random() * alf.length))
  }
  return result
}

assert.strictEqual(typeof countBs, "function")
assert.strictEqual(countBs.length, 1)
assert.strictEqual(countBs("hjkbjnkldashjn asdfbjnklcjkoçACSLH JIC SD"), 0)
assert.strictEqual(countBs("BBBBBBBBBBBBBBBB"), 16)
assert.strictEqual(countBs("OIPQWEUIREQWBkçolfsdB"), 2)

for (let i = 0; i < 15; i++) {
  const v = randomStr()
  assert.strictEqual(countBs(v), countChars(v, "B"))
}

//assert.strictEqual(countBs(randomStr(8)))
//assert.strictEqual(countBs(randomStr(20)))

// countChars
assert.strictEqual(typeof countChars, "function")
assert.strictEqual(countChars.length, 2)
assert.strictEqual(countChars("hjkbjnkldashjn asdfbjnklcjkoçACSLH JIC SD", 'a'), 2)
assert.strictEqual(countChars("BBBBBBBBBBBBBBBB", 'B'), 16)
assert.strictEqual(countChars("OIPQWEUIREQWBkçolfsdB", 'ç'), 1)
// End of tests

console.log("  \u001b[32;1m✓ " + "" + "passed")

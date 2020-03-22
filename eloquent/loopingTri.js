// using for loops
const loopingForTriangle = (char, howMany) => {
  let result = ""
  for (let i = 0; i < howMany; i++) {
    for (let j = 0; j <= i; j++) {
      result += char
    }
    result += "\n"
  }
  return result
}

// using while loops
const loopingWhileTriangle = (char, howMany) => {
  let result = ""
  let i = 0

  while (i < howMany) {
    let j = 0
    while (j <= i) {
      result += char
      j++
    }
    result += "\n"
    i++
  }
  return result
}

// we can use `.padStart`
// using recursion
const loopingRecursionTriangle = (char, howMany) => {
  if (howMany == 0) return '\n'
  return loopingRecursionTriangle(char + '*', howMany-1) + char + '\n'
}


console.log(loopingForTriangle('a', 5))
console.log(loopingForTriangle('+', 10))
console.log(loopingForTriangle('#', 4))
console.log(loopingForTriangle('{}', 13))

console.log(loopingForTriangle("#", 15))
console.log(loopingWhileTriangle("0", 30))
console.log(loopingRecursionTriangle("*", 100))

// Begin of tests
const assert = require("assert").strict

assert.strictEqual(typeof loopingForTriangle, "function")
assert.strictEqual(loopingForTriangle.length, 2)
assert.strictEqual(loopingForTriangle('a', 5), 'a\naa\naaa\naaaa\naaaaa\n')
assert.strictEqual(loopingForTriangle('+', 10), '+\n++\n+++\n++++\n+++++\n++++++\n+++++++\n++++++++\n+++++++++\n++++++++++\n')
assert.strictEqual(loopingForTriangle('#', 4), '#\n##\n###\n####\n')
assert.strictEqual(loopingForTriangle('{}', 13), '{}\n{}{}\n{}{}{}\n{}{}{}{}\n{}{}{}{}{}\n{}{}{}{}{}{}\n{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}{}{}{}{}\n')

// End of tests

console.log("  \u001b[32;1m✓ " + "" + "passed")

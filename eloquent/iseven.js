/**
 * We’ve seen that % (the remainder operator) can be used to test whether a
 * number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
 * another way to define whether a positive whole number is even or odd:
 *      • Zero is even.
 *      • One is odd.
 *      • For any other number N, its evenness is the same as N - 2.
 *
 * Define a recursive function isEven corresponding to this description. The
 * function should accept a single parameter (a positive, whole number) and return
 * a Boolean.
 * Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
 * way to fix this?
 */

// you will have to use recursion to do it differently way
const isevenrecursion = nbr => {
  return nbr == 0 ? true :
    nbr == 1 ? false :
    nbr < 0 ? isevenrecursion(nbr + 2) :
    isevenrecursion(nbr - 2)
}

// Begin of tests
const assert = require("assert").strict

// this is the best way to see if a nuimber is even
const iseven = number => number % 2 === 0

assert.strictEqual(typeof isevenrecursion, "function")
assert.strictEqual(isevenrecursion.length, 1)
assert.strictEqual(isevenrecursion(0), iseven(0))
assert.strictEqual(isevenrecursion(-2), iseven(-2))
assert.strictEqual(isevenrecursion(9), iseven(9))
assert.strictEqual(isevenrecursion(222), iseven(222))
assert.strictEqual(isevenrecursion(-23), iseven(-23))
// End of tests

console.log("  \u001b[32;1m✓ " + "" + "passed")

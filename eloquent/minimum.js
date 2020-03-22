/**
 * The previous chapter introduced the standard function Math.min that returns
 * its smallest argument. We can build something like that now. Write a function
 * min that takes two arguments and returns their minimum.
 */

const min = (nbr1, nbr2) => nbr1 < nbr2 ? nbr1 : nbr2

// Begin of tests
const assert = require('assert').strict

assert.strictEqual(typeof min, 'function')
assert.strictEqual(min.length, 2)
assert.strictEqual(min.toString().includes('Math.min'), false)
assert.notStrictEqual(min, Math.min)
assert.strictEqual(min(0, -2), -2)
assert.strictEqual(min(-1, 10), -1)
assert.strictEqual(min(-13.2, -222), -222)
assert.strictEqual(min(132, 133), 132)
// End of tests

console.log('  \u001b[32;1m✓ '+'' + 'passed')

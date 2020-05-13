/** data module
 *## MUTABILITY
 *
 * This exercises focus on teaching about object mutability
 *
 * Make a copy of the `person` object call `clonedPerson` without binding the same object or present the same identity
 *
 * ## Notions
 *
 * - mutability
 * - data-structures
 */

let person = {
  name: "Rick",
  age: 100,
  country: "US"
}
///*///


let clonedPerson = {...person}
// or
// let clonedPerson = Object.assign({}, person);

///*///

// Begining of test
const assert = require("assert").strict

const fail = fn => { try { fn() } catch (err) { return true } }

const eq = (a, b) => {
  if (a === b) return true
  if (typeof a !== typeof b) return false
  if (typeof a === "number" && Number.isNaN(a) && Number.isNaN(b)) return true
  if (typeof a === "object") {
    if (!a || !b) return false
    if (a.constructor !== b.constructor) return false
    const entries = Object.entries(a)
    if (entries.length !== Object.values(b).length) return false
    for (const [k, v] of entries) {
      if (!eq(b[k], v)) return false
    }
    return true
  }
  return false
}

assert.deepEqual(typeof clonedPerson, "object")
console.log(eq(clonedPerson, person))
assert.deepEqual(eq(person, clonedPerson), true)
assert.deepEqual(person !== clonedPerson, true)
assert.deepEqual(fail(() => clonedPerson.name = 'someone'), true)
assert.deepEqual(person.name === 'Rick', true)

assert.deepEqual(clonedPerson.age, 100)
assert.deepEqual(clonedPerson.country, "US")
// clonedPerson.name = "someone"
// clonedPerson.age = 123
// assert.deepEqual(clonedPerson.name !== person.name, true)
// assert.deepEqual(clonedPerson.age !== person.age, true)

console.log("  \u001b[32;1m✓ " + "" + "passed")
// End of test

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
    name: 'Rick',
    age: 100,
    country: 'US'
}
///*///

let clonedPerson = Object.create(person)

console.log(person, clonedPerson)

// let clonedPerson = { ...person };
// or
// let clonedPerson = Object.assign({}, person);

///*///

// Begining of test
const assert = require("assert").strict

assert.strictEqual(typeof clonedPerson, "object")
assert.strictEqual(clonedPerson == person, false)
assert.strictEqual(clonedPerson.name, 'Rick')
assert.strictEqual(clonedPerson.age, 100)
assert.strictEqual(clonedPerson.country, 'US')

clonedPerson.name = 'someone'
clonedPerson.age = 123
assert.strictEqual(clonedPerson.name !== person.name, true)
assert.strictEqual(clonedPerson.age !== person.age, true)

console.log("  \u001b[32;1m✓ " + "" + "passed")
// End of test
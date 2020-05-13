console.log('----entries----')
const obj = {
  array: [1, 3, 5],
  string: 'hello',
  arrayInArray: [1, [3, 4, [3]]],
  object: {
    key: 'value',
  },
  bool: true,
}

const entrie = Object.entries(obj)

console.log(entrie)

// order is not guaranteed
for ([key, value] of entrie) {
  console.log(key, value)
}

console.log('------')

// order is guaranteed
for (key in obj) {
  console.log(key, obj[key])
}

// ----- object formEntries
console.log('\n----fromEntries----')

// transforms a list of key-value pairs into an object
console.log(entrie)
const cloneUsingFromEntries = Object.fromEntries(entrie)

console.log(cloneUsingFromEntries)

console.log('\n-----exercise-----')
/**
 * ## Title
 *
 * ### Instruction
 *
 * Write the following set functions :
 *
 * - `filterKeys` has as parameters the object and the function for the filtering
 * - `filterValues` the same here
 *
 * Does function acts like .filter from array
 *
 * - `mapKeys` has as parameters the object and the function for the filtering
 * - `mapValues` the same
 * - `mapEntries`
 *
 * Does function acts like .map from array
 *
 * - `reduceKeys`
 * - `reduceValues`
 * - `reduceEntries`
 *
 * Does function acts like .reduce from array
 *
 *
 */

// /* */ //
// filter
const filterObj = (obj, filtering, keyVal) => {
  let entrie = Object.entries(obj).filter(
    (ele) => filtering(ele[keyVal]) && ele
  )
  let result = Object.fromEntries(entrie)
  return result
}

const filterKeys = (obj, filtering) => filterObj(obj, filtering, 0)
const filterValues = (obj, filtering) => filterObj(obj, filtering, 1)

// map
const mapObj = (obj, f, keyVal) => {
  let entrie = Object.entries(obj).map((ele) => {
    if (!keyVal) {
      ele = f(ele)
      return ele
    }
    ele[keyVal - 1] = f(ele[keyVal - 1])
    return ele
  })
  let result = Object.fromEntries(entrie)
  return result
}

const mapKeys = (obj, f) => mapObj(obj, f, 1)
const mapValues = (obj, f) => mapObj(obj, f, 2)
const mapEntries = (obj, f) => mapObj(obj, f)

// reduce
const reduceKey = (obj, f, init) => {
  return Object.keys(obj).reduce(f, init)
}

const reduceValues = (obj, f, init) => {
  return Object.values(obj).reduce(f, init)
}

const reduceEntries = (obj, f, init) => {}
// /* */ //

// filter keys
console.log(filterKeys(obj, (k) => k == 'object'))
console.log(filterKeys(obj, (k) => typeof k == 'string'))
console.log(filterKeys(obj, (k) => /a/.test(k)))
console.log(filterKeys(obj, (k) => k.length <= 4))
console.log(filterKeys(obj, (k) => k == 'country'))

console.log('---filter value----')
// filter values
console.log(filterValues(obj, (v) => typeof v == 'string'))
console.log(filterValues(obj, (v) => Array.isArray(v)))
console.log(filterValues(obj, (v) => typeof v == 'object'))
console.log(
  filterValues(obj, (v) => v && (v.constructor === Object || !v.constructor))
)
console.log(filterValues(obj, (v) => /a/.test(v)))

console.log('---map key----')
// map key
console.log(mapKeys(obj, (k) => `obj_${k}`))

console.log('---map values----')
// map key

// console.log(
//   mapValues(object, (ele) =>
//     typeof ele === 'string' ? `category_2_${ele}` : ele
//   )
// )

// console.log(
//   mapValues(object, (ele) =>
//     typeof ele === 'function' ? () => `record deleted!!` : ele
//   )
// )

// console.log(mapValues(object, (ele) => (!ele ? true : ele)))

// console.log(
//   mapValues(object, (ele) =>
//     ele && (ele.constructor === Object || !ele.constructor)
//       ? mapValues(ele, (v) => `ESP_"${v}"`)
//       : ele
//   )
// )

// console.log(mapValues(object, (ele) => (Array.isArray(ele) ? ele.sort() : ele)))

console.log(
  mapValues(obj, (v) =>
    Array.isArray(v)
      ? v.flat(Infinity)
      : typeof v == 'string'
      ? v.split('')
      : typeof v == 'boolean'
      ? false
      : mapKeys(v, (k) => `depth_${k}`)
  )
)

console.log('---map entries----')
// map entries
console.log(
  mapEntries(obj, ([k, v]) =>
    typeof v == 'string' ? [`obj_${k}`, `value_${v}`] : [`obj_${k}`, v]
  )
)

console.log('---reduce key----')
// reduce entries

console.log(reduceKey(obj, (acc, cr) => acc + ' ' + cr, ''))
console.log(reduceKey(obj, (acc, cr) => acc + ' ' + cr))
console.log(
  reduceValues(
    obj,
    (acc, cr) => {
      acc.push(typeof cr)
      return acc
    },
    []
  )
)

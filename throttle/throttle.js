const _ = require('lodash')

// const throttle = (callback, waitLimit = 0, options = {}) => {
//   let timeOut = 0
//   options = !Object.keys(options).length
//     ? { leading: true, trailing: true }
//     : { ...options }
//   // With normal javascript functions, `this` is bound when the function is called.
//   // With arrow functions, `this` is bound to the context in which the function is originally created.
//   // so we must not use the arrow function here
//   return function (...args) {
//     let context = this
//     if (!timeOut) {
//       if (options.trailing && options.leading) callback.apply(context, args)
//       timeOut = setTimeout(() => {
//         if (
//           (options.trailing && !options.leading) ||
//           (!options.trailing && options.leading)
//         )
//           callback.apply(context, args)
//         timeOut = 0
//       }, waitLimit)
//     }
//   }
// }

let arr = []

const add = (el) => arr.push(el)

const run = (callback, callLimit, nbr) =>
  new Promise((r) => {
    let inter = setInterval(() => callback('element'), callLimit)
    setTimeout(() => {
      clearInterval(inter)
      r(arr)
    }, callLimit * nbr)
  })

run(_.throttle(add, 26), 16, 4).then((v) => {
  console.log(v.length)
  arr = []
  console.log(arr)
  return arr
})
run(_.throttle(add, 26), 16, 6).then((v) => {
  console.log(v.length)
  arr = []
  console.log(arr)
  return arr
})
run(_.throttle(add, 26, { trailing: true, leading: false }), 16, 4).then(
  (v) => {
    console.log(v.length)
    arr = []
    console.log(arr)
    return arr
  }
)
run(_.throttle(add, 30), 20, 10).then((v) => {
  console.log(v.length)
  arr = []
})
run(_.throttle(add, 26, { trailing: false, leading: false }), 16, 2).then(
  (v) => {
    console.log(v.length)
    arr = []
    console.log(arr)
    return arr
  }
)
run(_.throttle(add, 26, { trailing: true, leading: true }), 16, 4).then((v) => {
  console.log(v.length)
  arr = []
  console.log(arr)
  return arr
})

// // limit wait of the function
// // options is an object that indicates whether a function should be invoke
// // on the leading or/and the trailing edge of the wait time
// // timeOut is a variable that has to be global so that its shared

// let timeOut = 0
// // default is leading os it first returns the function
// const throttle = (callback, waitLimit = 0, options = {}) => {
//   options =
//     !Object.keys(options).length || (options.trailing && options.leading)
//       ? { leading: true, trailing: false }
//       : { ...options }
//   // With normal javascript functions, `this` is bound when the function is called.
//   // With arrow functions, `this` is bound to the context in which the function is originally created.
//   // so we must not use the arrow function
//   return function (...args) {
//     let context = this
//     if (!timeOut) {
//       timeOut = setTimeout(() => {
//         if (options.trailing) callback.apply(context, args)
//         timeOut = 0
//       }, waitLimit)
//       if (!options.trailing && options.leading) callback.apply(context, args)
//     }
//   }
// }

// const callArgs = (str) => console.log(str)
// // const callHard = (arr) =>

// const throttling = throttle(callArgs, 2000, { trailing: true, leading: true })

// // setInterval(() => console.log(throttleArgs('merda')), 1000)
// setInterval(() => console.log(throttling('every second')), 1000)
// // setInterval(() => console.log(throttleWithOpTra('merda')), 1000)

const _ = require('lodash')

// const debounce = (func, wait, options = {}) => {
//   let timeout = 0
//   return function (...args) {
//     let context = this
//     let nothing = !Object.entries(options).length
//       ? false
//       : !options.leading && !options.trailing
//     let firstExec = options.leading || (options.leading && options.trailing)
//     // Should the function be called now? If firstExec is true
//     // and not already in a timeout then the answer is: Yes
//     let callNow = firstExec && !timeout

//     // This is the basic debounce behaviour where you can call this
//     // function several times, but it will only execute once
//     // [before or after imposing a delay].
//     // Each time the returned function is called, the timer starts over.
//     clearTimeout(timeout)

//     // Set the new timeout
//     timeout = setTimeout(function () {
//       // Inside the timeout function, clear the timeout variable
//       // which will let the next execution run when in 'firstExec' mode
//       timeout = 0

//       // Check if the function already ran with the firstExec flag
//       if (!firstExec && !nothing) {
//         // Call the original function with apply
//         // apply lets you define the 'this' object as well as the arguments
//         //    (both captured before setTimeout)
//         func.apply(context, args)
//       }
//     }, wait)

//     // Immediate mode and no wait timer? Execute the function..
//     if (callNow && !nothing) func.apply(context, args)
//   }
// }

/*
the wait takes X ms to execute the callback function
if the call time per function is less then the wait, its not gona call the callback function

ex: run(debounce(printStr, 1000), 500, 5).then((v) => v)
// this code will execute the debounce function every 500ms -> 0,5s x 5
// and the wait to call the callback function is 1000ms -> 1s
// so the output is "merda"

but if :
ex: run(debounce(printStr, 1000), 1000, 5).then((v) => v)
// this will execute the function so the output is
// "merda"
// "merda"
// "merda"
// "merda"

{ trailing: true, leading: false } -> executes on the last moment of the wait time
{ trailing: false, leading: true } -> executes on the first moment the function is called
{ trailing: false, leading: false } -> nothing will execute
{ trailing: true, leading: true } -> executes on the first moment the function is called
*/

// const onMouseMove = (e) => {
//   console.clear()
//   console.log(e)
//   console.log('x: ', e.x, 'y: ', e.y)
// }

// // Call the debounced function on every mouse move
// window.addEventListener('mousemove', debounce(onMouseMove, 50))

const add = (arr, el) => arr.push(el)

const print = (str) => console.log(str)
const run = (callback, callLimit, nbr) =>
  new Promise((r) => {
    let arr = []
    let inter = setInterval(() => callback(arr, 1), callLimit)
    setTimeout(() => {
      clearInterval(inter)
      r(arr)
    }, callLimit * nbr)
  })

// run(_.debounce(print, 600, { leading: false, trailing: false }), 1000, 5).then((v) => console.log(v))
// run(_.debounce(print, 600, { leading: true, trailing: false }), 5000, 5).then((v) => console.log(v))
// run(_.debounce(print, 600, { leading: false, trailing: true }), 5000, 5).then((v) => console.log(v))
// run(_.debounce(print, 600, { leading: true, trailing: true }), 5000, 5).then((v) => console.log(v))
// run(_.debounce(print, 600), 1000, 5).then((v) => console.log(v))
// run(_.debounce(print, 5000, { leading: true, trailing: false }), 600, 5).then((v) => console.log(v))

// // executes last thing so pushing somrthing into the array permites us to now if it was executed at last
// run(_.debounce(add, 5000, { leading: false, trailing: true }), 2000, 5).then((v) => console.log(v))
// executes on the first time, same here
run(_.debounce(add, 5000, { leading: true, trailing: false }), 2000, 5).then((v) => console.log(v))
// // executes last thing
// run(_.debounce(add, 50, { leading: true, trailing: true }), 20, 5).then((v) => console.log(v))

//this represents a single moment in time, based on a time value that is the number of milliseconds since 1 January 1970 UTC
//ex: 

let currentTimeSince1970 = Date.now()
let currentDate = new Date(currentTimeSince1970)
//or 
//let currentDate = new Date()

console.log(currentDate)

let selectedDate = new Date('1995-10-04T12:23:00')
console.log(selectedDate)

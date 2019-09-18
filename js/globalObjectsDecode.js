const separetor = require('./helper.js')
//decodeURL 
//the decodeURL() fucntion decodes a URL previously created  by encodeURI() or by a similar routine
var uri = 'http://google.com/?x=шеллы'
var encode = encodeURI(uri)
console.log("encode: ", encode)

try {
    console.log("decode: ", decodeURI(encode))
} catch(e) { // it will catch a malformed URI
    console.error(e)
}

//it exists a encodeURIComponent(), as the name says it encodes a component of a URI
//ex: 
let component = '?ex=exemple'
console.log("encodeURIComponent: ", encodeURIComponent(component))

separetor('-')

//infinity
//the global Infinity property is a number value representing infinity
let bigbignumber = Math.pow(10, 1000)
console.log(bigbignumber)
if (bigbignumber === Infinity) { //or isFinite(bigbignumber)
    console.log("very big number!!")
}
separetor('-')
//the global NaN property is a valur representing Not-A-Number
//ex:
const isORisnt = (x) => {
    if (isNaN(x)) {
        console.log('isn\'t, using isNaN()')
    } else {
        console.log('is, using isNaN()')
    }

    if (Number.isNaN(x)) {
        console.log('is, using Number.isNaN()')
    } else {
        console.log('isn\'t, using Number.isNaN()')
    }
}

isORisnt('no')
isORisnt('1')
isORisnt(1)

separetor('-')

//proxy 
//objbect is used to define custom behavior for fundamental operations
//ex:(property lookup, assignment, enumeration, function invocation, etc)

//var p = new Proxy(target, handler)
const err = new TypeError()
const err1 = new TypeError()
let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if(!Number.isInteger(value)) {
                err.message = 'not int'
            }
            if (value > 200) {
                err1.message = 'not possible, for humans'
            }
        }

        //the default behavior to store the value
        obj[prop] = value
        //successs
        return true 
    }
}

let person = new Proxy({}, validator)

person.age = 30
console.log(person.age)
person.age = 'two'
person.age = 201
console.log(err,'\n', err1)
separetor('-')

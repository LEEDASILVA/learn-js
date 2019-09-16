//json object contains methods for parsing json and converting values to json
//the mathod json.parse, parses a JSON string, constructing the js value or object described by the string
var json = '{"person":"Joao", "age":70}'
jsonObj = JSON.parse(json)

console.log(jsonObj)

console.log(jsonObj.age, "\n", jsonObj.person)

//the JSON.stringify method converts a js object or value to a JSON string, optionally replacing values if a replacer function 
//is specified or optonaly including only the specified properties if a replacer array is specified
let obj = {person:"odilia", age:20}
let string = new String('false') //or 'false'
let bool = new Boolean(false) // or false

let jsonStringify = JSON.stringify(obj)
let jsonStringify1 = JSON.stringify([string, bool, 2, undefined])

console.log(jsonStringify, "\n", jsonStringify1, "\n-------------------------")

//using a function in the method stringify:
const replace = (key, value) => {
    if (typeof value === 'string') {
        return undefined
    }
    return value
}

var foo = {foundation: '01', model: 'software', week: 40, month: 4}

console.log(JSON.stringify(foo, replace))

//basicaly is an object wrapper for a boolean value 
//must not confuse the primitive Boolean with the true and false values of the Boolean object
//ex:

let objBoolean = new Boolean(false)

if(objBoolean) {
    console.log("objBoolean is in: ", objBoolean)
} 

let priBoolean = false

if (priBoolean) {
    console.log("priBoolean is in: ", prinBoolean)
}

//a values that's 0, "", null, undefined, NaN are false
//ex:
let a
let b = null

console.log(Boolean(b))

//more Exemples:

let defineFalse = new Boolean(false)
let trueFalse = Boolean(defineFalse)
console.log(defineFalse, trueFalse)
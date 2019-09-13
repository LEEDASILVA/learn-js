//the function* declaration defines a generator function, which returns a Genarator object
//ex:
function* generator(i) {
    //yield-> defines the value to return from the generator function
            //returns the optional value passed to the generator next() method to resume its execution
    yield i
    yield i + 1
}

const gen = generator(0)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

//if we whated a loop:
function *generatorLoop(i) {
    while(true) {
        yield i++
    }
}
console.log("-----generatorLoop----")
const gen1 = generatorLoop(0)

console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)

//the next() mmethod returns an object with 2 properties done and value, we can also provide a parameter to the next
//gen.next(value)
console.log("return from the next():\n", gen1.next(), "\n")
//The value to send to the generator. The value will be assigned as a result of a yield expression. i.e in [variable] = yield [expression], 
//the value passed to the .next function will be assigned to [variable]
//ex:
function* genNext() {
    while(true) {
        var value = yield null
        console.log("genNext",value)
    }
}

var g = genNext()
g.next(1)
g.next(2)


/*
We want to write a program that prints two numbers: the numbers of cows
and chickens on a farm, with the words Cows and Chickens after them and zeros
padded before both numbers so that they are always three digits long.
007 Cows
011 Chickens

we can make a function that adapts to all types of animals nad not one or two animals
*/

const animals = {"pigs" : 3, "cows" : 15, "chickens": 92}

const farmInventory = (animal, number) => {
    let result = String(number)
    while (result.length < 3) {
        result = "0" + result
    }
    console.log(`${result} ${animal}`)
}

for (let species in animals) {
    farmInventory(species, animals[species])
}

// now if we need to add more species we just need to put it in the object "animals"

//intl
//intl is a n object that's the namespace for the ECMAScript internationalization API
//This provides language sensitive string comparison, number formatting and date and time formatting.

//The intl.Collator
//its a collator constructor, thatenable language sensitive string comparison
//syntax: 
//new Intl.Collator([locales[, options]])
//Intl.Collator.call(this[, locales[, options]])

//ex:
const letterSortByLang = (lang, letters) => {
    letters.sort(new Intl.Collator(lang).compare)
    return letters
}

console.log(letterSortByLang('gsw-u-sd-chzh',['â','ä', 'z', 'ã','a'])) 

//gsw-u-sd-chzh-> Zürich German
//en -> English
//nan-Hant-TW -> Min Nan Chinese

//the Intl.Collator.compare returs a function that compares two strings according to the sort order of the collator object
//this compares returns a number indicating how string1 and string2 compare to each other
//-1 if string1 comes before string2
//1 if string1 comes after string2
//0 if they are equal
let order = ['Offenbach', 'Osterreich', 'Odenwald']
let collator = new Intl.Collator('de-u-co-phonebk')
order.sort(collator.compare)
console.log(order.join(', '))

//filter, filters each element of a given array
//this will find matching strings in arrays

let a = ['Congrès', 'congres', 'Assemblée', 'poisson']
let collator2 = new Intl.Collator('fr', {usage: 'search', sensitivity: 'base'})
let s = 'congres'
let matches = a.filter(d => collator2.compare(d, s) === 0)

console.log(matches.join(', '))

//to now the locale we can use Intl.NumberFormat
//ex:

let numberGer = new Intl.NumberFormat('gsw-u-sd-chzh')
let numberFr = new Intl.NumberFormat('fr')

console.log(numberFr.resolvedOptions())

console.log(numberGer.resolvedOptions().numberingSystem)
console.log(numberFr.resolvedOptions().numberingSystem)

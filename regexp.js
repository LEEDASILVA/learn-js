const devision = title => {console.log(`\n------------${title}-------------`)}

let string = 'all your base are belong to us'
let regex = /base/
let faildString = ' all you are belong to us'
// see if a smaller string exists in a bigger string
// using `test`
const isExisting = str => regex.test(str)
console.log(string, regex, isExisting(string))
console.log(faildString, regex, isExisting(faildString))


devision('^$ sign')
string = 'baseaaa'
faildString = '-base-'
regex = /^base/
console.log(string, regex, isExisting(string))
console.log(faildString, regex, isExisting(faildString))

regex = /base$/
string = 'aaabase'
console.log(string, regex, isExisting(string))
console.log(faildString, regex, isExisting(faildString))

string = 'base'
regex = /^base$/
console.log(string, regex, isExisting(string))
console.log(faildString, regex, isExisting(faildString))

devision('[] and + * ?')

string = 'my name is something and my age is 24'
faildString = 'my name is Smething and my age is 24'

// will find the match in wich the 'name is [a-z]+' is the substring of all the letter form
// a -> z and the + is that can be one or more matchs of [a-z]
regex = /name is [a-z]+/

// fuctions that return the match
// the exec return an array of information from the regex expression
const match = str => {
    let arr = regex.exec(str)
    arr == null ? console.log(arr, 'erro!!') : console.log('result ->', arr[0])
}

console.log(string, regex, isExisting(string))
match(string)
console.log(faildString, regex, isExisting(faildString))
match(faildString)

faildString = 'my name is somethin and my age is 24'
faildString2 = 'my name is somethi1 and my age is 24'
regex = /my name is something?/

console.log(regex)
match(string)
match(faildString)
match(faildString2)

devision('{size}')

regex = /name is [a-z]{1,3}/

console.log(string, regex, isExisting(string))
match(string)

devision('grouping ()')

string = 'name is something'
regex = /name is ([a-z]+)/
const matchName = regex.exec(string)

// the array obtain from the regex expression
// contains in the position 1 the grouped expression
console.log(matchName)
const name = matchName[1]
console.log(name)

devision('small and more complex example')

string = `
HELLO, LOOK_AT mp3 YOU 
qw12_3file.mp3
fe.mp4
fle.mov
fie.pdf
le.mp3
le.pdf
fle.mp3
fe.pdf
e.pdf
fi.mp3`

//regex = /(\w+)\.mp3/
regex = /\w+\.mp3/g

let match1 = string.match(regex)

console.log('----------', match1, '----------')

while (match1) {
    const files = match1[1]
    console.log(match1)
    console.log(files)
    match1 = regex.exec(string)
}
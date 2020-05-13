// 1. `^$` and normal characters: `/bcd/`, `/^abc/`, `/def$/`-> 'abcdef'
// use the same data-set for all the exercises
// basics ^$

/**
 * ## short-hand
 *
 * ### Instructions
 *
 * Write a regex expression that covers the short-hand notation :
 *
 * - \Ww
 * - \Dd
 * - \Ss
 * - \Bb
 *
 * ### Notions
 *
 * - regex
 */

///*/// ⚡

///*/// ⚡

// ideas
// 1

// "the principle of short-hand and quantifiers, students must find all files using an extension '.mp3' '.pdf' ....
// example : `\w+\.mp3`

// HELLO, LOOK_AT mp3 YOU
// qw12_3file.mp3
// fe.mp4
// fie.pdf
// le.mp3
// le.pdf
// fle.mp3
// fe.pdf
// fi.mp3
// -> [ 'qw12_3file.mp3', 'le.mp3', 'fle.mp3', 'fi.mp3' ]

// 2

// using positive lookbehind and negative look behind
// decipher

// . or /w
let str = `E$#$"/&$n=))(cry@£]¬\pti"#$[}]on ]½}[½}@wo.,ººrks."#$!}@£§ Prope"$#%$&/rl$&%y #$%#impl)(==em{[]ent{[]$&#%ed ½§£½{s(%/tr%(&%/&#$"ong@£§{ c¹@£@|!"#$rypt|!"$#%$&%o %$&#%sy/(/&%#$st&/()em(//&s !"#"&/(()ar/)((/e o#%&/((n§½¬{e #$%o#&f the &#$%few things !#$%&/(/t%&%%hat "#$&/y#%$#"%ou c»»?=)(/&a<<n rel"#$y on. Un>>>>>><<"#$fort"#$%%"un"%#ately,
 e%&/&%ndpo$%&%"#int<<<<> se?)((cu)(%/$&%rity{½@<< i=)(/s s"#&o #$%/()=)=/)(/&$ter§{[{%$&%"$rifi½£§½£¬§ca&#$&/()&ll"#$""#$y we$#"%&/()][{£§½§¬{ak $/&()%$#th"#$"#at NS"#$&%$&A "#$@£½¬{c#$%/&an fre%&/)(&//&%%#que"$#%%&/&ntl#$%/&#%5y "#$&/&(&(fi#$%&//%nd§£¬½§{ wa{[{½#$&ys#$%&/( aro#$&/(/&und$%& i$/&(/)($#%t.`

let regex = /[\w-\s]/g
console.log(str.match(regex).join(""))
str = 'e$%.,nc(&=)r("#%$y:{[p]}t,'
console.log(str.match(regex).join(""))

// 3 more advance

// valid-ip
// (([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])+(:\d+)*

/*
## valid-ip

### Instruction

Write a function called `findIP` that search for a valid IP with or without a port in a string passed as parameter

A valid IP has the following format :

- Must be in the form of xxx.xxx.xxx.xxx
- xxx is a number from 0-255
- You cannot have a 0 before a number, example 0xx
*/
const findIP = str => {
  let regex = /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])+(:\d+)*/g
  return str.match(regex)
}
const dataSet = `qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you qq 233.123.12.234 qw w wq wqw  wqw  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsd https://devdocs.io/javascript/global_objects/object/fromentries njnkfsdjnk sfdjn fsp fd192.168.1.123:8080 https://devdocs.io/javascript/global_objects/regexp/@@split
htpp://wrong/url hello %$& wf* ][½¬ http://correct/url?correct=yes è[}£§ https://nan-academy.github.io/js-training/?page=editor#data.nested 255.256.1233.2
ssages has become an accepted http://hummm/how?how=come&same=[123,21]&you=nextperson&id=123312&next=123DSAD&ok=true&notOk=true part of many cultures, as happened earlier with emailing. htt://[1] This makes texting a quick and http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy way to communicate 255.256.2 with friends, family and colleagues, including 255.256.555.2 in contexts where a call would be when one knows the other person is busy 192.169.1.23 with family or work activities).; 172.01.123.254:1234
for example, to order products or 10.1.23.7 http://www_example.com/
services fromhttps://regex-performance.github.io/exercises.html
this permits communication even between busy individuals255.253.123.2:8000 https: // . Text messages can also http:// be used to http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact with automated systems,https:// regex -performance.github.io/ exercises.html172.01.123.999:1234
https//nan-academy.github.io/js-training/?page=editor#data.nested impolite or inappropriate (e.g., calling very late at night orhttp://localhost/exercises
https://192.168.1.123?something=nothing&pro=[23] htts:/nan-academy.github.io/js-training?b=123&a=123/?page=editor#data.nested  Like e-mail and voicemail and unlike calls https://www.notherExample.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot&id=3&qwe=ty (in which the caller hopes to speak directly with the recipient),
http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot texting does not require the caller and recipient to both be free at the same moment0.0.0.0`

console.log("valid IP ->", findIP(dataSet))
// 4 more advance
// remove duplicates

// 5

// same-amount

// see if the string contains same amount of on string and another string x and o's
const sameAmount = (str, first, second) => {
  let reg = new RegExp(first, "g")
  let reg1 = new RegExp(second, "g")
  let x = str.split(reg).length
  let o = str.split(reg1).length
  console.log(x, o)
  return x === o
}

const sameAmount11 = (str, first, second) => {
  let size
  let size1
  for (let i = 0; i < str.length; i++) {
    ;(str.charAt(i) == first) & size++
    ;(str.charAt(i) == second) & size1++
  }
  console.log(size, size1)
  return size === size1
}

let forbidden = /while|for|[\[\]\(\)]/g
let merdas = "some jkdfs"
console.log("test--->", !forbidden.test(merdas))

let data =
  "qqqqqqq q qqqqqqqqqqqq q qq  qw w wq wqw  wqw  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd"

// console.log(
//   "start",
//   sameAmount(data, "i", "p"),
//   !sameAmount(data, "h", "w"),
//   sameAmount(data, "qqqq ", "qqqqqqq"),
//   !sameAmount(data, "q ", "qqqqqqq"),
//   sameAmount(data, "fs", "q "),
//   !sameAmount(data, "fs", "q"),
//   sameAmount(data, "j", "w"),
//   sameAmount("hello how are you", "l", "e"),
//   sameAmount("hello how are you", "h", "e"),
//   sameAmount("hello how are you", "he", "ho")
// )
console.log(
  sameAmount11(data, "i", "p"),
  !sameAmount11(data, "h", "w"),
  sameAmount11(data, "qqqq ", "qqqqqqq"),
  !sameAmount11(data, "q ", "qqqqqqq"),
  sameAmount11(data, "fs", "q "),
  !sameAmount11(data, "fs", "q"),
  sameAmount11(data, "j", "w"),
  sameAmount11("hello how are you", "l", "e"),
  sameAmount11("hello how are you", "h", "e"),
  sameAmount11("hello how are you", "he", "ho")
)

console.log(sameAmount(data, "", ""))

// 6

// Greedy

// all greedy quantifiers

/*
## greedy

### Instruction

Create a regex that can fine all URLs from a string, the URLs can be secure or not, so HTTP or HTTPS


### Notes

- quantifiers


use URLs schemes
+ -> |
     |-> find one exercise for both quantifiers
* -> |      - return a boolean ?
            - one that as **one or more** and another that as **zero or more**

{n,m} n >= 0 ^ m >= n
{n,} n >= 0

solution:

1 - https*:\/\/\S*
2 - maybe web protocols
*/

const getURL = data => {
  let regex = /https*:\/\/\S+/g
  return data.match(regex)
}

const greedyQuery = data => {
  let regex = /https*:\/\/\S+\?(\S+=\S+\&*){3,}/g
  return data.match(regex)
}

const notSoGreedy = data => {
  let regex = /https*:\/\/\S+\?(\w+=[^&\r\n\t\f\v ]+&*){2,3}/g
  let result = data.match(regex)
  for (let i = 0; i < result.length; i++) {
    if (result[i].charAt(result[i].length - 1) == "&") {
      result.splice(i, 1)
      i = i - 1
    }
  }
  return result
}

console.log(getURL(dataSet))
console.log(greedyQuery(dataSet))
console.log(greedyQuery(""))
console.log(notSoGreedy(dataSet))

// **USE JUST `SPLIT` AND `TEST` AND `REPLACE` NEVER MATCH OR EXEC**
/*
  $|^            // basic
  . /Ss/Ww/Bb/Dd // shorthands
  +*{}           // quantifiers
  [][^]          // character-class
  ()\1           // group
  ?
    {0,1}        // optionnal
    (?:)         // non-capturing group
    (?=)         // positive lookahead
    (?!)         // negative lookahead
    (?<=)        // positive lookbehind
    (?<!)        // negative lookbehind

auxilio


aaaaaaaaaaaaaaa
01101010010100101010010101
[^01]
ola como tas, amerda/alguem ai??? parece que não!!!
ola como tas, [a-z-\/]+*

    */

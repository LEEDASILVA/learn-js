// strings

let str = "something \n new line using \"\""
let str1 = 'something \n new line using \'\''
let templateLiterals = `something
 new line using ${str+str1}`
console.log(str)
console.log(str1)
console.log(templateLiterals)

////////////////////////////
// example of a Tag function
////////////////////////////
var person = "Mike";
var age = 28;

const myTag = (strings, personExp, ageExp) => {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
};

var output = myTag`That ${person} is a ${age}`;

console.log(output);

console.log(`ola\` " \\ n "`)
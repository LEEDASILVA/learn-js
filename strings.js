// strings

/*
// nesting templates one way
var classes = "header";

classes += isLageScreen()
  ? ""
  : item.isCollapsed
  ? " icon-expander"
  : " icon-collapser";

classes;

// better way
const secondClasses = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;*/

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

// Tag functions don't need to return a strings
function template(strings, ...keys) {
  return function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    console.log(result);
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure("Y", "A"); // "YAY!"
var t2Closure = template`${0} ${"foo"}!`;
t2Closure("Hello", { foo: "World" });

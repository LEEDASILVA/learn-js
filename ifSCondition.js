// the if condition can be
const ternary = isMember => {
  return isMember ? "2" : "10";
};

const single = isMember => {
  if (isMember) {
    return 2;
  }
  return 10;
};

console.log(ternary(true));
console.log(ternary(false));
console.log(ternary(1));

console.log(single(true));
console.log(single(false));
console.log(single(1));

console.log('----------------')

const greeting = person => {
  var name = person ? person.name : "stranger";
  return "Howdy, " + name;
};

console.log(greeting({ name: "Alice" }));
console.log(greeting(null));

// if ... else if ....else ...... chain
const example = str => {
  return str.includes('hello')
    ? 'very polite'
    : str.includes('you')
    ? 'not very polite'
    : str.includes('please')
    ? 'to polite hummm'
    : 'shy';
};

console.log('----------------')

// Equivalent to:
const example2 = str => {
  if (str.includes('hello')) {
    return 'very polite';
  } else if (str.includes('you')) {
    return 'not very polite';
  } else if (str.includes('please')) {
    return 'to polite hummm';
  } else {
    return 'shy';
  }
};

console.log(example('hello man'))
console.log(example('you do that right now'))
console.log(example('please...'))
console.log(example('...'))
console.log('---- wiht normal if...else ----')
console.log(example2('hello man'))
console.log(example2('you do that right now'))
console.log(example2('please...'))
console.log(example2('...'))
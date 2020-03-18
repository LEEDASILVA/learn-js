// using for loops
const loopingForTriangle = (char, howMany) => {
  let result = ""
  for (let i = 0; i < howMany; i++) {
    for (let j = 0; j <= i; j++) {
      result += char
    }
    result += "\n"
  }
  return result
}

// using while loops
const loopingWhileTriangle = (char, howMany) => {
  let result = ""
  let i = 0

  while (i < howMany) {
    let j = 0
    while (j <= i) {
      result += char
      j++
    }
    result += "\n"
    i++
  }
  return result
}

// using recursion
const loopingRecursionTriangle = (char, howMany) => {
  if (howMany == 0) return '\n'
  return loopingRecursionTriangle(char + '*', howMany-1) + char + '\n'
}

console.log(loopingForTriangle("#", 15))
console.log(loopingWhileTriangle("0", 30))
console.log(loopingRecursionTriangle("*", 100))

/*
Consider this puzzle: by starting from the number 1 and repeatedly either
adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
would you write a function that, given a number, tries to find a sequence of
such additions and multiplications that produces that number?
For example, the number 13 could be reached by first multiplying by 3 and
then adding 5 twice, whereas the number 15 cannot be reached at all.

ex :
    console.log(findexpression(24))
    // result -> (((1*3) + 5) * 3)
*/

// this solution just find simple solutions the first solution not the shortest
// need to do it to find the shorter solution
const add4 = "+4"
const mul2 = "*2"

const findexpression = nbr => {
  return find(1, "1", nbr)
}

const find = (current, history, target) => {
  return current == target
    ? history
    : current > target
    ? null
    : find(current + 4, `${history} ${add4}`, target) ||
      find(current * 2, `${history} ${mul2}`, target)
}

const isExpression = result =>
  result
    .split(" ")
    .reduce((total, op) => (op === "+4" ? parseInt(total) + 4 : total * 2))

console.log(isExpression(findexpression(2)))
console.log(isExpression(findexpression(4)))
console.log(isExpression(findexpression(6)))
console.log(isExpression(findexpression(8)))
console.log(isExpression(findexpression(84)))
console.log(isExpression(findexpression(100)))
console.log("-----")
console.log(isExpression(findexpression(280)))
console.log(isExpression(findexpression(110)))
console.log(isExpression(findexpression(144)))
console.log(isExpression(findexpression(200)))
console.log(isExpression(findexpression(104)))
console.log("-----")

console.log(findexpression(10))
console.log(isExpression(findexpression(10)))
console.log(isExpression(findexpression(12)))

console.log(findexpression(7))
console.log(findexpression(63))
console.log(findexpression(23))
console.log(findexpression(103))

const code = `const findExpression = nbr => {
  return find(1, '1', nbr)
}

const find = (current, history, target) => {
  return current == target
    ? history
    : current > target
    ? null
    : find(current + 4, \`\${history} +4\`, target) ||
      find(current * 2, \`\${history} \${mul2}\`, target)
}
`
console.log(
  !(/[5-9]/g.test(code)),
  code.includes("add4"),
  code.includes("mul2"),
  (!(/[5-9]/g.test(code)) && code.includes("add4") && code.includes("mul2"))
)

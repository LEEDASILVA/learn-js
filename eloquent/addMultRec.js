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
const findexpression = nbr => {
  return find(1, "1", nbr)
}

const find = (current, history, target) => {
  return current == target ? history
    : current > target ? null
    : find(current + 5, `(${history} + 5)`, target) ||
      find(current * 3, `(${history} * 3)`, target)
}

console.log(findexpression(64))

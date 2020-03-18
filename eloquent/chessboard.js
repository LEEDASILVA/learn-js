// Chessboard

const Chessboard = (size, black, white) => {
  let board = ""
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      board += j % 2 == i % 2 ? black : white
    }
    board += '\n'
  }
  return board
}

console.log(Chessboard(8, '0', 'O'))

const power = (base, exp) => {
    return exp == 0 ? 1 : power(base, exp-1) * base
}

console.log(power(2, 10))

const isNum = value => {
  console.log(typeof value)
  return (typeof value) == 'number'
}
const isStr = value => {
  console.log(typeof value)
  return typeof value == String
}
const isBool = value => {
  console.log(typeof value)
  return typeof value == Boolean
}
const isUndef = value => {
  console.log(typeof value)
  return typeof value == undefined
}

console.log(isNum(1))
console.log(isStr('1'))
console.log(isBool(true))
console.log(isUndef())
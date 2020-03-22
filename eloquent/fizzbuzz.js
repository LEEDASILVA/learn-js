const fizzbuzz = (size) => {
  let result = ""
  for (let i = 1; i <= size; i++) {
    i % 15 == 0 ? result += "FizzBuzz " :
    i % 3 == 0 ? result += "Fizz " :
    i % 5 == 0 ? result += "Buzz " : result += i + " "
  }
  console.log(result)
}

// or
const fizzbuzzRec = i => {
  if (i == 0) return ""
  return i % 3 == 0 && i % 5 == 0
    ? fizzbuzzRec(i - 1) + "FizzBuzz "
    : i % 3 == 0
    ? fizzbuzzRec(i - 1) + "Fizz "
    : i % 5 == 0
    ? fizzbuzzRec(i - 1) + "Buzz "
    : fizzbuzzRec(i - 1) + i + " "
}

fizzbuzz(100)
console.log(".....--or--.....")
console.log(fizzbuzzRec(100))
console.log()
fizzbuzz(300)
console.log(fizzbuzzRec(300))

// "FizzBuzz"

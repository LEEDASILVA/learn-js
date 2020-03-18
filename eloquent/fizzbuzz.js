// one way
const fizzbuzzNormalIf = () => {
    let result=''
    for (let i = 1; i <= 100; i++) {
        if (i%3 == 0) {
            result += 'Fizz'
            continue
        }
        if (i%5 == 0) {
            result += 'Buzz'
        } else {
            result += ' ' + i + ' '
        }
    }
    console.log(result)
}

// or

const fizzbuzz = () => {
    let result=''
    for (let i = 1; i <= 100; i++) {
         i%3==0 ? result += 'Fizz'
        : i%5==0 ? result += 'Buzz'
        : result += ' ' + i + ' '
    }
    console.log(result)
}

// or

const fizzbuzzRec = i => {
    if (i == 0) return
    return i%3==0 ? fizzbuzzRec(i-1) += 'Fizz'
    : i%5==0 ? fizzbuzzRec(i-1) += 'Buzz'
    : fizzbuzzRec(i-1) += ' ' + i + ' '
}

fizzbuzzNormalIf()
console.log('.....--or--.....')
fizzbuzz()
console.log('.....--or--.....')
console.log(fizzbuzzRec(100))
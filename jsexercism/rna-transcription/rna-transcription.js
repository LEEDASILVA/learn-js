
export const toRna = DNA => {
  const complement = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U",
  }
  let result = ''
  let splitDNA = DNA.split('')
  splitDNA.forEach(ele => {
    result += complement[ele]
  })
  return result
}

console.log(toRna('GCTA'))
// using for loops
const forPyramid = (char, depth) => {
  let result = ""
  let sizeof = char.length

  for (let i = 1; i <= depth; i++) {
    let aux = ""
    for (let j = 1; j <= 2 * i - 1; j++) {
      aux += char
    }
    result += aux.padStart(depth * sizeof + i * sizeof - sizeof, " ")
    if (i != depth) result += "\n"
  }
  return result
}

// using recursion
const recursionPyramid = (char, depth) => {
  if (depth == 0) return "\n"
  return recursionPyramid(char + "*", depth - 1) + char + "\n"
}

console.log(forPyramid("a", 5))
console.log(forPyramid("+", 10))
console.log(forPyramid("#", 4))
console.log(forPyramid("{}", 13))
console.log(forPyramid("ABC", 7))
console.log(forPyramid("<^>", 30))

// Begin of tests
const assert = require("assert").strict

assert.strictEqual(typeof forPyramid, "function")
assert.strictEqual(forPyramid.length, 2)
assert.strictEqual(
  forPyramid("a", 5),
  "    a\n   aaa\n  aaaaa\n aaaaaaa\naaaaaaaaa\n"
)
assert.strictEqual(
  forPyramid("+", 10),
  "         +\n        +++\n       +++++\n      +++++++\n     +++++++++\n    +++++++++++\n   +++++++++++++\n  +++++++++++++++\n +++++++++++++++++\n+++++++++++++++++++\n"
)
assert.strictEqual(forPyramid("#", 4), "   #\n  ###\n #####\n#######\n")
assert.strictEqual(
  forPyramid("{}", 13),
  "                        {}\n                      {}{}{}\n                    {}{}{}{}{}\n                  {}{}{}{}{}{}{}\n                {}{}{}{}{}{}{}{}{}\n              {}{}{}{}{}{}{}{}{}{}{}\n            {}{}{}{}{}{}{}{}{}{}{}{}{}\n          {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}\n        {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}\n      {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}\n    {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}\n  {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}\n"
)
assert.strictEqual(
  forPyramid("ABC", 7),
  "                  ABC\n               ABCABCABC\n            ABCABCABCABCABC\n         ABCABCABCABCABCABCABC\n      ABCABCABCABCABCABCABCABCABC\n   ABCABCABCABCABCABCABCABCABCABCABC\nABCABCABCABCABCABCABCABCABCABCABCABCABC\n"
)
assert.strictEqual(
  forPyramid("<^>", 30),
  "                                                                                       <^>\n                                                                                    <^><^><^>\n                                                                                 <^><^><^><^><^>\n                                                                              <^><^><^><^><^><^><^>\n                                                                           <^><^><^><^><^><^><^><^><^>\n                                                                        <^><^><^><^><^><^><^><^><^><^><^>\n                                                                     <^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                                                  <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                                               <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                                            <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                                         <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                                      <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                                   <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                                <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                             <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                          <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                       <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                    <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                                 <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                              <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                           <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                        <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                     <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n                  <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n               <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n            <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n         <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n      <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n   <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n<^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>\n"
)
// End of tests

console.log("  \u001b[32;1m✓ " + "" + "passed")

/**
 *
 * I'm sorry, but I don't want to be an emperor.
 * That's not my business. I don't want to rule or conquer anyone.
 *  I should like to help everyone if possible; Jew, Gentile, black man, white.
 * We all want to help one another.
 *  Human beings are like that. We want to live by each other's happiness, not by each other's misery.
 *  We don't want to hate and despise one another. In this world there is room for everyone, and the good earth is rich and can provide for everyone.
 *  The way of life can be free and beautiful, but we have lost the way. Greed has poisoned men's souls,
 * has barricaded the world with hate, has goose-stepped us into misery and bloodshed.
 *  We have developed speed, but we have shut ourselves in. Machinery that gives abundance has left us in want.
 *  Our knowledge has made us cynical; our cleverness, hard and unkind. We think too much and feel too little.
 * More than machinery, we need humanity. More than cleverness, we need kindness and gentleness. Without these qualities,
 *  life will be violent and all will be lost. The airplane and the radio have brought us closer together.
 * The very nature of these inventions cries out for the goodness in men; cries out for universal brotherhood;
 *  for the unity of us all. Even now my voice is reaching millions throughout the world, millions of despairing men, women,
 * and little children, victims of a system that makes men torture and imprison innocent people. To those who can hear me,
 *  I say, do not despair. The misery that is now upon us is but the passing of greed, the bitterness of men who fear the way of human progress.
 *  The hate of men will pass, and dictators die, and the power they took from the people will return to the people.
 * And so long as men die, liberty will never perish. Soldiers! Don't give yourselves to brutes, men who despise you, enslave you;
 *  who regiment your lives, tell you what to do, what to think and what to feel! Who drill you, diet you, treat you like cattle,
 *  use you as cannon fodder. Don't give yourselves to these unnatural men - machine men with machine minds and machine hearts!
 *  You are not machines, you are not cattle, you are men! You have the love of humanity in your hearts! You don't hate! Only the unloved hate; the unloved and the unnatural.
 * Soldiers! Don't fight for slavery! Fight for liberty! In the seventeenth chapter of St. Luke, it is written that the kingdom of God is within man, not one man nor a group of men, but in all men!
 *  In you! You, the people, have the power, the power to create machines, the power to create happiness! You, the people, have the power to make this life free and beautiful,
 * to make this life a wonderful adventure. Then in the name of democracy, let us use that power. Let us all unite. Let us fight for a new world, a decent world that will give men a chance to work,
 * that will give youth a future and old age a security. By the promise of these things, brutes have risen to power. But they lie! They do not fulfill that promise.
 *  They never will! Dictators free themselves but they enslave the people. Now let us fight to fulfill that promise.
 * Let us fight to free the world! To do away with national barriers! To do away with greed, with hate and intolerance!
 * Let us fight for a world of reason, a world where science and progress will lead to all men's happiness.
 * Soldiers, in the name of democracy, let us all unite!”
 */

# regular expressions

## creating a regular expression

- using a regular expression literal, which consists of a pattern enclosed between slashes, so to use regular expressions you need to use in between it `/regular expression/`

```javascript
let reg = /ab+c/
```

- you can use the constructor function `RegExp('regular expression')`.

## writing a regular expression pattern

- So regex is a way matching patters in a string

- the `^` sign it's used to specify the start of the string has to match the start of the expression

- the `$` sign it's used to assign the end of the `string`

- the `[a-z]` is all the letter from a to z lower case

- the `+` sign is 1 or more, the `*` is 0 or more
  - `*` Repeats the previous item zero or more times. Greedy, so as many items as possible will be matched before trying permutations with less matches of the preceding item, up to the point where the preceding item is not matched at all.

  - basically the difference is that `*` matches an empty string while `+` doesn't.

- the `?` it's when the rune or the expression is optional

- the `{1,3}` this will give a limit to the expression, let say that it gives the length of the string you what to match

  - {n,m} where n >= 0 and m >= n -> Repeats the previous item between n and m times. Greedy, so repeating m times is tried before reducing the repetition to n times.

  - {n,} where n >= 0 -> Repeats the previous item at least n times. Greedy, so as many items as possible will be matched before trying permutations with less matches of the preceding item, up to the point where the preceding item is matched only n times.

  - {,m} where m >= 1 -> Repeats the previous item between zero and m times. Greedy, so repeating m times is tried before reducing the repetition to zero times.

- `\Bb` metacharacter is used to find a match at the beginning or end of a word.

- `\d` is the same of saying `[a-zA-Z0-9_]` so everything from a to z lower and upper case, numbers and underscore -> [0-9]

- `\s` matches the spaces

- `\n` matches the newlines

- `\t` matches the tabs

- `\w` matches the works -> [A-Za-z0-9]

- `\g` global all the matches in the string

- grouping -> `()` useful for obtaining values of a string for example:

```javascript
const string = 'name is something'
const regex = /name is ([a-z]+)/

const match = regex.exec(string)

const name = match[1]
console.log(name)
// something
```

 so the regex will get the match from a string that has one or more letters from a to z, saves it in an array where the first position is the name

## **you can see all this in the regexp.js**

-------

**js-piscine**

## Regular expressions -> **regex**

1. `^$` and normal characters: `/bcd/`, `/^abc/`, `/def$/`-> 'abcdef'



2. `.` `/Ss/Ww/Bb/Dd` special rules, `.` is everything, S = space, B = boundery, D = digit etc...

3. `+*{}` repeat rules

4. `[]` literal char list, and the negate `[^]`

5. `(|)` groups with `|` and back ref `\1`

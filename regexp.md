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

- the `?` it's when the rune or the expression is optional

- the `{1,3}` this will give a limit to the expression, let say that it gives the length of the string you what to match

- `\d` is the same of saying `[a-zA-Z0-9_]` so everything from a to z lower and upper case, numbers and underscore

- `\s` matches the spaces

- `\n` matches the newlines

- `\t` matches the tabs

- `\w` matches the works

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

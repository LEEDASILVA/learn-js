# text

## single quotes & double quotes

- In js, you can choose single quotes or double quotes to wrap the string in

```javascript
let sq = 'text'
let dq = "text"

sq // 'text'
dq // 'text'

typeof sq // 'string'
typeof dq // 'string'
```

## Numbers & strings

```javascript
let v = 'ola' + 123
v // 'ola123'
```

- if you have a number that you want to convert to a string but not change otherwise, or a string that you want to convert to a number but not change otherwise. You can use :

```javascript
let str = '123'
let nbr = Number(str)

typeof nbr // 'int'
typeof str // 'string'
```

# STRINGS

- A string can be string literals `'string text'` or be created using the **String** global object `String(text)'`, `text` being anything to be converted to a string.

## Template literals

- Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

```javascript
`string text`

`string ${expression} text`

`\`` === '`' // true

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
```

- A more advanced form of template literals are tagged templates. Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions. In the end, your function can return your manipulated string

- **the rest can be seen on strings.js**

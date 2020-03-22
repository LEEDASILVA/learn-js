# js

## difference between str[0] and str.charAt(0)

-But you should use charAt() because, it is well supported in all the major browsers, while the bracket notation will return undefined in IE7

Also, the bracket notation is simply accessed, while charAt() does some validation and doesn't return undefined, but will return an empty string ""

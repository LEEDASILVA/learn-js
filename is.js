const is = {}

/*
## Is

### Instructions

Add new function properties to the object `is`` to check a value type
- `is.num` value is a number
- `is.nan` value is NaN
- `is.str` value is a string
- `is.bool` value is a boolean
- `is.undef` value is undefined
- `is.def` value is defined
- `is.arr` value is an array
- `is.obj` value is a simple object or null objects
- `is.fun` value is a function
- `is.truthy` value is truthy
- `is.falsy` value is falsy

### Notions

- Primitive and operators
- https://devdocs.io/javascript/operators/typeof
- https://developer.mozilla.org/en-US/docs/Glossary/Truthy
- https://developer.mozilla.org/en-US/docs/Glossary/Falsy

///*/// ⚡



is.num = value => typeof value == 'number'
// NaN is the only primitive that is not equal to nothing
// so NaN === NaN is false
is.nan = value => value != value
is.str = value => typeof value == 'string'
is.bool = value => typeof value == 'boolean'
is.fun = value => typeof value == 'function'
is.undef = value => typeof value == 'undefined'
is.arr = value => Array.isArray(value)
is.truthy = value => !!value
is.falsy = value => !value
is.def = value => !is.undef(value)
is.obj = value => {
  return typeof value === "object" && !Array.isArray(value) && value !== null
}
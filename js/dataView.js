//the dataView view provides a low-level interface for reading
//and writting multiple number types in a binary ArrayBuffer.

let buffer = new ArrayBuffer(16)

let view = new DataView(buffer)
let view1 = new DataView(buffer, 10, 4)

view.setInt8(3, 10) // de secound value is heaxadecimal

console.log(view1.getInt8(0), '\n', buffer)

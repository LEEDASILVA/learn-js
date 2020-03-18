export const decodedValue = arrColor => {
  calorCode = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  ];

  code = calorCode.indexOf(arrColor[0]).toString(10)
  code += calorCode.indexOf(arrColor[1]).toString(10)
  return code
}

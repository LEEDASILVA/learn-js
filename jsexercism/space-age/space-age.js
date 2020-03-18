const planetAPI = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

const eathOrbitPer = 31557600

const age = (planet, seconds) => {
  let foo = seconds / ((eathOrbitPer)*planetAPI[planet.toLowerCase()]);
  return parseFloat(foo.toFixed(2));
};
console.log(age('mercury', 2134835688));
console.log(age('earth', 1000000000))
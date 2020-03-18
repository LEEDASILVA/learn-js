//                               year,month,day,hou,min,sec,milsec
// const utcDate2 = new Date(Date.UTC(95, 3, 10, 7, 7, 7));
// console.log(utcDate2.toUTCString());
// "Mon, 10 Apr 1995 07:07:07 GMT"
// so js outputs dates in miliseconds (10^3)
const gigasecond = date => {
  const foo = date.getTime()
  return new Date(foo + Math.pow(10,12))
};

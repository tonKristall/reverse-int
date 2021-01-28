module.exports = function reverse(n) {
  if (n < 0) {
    n = -n;
  }
  let str = String(n);
  let strarr = str.split("");
  let newstr = [];
  for (i = strarr.length - 1; i >= 0; i--) {
    newstr.push(strarr[i]);
  }
  newn = newstr.join("");
  return newn;
}

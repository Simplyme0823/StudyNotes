/** @format */

const map = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var convertToTitle = function (n) {
  let result = "";
  while (n > 0) {
    n--;
    result = map[n % 26] + result;
    n = Math.floor(n / 26);
  }
  return result;
};

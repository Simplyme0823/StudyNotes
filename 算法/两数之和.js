/** @format */

const val = [0, 1, 5, 11, 17, 16, 2, 5, 10, 30];

function find(input, target) {
  const map = {};
  const res = [];
  input.forEach((item, index) => {
    map[target - item] = index;
    if (map[item] || map[item] === 0) {
      res.push(`${map[item]}-${index}`);
    }
  });
  return res;
}
const res = find(val, 12);
console.log(res);

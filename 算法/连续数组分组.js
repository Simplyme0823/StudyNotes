/** @format */

// [1,2,3,5,6,9,10]=>[[1,2,3],[5,6],[9,10]]

function partition(arr) {
  let temp = [];
  let start = 0;
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    if (arr[i] - arr[i - 1] !== 1) {
      temp.push(arr.slice(start, i));
      start = i;
    }
  }
  temp.push(arr.slice(start));
  return temp;
}
const res = partition([1, 2, 3, 5, 6, 9, 10]);
console.log(res);

const reg = /\d{1,3}(?=(\d{3})+$)/g;

const res_ = "1234567890".replace(reg, a => {
  return `${a},`;
});
console.log(res_);

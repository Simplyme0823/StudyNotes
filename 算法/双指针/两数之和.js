/** @format */

// 数组已经从小到大排列

function find(input, target) {
  let start = 0;
  let end = input.length - 1;
  while (start < end) {
    if (input[start] + input[end] > target) {
      end--;
    } else if (input[start] + input[end] < target) {
      start++;
    } else {
      return `${start}-${end}`;
    }
  }
  return false;
}

const res = find([1, 3, 4, 6, 8], 10);
console.log(res);

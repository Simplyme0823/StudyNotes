/** @format */
const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
function add(num1, num2, R) {
  const arr1 = num1.split("").map(item => chars.indexOf(item));
  const arr2 = num2.split("").map(item => chars.indexOf(item));
  const len1 = arr1.length;
  const len2 = arr2.length;
  const len = Math.max(len1, len2);
  let index = 0;
  let carry = 0;
  let res = "";
  while (index < len) {
    const n1 = index < len1 ? chars.indexOf(arr1[len1 - index - 1]) : 0;
    const n2 = index < len2 ? chars.indexOf(arr2[len2 - index - 1]) : 0;
    let sum = n1 + n2 + carry;
    if (sum > R - 1) {
      carry = 1;
      sum = sum - R;
      res = sum + res;
    } else {
      carry = 0;
      res = sum + res;
    }
    index++;
  }
  if (carry === 1) {
    res = "1" + res;
  }
  return res;
}
const res = add("999", "1", 10);
console.log(res);

const order = ["1.5", "1.5.5", "1.4", "6.6"];

function sort(input) {
  return input.sort((a, b) => {
    const Arr1 = a.split(".");
    const Arr2 = b.split(".");
    const len = Math.min(Arr1.length, Arr2.length);
    let index = 0;
    // 注意这里的index 因为是与最小的比较
    while (index <= len) {
      if (a[index] === b[index]) {
        index++;
      } else if (!a[index] || !b[index]) {
        return Arr1.length - Arr2.length;
      } else {
        return Number(a[index]) - Number(b[index]);
      }
    }
  });
}
const ordered = sort(order);
console.log(ordered);

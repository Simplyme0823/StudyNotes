/** @format */
// 回溯法

function find(input, n, target, res) {
  // 递归终止条件
  if (res.length === n) {
    const resSum = res.reduce((prev, cur) => prev + cur);
    if (resSum === target) {
      return res;
    }
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    const cur = input.shift();
    res.push(cur);
    let result = find(input, n, target, res);
    if (result) {
      return result;
    }
    res.pop();
  }
}

const res = find([1, 3, 2, 4, 4, 5, 2, 5], 3, 8, []);
console.log(res);

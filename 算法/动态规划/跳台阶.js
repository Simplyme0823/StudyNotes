/** @format */
// 简单递归
function loop(n) {
  if (n === 1 || n === 0) return 1;
  return loop(n - 1) + loop(n - 2);
}
const res = loop(5);
console.log(res);

// 尾调用
function loopTail(n) {
  return re(n, 0);
}

function re(n, total) {
  if (n === 1 || n === 0) {
    return ++total;
  }

  total = re(n - 1, total);
  return re(n - 2, total);
}

const res_ = loopTail(5);
console.log(res_);

// 数学归纳

function calc(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  let s1 = 1;
  let s2 = 2;
  let s3;
  for (let i = 3; i <= n; i++) {
    s3 = s1 + s2;
    s1 = s2;
    s2 = s3;
  }
  return s3;
}
const res__ = calc(5);
console.log(res__);

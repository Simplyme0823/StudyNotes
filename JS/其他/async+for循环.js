/** @format */

function log(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, 1000);
  });
}

// 在普通的for循环中没有任何问题：串行执行
async function test() {
  for (let i = 0; i < 10; i++) {
    res = await log(i);
    console.log(res);
  }
}
// test();

// 原因：这里传入的是一个回调函数：并行执行
// 是for循环内使用 async十次
[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(async item => {
  const res = await log(item);
  console.log(res);
});

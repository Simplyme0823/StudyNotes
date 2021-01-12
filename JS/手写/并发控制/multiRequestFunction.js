/** @format */

// 如果是 p 实例的话，运行的时候所有定时器直接启动了 与预期不符
// 利用 函数 包裹然后执行，会按预期执行
// const p = new Promise(resolve => {
//   setTimeout(() => {
//     resolve("p");
//   }, 1000);
// });

const p1 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1200);
  });
const p2 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 200);
  });
const p3 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(3);
    }, 600);
  });
const p4 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(4);
    }, 800);
  });

const promiseArr = [p1, p2, p3, p4];

function multiRequest(urls = [], maxNum) {
  // 请求总数量
  const len = urls.length;
  // 根据请求数量创建一个数组来保存请求的结果
  const result = new Array(len).fill(false);
  // 当前完成的数量
  let count = 0;

  return new Promise((resolve, reject) => {
    // 请求maxNum个
    while (count < maxNum) {
      next();
    }
    function next() {
      let current = count++;
      // 处理边界条件
      if (current >= len) {
        // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
        !result.includes(false) && resolve(result);
        return;
      }
      const url = urls[current];
      console.log(`开始 ${current}`, new Date().getTime());
      Promise.resolve(url())
        .then(res => {
          // 保存请求结果
          console.log(res);
          result[current] = res;
          console.log(`完成 ${current}`, new Date().getTime());
          // 请求没有全部完成, 就递归
          if (current < len) {
            next();
          }
        })
        .catch(err => {
          console.log(`结束 ${current}`, new Date().getTime());
          result[current] = err;
          // 请求没有全部完成, 就递归
          if (current < len) {
            next();
          }
        });
    }
  });
}

const res = multiRequest(promiseArr, 2);
res.then(res => {
  console.log(res);
});

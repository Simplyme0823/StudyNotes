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
    console.log(1, new Date().getTime());
    setTimeout(() => {
      resolve(1);
    }, 1200);
  });
const p2 = () =>
  new Promise(resolve => {
    console.log(2, new Date().getTime());
    setTimeout(() => {
      resolve(2);
    }, 200);
  });
const p3 = () =>
  new Promise(resolve => {
    console.log(3, new Date().getTime());
    setTimeout(() => {
      resolve(3);
    }, 600);
  });
const p4 = () =>
  new Promise(resolve => {
    console.log(4, new Date().getTime());
    setTimeout(() => {
      resolve(4);
    }, 800);
  });

const promiseArr = [p1, p2, p3, p4];

function multiRequest(urls = [], maxNum) {
  let count = 0;
  let len = urls.length;
  let result = new Array(len).fill(0);
  return new Promise(resolve => {
    while (count < maxNum) {
      next();
    }
    function next() {
      let current = count++;
      // 边界情况，在 最后一个promise刚执行的时候，current与len相等
      // 但是此时promise还没有被决议
      // 因此要一直等到所有的promsie决议完成，即，数组初始值都不为false
      if (current >= len) {
        return !result.includes(0) && resolve(result);
      }
      const currentPromise = urls[current];
      Promise.resolve(currentPromise())
        .then(res => {
          console.log(res, new Date().getTime(), "end");
          result[current] = res;
          if (current < len) {
            next();
          }
        })
        .catch(err => {
          result[current] = err;
          if (current < len) {
            next(0);
          }
        });
    }
  });
}

const res = multiRequest(promiseArr, 2);
res.then(res => {
  console.log(res);
});

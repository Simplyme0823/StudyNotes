/** @format */

const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
      }, 1000);

      //   resolve(1);
    });
    resolve(2);
    p.then(res => {
      console.log(res);
    });
  });

first().then(res => {
  console.log(res);
});

console.log(4);
// 有resolve(1): 3 7 4 1 2 5 √
// 无resolve(1): 3 7 4 5 6 2 ×  当promise构造函数内含有setTimeout的时候，then回调在下一轮tick加入微任务队列
//               3 7 4 2 5 6 √

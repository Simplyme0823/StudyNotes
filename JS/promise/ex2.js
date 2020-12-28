/** @format */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});

console.log("promise1", promise1); // pending
console.log("promise2", promise2); // pending

// 抛出错误

setTimeout(() => {
  console.log("promise1", promise1); // success
  console.log("promise2", promise2); // rejected 返回一个新的promise实例
}, 2000);

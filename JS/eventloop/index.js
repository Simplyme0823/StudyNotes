/** @format */

async function async1() {
  console.log("async1 start"); // 3. async1 start
  await async2(); // await之前是同步执行的 await之后是异步的 因为await返回的是promise
  console.log("async1 end"); // 7. async1 end 同步代码执行完，开始执行微任务
}
async function async2() {
  console.log("async2"); // 4. async2
}
console.log("script start"); // 1. script start 同步执行
setTimeout(function () {
  console.log("setTimeout1");
}, 200);
setTimeout(function () {
  console.log("setTimeout2"); // 9. setTimeout2 从队列中取出新的宏任务，执行代码
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    console.log("then1");
  });
  new Promise(function (resolve) {
    console.log("Promise1");
    resolve();
  }).then(function () {
    console.log("then2");
  });
}, 0);
async1(); // 2. 同步执行async1函数
new Promise(function (resolve) {
  console.log("promise2"); // 5. 继续执行 resolve之前的代码都是同步执行的
  resolve();
}).then(function () {
  console.log("then3"); //  8. then3 继续执行微任务
});
console.log("script end"); // 6. 继续执行同步代码

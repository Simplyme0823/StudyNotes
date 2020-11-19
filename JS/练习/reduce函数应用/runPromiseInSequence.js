/** @format */

// 异步挨个执行函数
// 例如发送多个网络请求
const runPromiseInSequence = (array, value) =>
  array.reduce((promiseChain, currentFunction) => {
    return promiseChain.then(currentFunction);
  }, Promise.resolve(value));

// 拓展 控制异步并发多个网络请求
// index为轮数
const post = (array, index, number) => {
  const promiseAxios = array.slice(index * number, (index + 1) * number);
  return Promise.all(promiseAxios)
    .then(() => {
      post(array, index + 1, number);
    })
    .catch(err => {
      return { err, promiseAxios };
    });
};

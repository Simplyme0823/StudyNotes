/** @format */

const fn1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

const fn2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
};

const fn3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });
};

const fn4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 400);
  });
};

function multiRequest(promiseCreaterArr, maxNum = 2) {
  loop(0);
  function loop(n) {
    if (n * maxNum >= promiseCreaterArr.length) return;
    const currentTask = promiseCreaterArr.slice(n * maxNum, (n + 1) * maxNum);
    Promise.all(currentTask.map(item => item()))
      .then(res => {
        console.log(res);
        loop(n + 1);
      })
      .catch(err => {
        loop(n + 1);
      });
  }
}
const promiseCreaterArr = [fn1, fn2, fn3, fn4];
multiRequest(promiseCreaterArr);

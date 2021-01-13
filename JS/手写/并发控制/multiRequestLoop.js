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

function loopRequest(promiseArr, max = 2) {
  const taskPool = [];
  const pauses = [];

  const loopFn = async tasks => {
    if (tasks.length === 0) return;
    const currentTask = tasks.shift();
    try {
      const res = await currentTask();
      console.log(res, new Date().getTime());
    } catch (err) {
      pauses.push(currentTask);
    }
    return loopFn(tasks);
  };

  while (max--) {
    taskPool.push(loopFn(promiseArr));
  }

  Promise.all(taskPool);
}

const promiseCreaterArr = [fn1, fn2, fn3, fn4];
loopRequest(promiseCreaterArr);

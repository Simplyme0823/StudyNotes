/** @format */

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });
};

const p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 400);
  });
};

const input = [p3, p4, p2, p1];

const cb = () => console.log("cb");

function limit(promiseArr) {
  return promiseArr.reduce((prev, cur) => {
    return prev.then(() =>
      cur().then(res => console.log(res, new Date().getTime())),
    );
  }, Promise.resolve());
}

limit(input, cb);

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

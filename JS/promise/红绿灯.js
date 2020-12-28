/** @format */

function red() {
  console.log("red");
}

function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

const promiseRed = () =>
  new Promise(resolve => {
    setTimeout(() => {
      red();
      resolve();
      console.log(Date.now());
    }, 3000);
  });

const promiseGreen = () =>
  new Promise(resolve => {
    setTimeout(() => {
      green();
      resolve();
      console.log(Date.now());
    }, 1000);
  });

const promiseYellow = () =>
  new Promise(resolve => {
    setTimeout(() => {
      yellow();
      resolve();
      console.log(Date.now());
    }, 2000);
  });

function run() {
  promiseRed()
    .then(() => promiseGreen())
    .then(() => promiseYellow());
  // .then(run); 递归
}

/** @format */

window.name = "ByteDance";

function A() {
  this.name = 123;
}

A.prototype.getA = function () {
  // window
  console.log(this);

  return this.name + 1;
};

let a = new A();

let funcA = a.getA;

funcA(); // ByteDance1

// 两个 Promise ，任意一个 resolve ，执行 resolve

// 两个 Promise 都报错，才执行 reject

function RunPromiseAsParallel(p1, p2) {
  return new Promise((resolve, reject) => {
    const newP1 = p1
      .then(res => {
        return { res, code: 0 };
      })
      .catch(err => {
        return { res: err, code: 1 };
      });

    const newP2 = p2
      .then(res => {
        return { res, code: 0 };
      })
      .catch(err => {
        return { res: err, code: 1 };
      });

    return Promise.all([newP1, newP2]).then(res => {
      const [res1, res2] = res;
      const { res: res1data, code: code1 } = res1;
      const { res: res2data, code: code2 } = res2;
      if (code1 === 0 || code2 === 0) {
        resolve([res1data, res2data]);
      } else if (code1 === 1 && code2 === 1) {
        reject([res1data, res2data]);
      }
    });
  });
}

const promise1 = Promise.reject(1);
const promise2 = Promise.reject(2);

RunPromiseAsParallel(promise1, promise2)
  .then(
    res => {
      console.log(res);
    },
    err => {
      console.log(err);
    },
  )
  .catch(Err => {
    console.log(Err);
  });

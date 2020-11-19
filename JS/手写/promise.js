/** @format */

const PENDING = "pending";
const REJECTED = "rejected";
const RESOLVED = "resolved";

function myPromise(executor) {
  this.STATUS = PENDING;
  this.data = "";
  this.cbs = [];

  const resolve = value => {
    if (this.STATUS !== PENDING) return;
    this.STATUS = RESOLVED;
    this.data = value;
    setTimeout(() => {
      this.cbs.forEach(cb => {
        cb.onfullfilled();
      });
    });
  };

  const reject = reason => {
    if (this.STATUS !== PENDING) return;
    this.STATUS = REJECTED;
    this.data = reason;
    setTimeout(() => {
      this.cbs.forEach(cb => {
        cb.onRejected();
      });
    });
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    onReject(err);
  }
}

myPromise.prototype.then = function (onfullfilled, onRejected) {
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : value => value;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : reason => {
          throw reason;
        };

  let promise2;
  let self = this;
  return (promise2 = new myPromise((resolve, reject) => {
    const handler = cb => {
      // 保证回调函数之间是一个执行完再执行另一个
      setTimeout(() => {
        try {
          const res = cb(self.data);
          resolvePromise(promise2, res, resolve, reject);
        } catch (err) {
          reject(err);
        }
      });
    };

    if (self.STATUS === PENDING) {
      self.cbs.push({
        onfullfilled: () => {
          handler(onfullfilled);
        },
        onRejected: () => {
          handler(onRejected);
        },
      });
    } else if (self.STATUS === RESOLVED) {
      setTimeout(() => {
        handler(onfullfilled);
      });
    } else if (self.STATUS === REJECTED) {
      setTimeout(() => {
        handler(onRejected);
      });
    }
  }));
};

// 利用Promise.resolve
myPromise.all = function (promiseArr) {
  let len = promiseArr.length;
  let count = 0;
  const res = [];
  return new myPromise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      myPromise.resolve(promise).then(
        val => {
          count++;
          res[index] = val;
          if (count === len) {
            resolve(res);
          }
        },
        err => reject(err),
      );
    });
  });
};

// 链式调用
myPromise.prototype.catch = function (onRejected) {
  this.then(undefined, onRejected);
};

// 先返回的直接被决议
myPromise.race = function (promiseArr) {
  return new myPromise((resolve, reject) => {
    promiseArr.forEach(promise => {
      myPromise.resolve(promise).then(
        val => resolve(val),
        reason => reject(reason),
      );
    });
  });
};

//
myPromise.resolve = function (value) {
  // value是myPromise实例直接返回
  if (value instanceof myPromise) return value;

  // value是具有then属性的对象(函数也是一种对象)
  if (typeof value === "object" || typeof value === "function") {
    try {
      let then = value.then;
      if (typeof then === "function") {
        return new myPromise(then.bind(value));
      }
    } catch (err) {
      return new myPromise((resolve, reject) => {
        reject(err);
      });
    }
  }

  // 其他情况直接返回值
  return new myPromise(resolve => {
    resolve(value);
  });
};

myPromise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

myPromise.prototype.finally = function (cb) {
  return this.then(
    value => myPromise.resolve(cb()).then(() => value),
    reason =>
      myPromise.resolve(callback()).then(() => {
        throw reason;
      }),
  );
};

// x为onFulfilled/onRejected返回的promise实例
function resolvePromise(promise, x, resolve, reject) {
  // promise与x引用同一对象报错
  if (promise === x) {
    reject(new TypeError("Chaining Cycle"));
  }
  if ((x && typeof x === "object") || typeof x === "function") {
    // 多次调用 会以第一次优先，后续会被忽略
    let used;
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          y => {
            if (used) return;
            used = true;
            resolvePromise(promise, y, resolve, reject);
          },
          r => {
            if (used) return;
            used = true;
            reject(r);
          },
        );
      } else {
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch (err) {
      if (used) return;
      used = true;
      reject(err);
    }
  } else {
    resolve(x);
  }
}

const a = new myPromise(reject => {
  setTimeout(() => {
    reject(5);
  }, 1000);
});

a.then(res => {
  console.log(res);
});

a.then(res => {
  console.log(res + 5);
});

myPromise.resolve(5).then(res => {
  console.log(res, "tes");
});

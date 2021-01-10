/** @format */

class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.val = undefined;
    this.reason = undefined;
    this.onResovedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = val => {
      if (this.status !== "pending") return;
      this.status = "fulfilled";
      this.val = val;
      this.onResovedCallbacks.forEach(fn => fn());
    };

    const reject = val => {
      if (this.status !== "pending") return;
      this.status = "rejected";
      this.reason = val;
      this.onRejectedCallbacks.forEach(fn => fn());
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      onFulfilled =
        typeof onFulfilled === "function" ? onFulfilled : val => val;
      onRejected =
        typeof onRejected === "function"
          ? onRejected
          : err => {
              throw err;
            };

      const handler = (cb, val) => {
        try {
          let x = cb(val);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      };

      if (this.status === "pending") {
        this.onResovedCallbacks.push(() => {
          setTimeout(() => {
            handler(onFulfilled, this.val);
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            handler(onRejected, this.reason);
          }, 0);
        });
      } else if (this.status === "fulfilled") {
        setTimeout(() => {
          handler(onFulfilled, this.val);
        }, 0);
      } else if (this.status === "rejected") {
        setTimeout(() => {
          handler(onRejected, this.reason);
        }, 0);
      }
    });
    return promise2;
  }

  catch(fn) {
    return this.then(null, fn);
  }

  static resolve(val) {
    return new MyPromise(resolve => resolve(val));
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }

  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      promiseArr.forEach(promise => {
        promise.then(resolve, reject);
      });
    });
  }

  static all(promiseArr) {
    return new MyPromise((resolve, reject) => {
      let counts = 0;
      let res = [];
      let len = promiseArr.length;
      promiseArr.forEach((promise, index) => {
        // promise.then(
        Promise.resolve(promise).then(
          val => {
            counts++;
            res[index] = val;
            if (counts === len) {
              resolve(res);
            }
          },
          err => {
            reject(err);
          },
        );
      });
    });
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  let called;
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          err => {
            if (called) return;
            called = true;
            reject(err);
          },
        );
      } else {
        resolve(x);
      }
    } catch (err) {
      if (called) return;
      called = true;
      reject(err);
    }
  } else {
    resolve(x);
  }
}

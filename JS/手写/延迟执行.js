/** @format */

function delay(wait, cb) {
  let counts = 0;
  let timer = null;
  return function (...args) {
    counts++;
    return new Promise((resolve, reject) => {
      if (counts % 2 === 0) {
        clearTimeout(timer);
        timer = null;
        reject("cancel");
      } else {
        timer = setTimeout(() => {
          const res = cb.apply(this, args);
          resolve(res);
        }, wait);
      }
    });
  };
}

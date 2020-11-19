/** @format */

function debounce(fn, options = {}) {
  let immediate = options.immediate || false;
  let delay = options.delay || 0;
  let cb = options.cb || false;
  let timer;

  function handle(context, argument) {
    const res = fn.apply(context, argument);
    if (res) {
      cb(res);
    }
  }

  function Fn() {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      let callNow = !timer;
      if (callNow) handle(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      timer = setTimeout(() => {
        handle(this, arguments);
      }, delay);
    }
  }

  Fn.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return Fn;
}

function debounce_(fn, options = {}) {
  let immediate = options.immediate || false;
  let delay = options.delay || 0;
  let cb = options.cb || false;
  let timer;

  function Fn() {
    return new Promise((resolve, reject) => {
      if (timer) {
        clearTimeout(timer);
      }
      if (immediate) {
        let callNow = !timer;
        if (callNow) resolve(fn.apply(this, arguments));
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      } else {
        timer = setTimeout(() => {
          resolve(fn.apply(this, arguments));
        }, delay);
      }
    });
  }

  Fn.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return Fn;
}

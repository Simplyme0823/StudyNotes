/** @format */

// 时间戳版本
// 特点：1. 第一次会马上执行 第一次执行 last=0 now为13位数字 肯定能立刻执行
//       2. 最后一次不会执行 因为最后两次运行时间差如果小于interval 不满足条件
function throttle(fn, interval) {
  var last = 0;
  return function () {
    var self = this;
    var args = arguments;
    var now = new Date().getTime();
    if (now - last > interval) {
      fn.apply(self, args);
      last = now;
    }
  };
}

// 定时器
// 特点：1. 第一次仅在interval毫秒后立即执行
//       2. 最后一次一定会执行, 原理本质上是在interval期间，第一次运行会延迟interval执行
function throttle_(fn, interval) {
  var timer = null;
  return function () {
    if (timer == null) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, interval);
    }
  };
}

// 结合 第一次与最后一次都会运行

function throttle__(options) {
  var last = 0;
  var timer = null;
  var interval = options.interval || 0;
  var fn = options.fn;
  var tailing = options.trailing || false;

  function Fn() {
    var self = this;
    var arg = arguments;
    var now = new Date().getTime();
    if (now - last > interval) {
      // fn真正执行的时候 timer一定要重置
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      callFn(self, arg);
      last = now;
    } else if (tailing && timer === null) {
      // 优化最后一次执行
      timer = setTimeout(() => {
        callFn(self, arg);
        timer = null;
      }, interval);
    }
  }

  Fn.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  function callFn(context, args) {
    var res = fn.apply(context, args);
    if (cb) {
      cb(res);
    }
  }
  return Fn;
}

/** @format */

Function.prototype.myBind = function (fn, ...args1) {
  const self = this;

  const fNOP = function () {};

  if (this.prototype) {
    fNOP.prototype = this.prototype;
  }

  const fBind = function (...args2) {
    fn.apply(this instanceof fNOP ? self : this, args1.concat(args2));
  };
  fBind.prototype = new fNOP();

  return fBind;
};

Function.prototype.myApply = function (context, ...arg1) {
  context = context || window;
  context.fn = this;
  const res = context.fn(...arg1);
  delete context.fn;
  return res;
};

function myNew(fn, ...args) {
  const obj = {};
  //   obj.__proto__ = fn.prototype;
  Object.setPrototypeOf(obj, fn.prototype);
  const res = fn.apply(obj, ...args);
  return typeof res === "object" ? res : obj;
}

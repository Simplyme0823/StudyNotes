/** @format */

Function.prototype.before = function (fn) {
  const self = this;
  return function () {
    fn.apply(this, arguments);
    return self.apply(this, arguments);
  };
};

Function.prototype.after = function (fn) {
  const self = this;
  return function () {
    const res = self.apply(this, arguments);
    fn.apply(this, arguments);
    return res;
  };
};

/** @format */

Array.prototype.mySome = function (cb) {
  var self = this;
  var context = arguments[1] || window;
  var len = this.length;
  var res = false;
  for (let i = 0; i < len; i++) {
    res = cb.call(context, self[i], i, self);
    if (res) {
      res = true;
      break;
    }
  }
  return res;
};

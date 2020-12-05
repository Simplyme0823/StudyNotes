/** @format */

Array.prototype.myEvery = function (cb) {
  var self = this;
  var len = this.length;
  var context = arguments[1] || null;
  var res = false;
  for (var i = 0; i < len; i++) {
    res = cb.call(context, self[i], i, self);
    if (!res) {
      res = false;
      break;
    }
  }
  return res;
};

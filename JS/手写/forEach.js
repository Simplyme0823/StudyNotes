/** @format */

// forEach并不会返回新数组
Array.prototype.myForEach = function (cb) {
  const self = this;
  const context = arguments[1] || null;
  const len = self.length;
  for (let i = 0; i < len; i++) {
    cb.call(context, self[i], i, self);
  }
  return self;
};

const res = [1, 2, 3].myForEach(item => {
  console.log(item * 2);
});

console.log(res);

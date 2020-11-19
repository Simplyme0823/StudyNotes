/** @format */

// 使用Object.setPrototypeOf可能造成性能下降，最好使用Object.create

function objectCreate(o, propertiesObject) {
  const F = function () {};
  F.prototype = o;
  const ins = new F();
  Object.defineProperties(ins, propertiesObject);
  return ins;
}

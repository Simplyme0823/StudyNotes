/** @format */

function isEmpty(obj) {
  return (
    Object.prototype.toString.call(obj) === "[Object object]" &&
    JSON.stringify(obj) === "{}"
  );
}

function isEmpty_(obj) {
  return Object.keys(obj).length === 0 && Object.values(obj).length === 0;
}

// for...of 迭代器
// for ... in 原型链
function isEmprt__(obj) {
  for (key in obj) {
    if (key) {
      console.log(key);
      return false;
    }
  }
  return true;
}
isEmprt__({});

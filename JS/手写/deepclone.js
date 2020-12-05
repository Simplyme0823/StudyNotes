/** @format */

// 处理循环引用
function deepClone(orign, target) {
  var tar = target || {};
  var toString = Object.prototype.toString;
  for (var key in orign) {
    if (orign.hasOwnProperty(key)) {
      if (typeof origin[key] === "object" && origin[key] !== null) {
        tar[key] = toString.call(origin[key] === "[object Array]" ? [] : {});
        deepClone(origin[key], tar[key]);
      } else {
        tar[key] = origin[key];
      }
    }
  }
}

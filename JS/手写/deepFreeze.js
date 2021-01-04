/** @format */

function deepFreeze(obj) {
  let propName = Object.getOwnPropertyNames(obj);

  for (let name of propName) {
    let value = obj[name];
    obj[name] = value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(obj);
}
// getter setter不能被修改， 属性不能被修改 不能被删除
// 严格模式下 修改属性会报错：TypeError,  delete 属性返回ture;因为本来就不存在
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

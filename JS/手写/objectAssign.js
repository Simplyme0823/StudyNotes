/** @format */

// 本质上是一种浅拷贝
// 接受一个目标对象，或者多个源对象作为参数
// 将每个源对象中可枚举和自由属性复制到目标对象

function objectAssign() {
  const target = arguments[0];
  const orgins = Array.prototype.slice.call(arguments, 1);
  // for of避免原型链上的对象
  for (const orgin of orgins) {
    // 注意undefined与null
    if (orgin !== undefined && orgin !== null) {
      // 获取对象自身的属性，for in会便利原型链
      // Object.keys(orgin).forEach(key => {

      // 用Reflect代替Object.keys  object.keys返回不包括不可枚举属性
      // Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target)
      // https://blog.csdn.net/oxgos/article/details/82854848
      Reflect.ownKeys(origin).forEach(key => {
        if (Object.getOwnPropertyDescriptor(origin, key).enumerable) {
          // 后面的属性覆盖前面的属性
          target[key] = orgin[key];
        }
      });
    }
  }
  return target;
}

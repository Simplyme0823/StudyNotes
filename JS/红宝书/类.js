/** @format */

// 工厂函数
function factory(name) {
  const obj = {};
  obj.name = name;
  return obj;
}

// 构造函数
function construct(name) {
  this.name = name;
}

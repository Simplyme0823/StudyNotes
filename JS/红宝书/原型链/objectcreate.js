/** @format */

// 创建一个没有__proto__的对象

const o1 = {};
console.log(o1.prototype); // undefined
console.log(o1.__proto__); // {}

const o2 = Object.create(null);
console.log(o2.prototype); // undefined
console.log(o2.__proto__); // undefined

const o3 = Object.create({ name: "o3" });
console.log(o3.prototype); // undefined
console.log(o3.__proto__); // { name: "o3" }

// TypeError: Object prototype may only be an Object or null: undefined
const o4 = Object.create(undefined);

/** @format */

console.log(Infinity - Infinity); // 不知道那个大
console.log(-Infinity - -Infinity);
console.log(Infinity - -Infinity);
console.log(-Infinity - Infinity);
console.log(+0 - +0); // +0
console.log(+0 - -0); // -0
console.log(-0 - -0); // 0

// 字符串，布尔值，null，undefined 转换为数值，转换为NaN那么操作后还是NaN
// 对象，调用valueOf，如果是NaN，那么操作后还是NaN，无valueOf就用toString
console.log([1, 2, 3].toString());
const a = { a: "a" };
// { a: 'a' } Number({ a: 'a' })为NaN 再调用a.toString()得到[Object object] Number([Object object])
console.log(a.valueOf());

console.log(-a);
console.log("100" - a);

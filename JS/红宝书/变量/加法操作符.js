/** @format */

// 操作数都是数值
// 有一个字符串就要转换
console.log(Infinity + Infinity);
console.log(-Infinity + -Infinity);
console.log(Infinity + -Infinity);
console.log(+0 + +0);
console.log(-0 + +0);
console.log(-0 + -0);
console.log("" + undefined); //toString
console.log("" + null); // toString
console.log(+undefined); //Number
console.log(+null); //Number

// 这里统一调用toString方法而非Number方法
console.log("0" + NaN); //0NaN
console.log(100 + NaN); //NaN
console.log("0" + [1, 2, 3]); //01,2,3
console.log("0" + { a: "a" }); //[object Object]

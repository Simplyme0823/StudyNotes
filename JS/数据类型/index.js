/** @format */

// 对于复杂数据，如对象，先调用valueOf再调用toString
console.log({} + 0);
console.log(0 + {});
console.log(+{} + 0);
console.log({} - 0);
console.log(0 - {});
console.log(0 - undefined);

//  + 运算：两边至少有一个字符
// 1. 都是字符串：直接拼接
// 2. 只有一个是字符串，另外的值转换为字符
// 3.两边有一个是对象，调用valueOf/toString取值，转换为基本数据类型

// +/- 操作符，调用Number，转为数字

// - 运算：两边都转换为Number

// a = ? 使下面成立
if (a === 3 && a === 6 && a === 9) {
}

// https://segmentfault.com/a/1190000019735321?utm_source=sf-related

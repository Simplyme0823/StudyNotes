/** @format */

// == !=
// 1. 任意一个是布尔值，将布尔值【转换为数值】
// 2. 字符串与数值，将字符串【转换为数值】
// 3. 一个是对象，调用valueOf获取原始值，然后再用上述规则
console.log(false == 0); //true
console.log(true == 2); // false

// === !==
// 不进行数值转换进行比较
console.log(null === undefined);
console.log(null == undefined);

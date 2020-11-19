/** @format */

// 1. 都是数值
// 2. 都是字符串，对字符串编码进行比较
// 3. 有一个数值，另一个转化为数值
// 4. 任意一个是对象，有valueOf用valueOf，没有就toString
// 5. 任意一个布尔值，转化为数值再比较
// 6. 比较NaN的时候都返回false

//            NaN        -100
console.log({ a: "a" } > -100); //false

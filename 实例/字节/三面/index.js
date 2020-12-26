/** @format */

// 正则 1234567890 => 1,234,567,890

const reg = /\d(?=(\d{3})+$)/g;
const res = "1234567890".replace(reg, function (a, b, c) {
  console.log(a, b, c);
});
const m = "1234567890".match(reg);
console.log(res);
console.log(m);
// \b是边界单词 \w[0-9a-zA-Z_] 与 \W之间的位置； \B为非边界

const border = "123456790".replace(/\B/g, "#1");

console.log(border);

// 浏览器缓存 及跨域
// service-worker
// http缓存

// 性能检测：performance Timeline

// 数组与链表的区别
// 数组是一块连续的内存空间，是一种线性表结构数据
// 链表不是连续的，便于删除/添加

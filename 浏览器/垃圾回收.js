/** @format */

function strToArray(str) {
  let i = 0;
  const len = str.length;
  let arr = new Uint16Array(str.length);
  for (; i < len; ++i) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}

function foo() {
  let i = 0;
  let str = "test V8 GC";
  while (i++ < 1e5) {
    strToArray(str);
  }
}

foo();

// 此段代码的问题
//  每次执行循环都要new 数组

// https://time.geekbang.org/column/article/230845
// https://mp.weixin.qq.com/s?__biz=MzU4OTgxOTMzNw==&mid=2247483692&idx=1&sn=80b71d2680a0f01220be318332236fa4&chksm=fdc6fd8acab1749c61978f65d4d1f7bd6718cac4440f0dc33f24109482386f392f5e7a8cf09b&token=274527720&lang=zh_CN#rd

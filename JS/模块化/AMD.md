<!-- @format -->

## 模块导出

define 函数的三个参数：当前模块 id，当前模块的依赖，模块导出值

```javascript
define("getSum", ["calculator"], function (math) {
  return function (a, b) {
    console.log("sum: " + calculator.add(a, b));
  };
});
```

## 模块导入

require 函数的两个参数：指定加载的模块，加载完后执行的回调函数

```javascript
require(["getSum"], function (getSum) {
  getSum(2, 3);
});
```

## 缺点：语法冗长，回调地狱

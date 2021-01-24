<!-- @format -->

## 箭头函数

1. 不能作为构造函数，不能使用 new 操作符
2. 不绑定 arguments，可以使用剩余参数
3. this 为词法作用域，相当于声明了一个名为 this 的变量，根据作用域链来寻找 this 的值
4. 没有 prototype 属性
5. 不能作为生成器函数

```javascript
"use strict";
var obj = {
  i: 10,
  // 词法作用域，箭头函数外部的this值指向window，如果外部还有函数则为外部函数的this值
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};
obj.b();
// undefined, Window{...}
obj.c();
// 10, Object {...}
```

```javascript
"use strict";
var obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this);
    return this.a + 10;
    // 代表全局对象 'Window', 因此 'this.a' 返回 'undefined'
  },
});

obj.b; // undefined   "undefined"   Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
```

## 类

## 模板字符串

## 加强的对象字面量

## 对象解构

## Promise

## 生成器

## 模块化

## Symbol

## 代理

## Set/Map

## 函数默认参数

## rest 和展开

## 块作用域

<!-- @format -->

# 针对块作用域的解析

## 块作用域内单纯赋值

```javascript
// ReferenceError: a is not defined  undefined
console.log(a, window.a);
{
  // ReferenceError: a is not defined  undefined
  console.log(a, window.a);
  a = 50;
  // 50 50
  console.log(a, window.a);
}
// 50 50
console.log(a, window.a);
```

## 块作用域内的函数声明

1. 块作用域内声明函数的同时，也会在外部 var a,因此 a 不会报错但是 undefined
2. 只有 function a(){} 执行过后才会给 window.a 赋值

```javascript
// undefined  undefined
console.log(a, window.a);
{
  // function a() {}  undefined
  console.log(a, window.a);
  function a() {}
  // function a() {} function a() {}
  console.log(a, window.a);
}
// function a() {} function a() {}
console.log(a, window.a);
```

## 块作用域内的函数声明 + 赋值

```javascript
// undefined undefined
console.log(a, window.a);
{
  // function a() {} undefined
  console.log(a, window.a);
  a = 1;
  // 1 undefined
  console.log(a, window.a);
  a = 2;
  // 2 undefined
  console.log(a, window.a);
  function a() {}
  // 2 2
  console.log(a, window.a);
  a = 3;
  // 3 2
  console.log(a, window.a);
  a = 4;
  // 4 2
  console.log(a, window.a);
}
// 2 2
console.log(a, window.a);
```

## let + 块作用域内的函数声明 + 赋值

这里在进行内外部变量同步的时候，由于是 let 声明的，因此不发生同步

```javascript
// undefined undefined
let a;
console.log(a, window.a);
{
  // function a() {} undefined
  console.log(a, window.a);
  a = 1;
  // 1 undefined
  console.log(a, window.a);
  a = 2;
  // 2 undefined
  console.log(a, window.a);
  function a() {}
  // 2 undefined
  console.log(a, window.a);
  a = 3;
  // 3 undefined
  console.log(a, window.a);
  a = 4;
  // 4 undefined
  console.log(a, window.a);
}
// undefined undefined
console.log(a, window.a);
```

<!-- https://juejin.cn/post/6844903955814694919 -->
<!-- https://blog.csdn.net/qq_35895679/article/details/105904369 -->
<!-- https://www.imooc.com/video/6491 -->

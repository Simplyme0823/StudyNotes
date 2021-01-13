/** @format */
// undefined undefined
console.log(a, window.a);
{
  // function a() {}  undefined
  console.log(a, window.a);
  // a = 1;
  function a() {}
  //-------------------------------------------
  // 这里是分割线，在此处，即，紧挨着function a(){}的地方，
  // 代码块内的代码会域代码块外的代码同步
  // 同步策略：1. 如果function a 前 a有赋值，那么a被赋的值就会被同步到window.a上
  // 同步策略：2. 如果仅有function a，那么window.a就是function a
  //-------------------------------------------
  // function a() {} function a() {}
  console.log(a, window.a);
}
// function a() {} function a() {}
console.log(a, window.a);

// undefined undefined
console.log(b, window.b);
{
  // function b() {}  undefined
  console.log(b, window.b);
  b = 1;
  // 1  undefined
  console.log(b, window.b);
  function b() {}
  //-------------------------------------------
  // 这里是分割线，执行完上方代码 块内的变量会与块外的变量同步
  //-------------------------------------------
  // 1 1
  console.log(b, window.b);
}
// 1 1
console.log(b, window.b);

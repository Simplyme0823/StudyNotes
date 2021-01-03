/** @format */

var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a.x); // undefined
console.log(b.x); // {n： 2}

// 1. a.x = a = {n: 2}
// 运行的时候，首先获取值，然后再赋值
// 取值的时候从左至右 a.x的值为undefined
// 赋值的时候从由至左 a = {n: 2}, a.x = {n: 2}

// a ===> {n:1}  <=== b

// a ===> {n:1, x:undefined} <=== b

// a ===> {n:2}   {n:1, x:undefined} <=== b

// a ===> {n:2}   {n:1, x:{n:2}} <=== b

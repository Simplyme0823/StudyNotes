/** @format */

let a = 0;
const obj = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
};
const obj1 = {
  a: 2,
};
const fun = obj.b;
fun(); //0 如果是var的话就是0， let是undefined
fun.apply(obj); //1
fun.bind(obj1).apply(obj); //1
const fun1 = fun.bind(obj1);
new fun(); //0 如果是var的话就是0， let是undefined

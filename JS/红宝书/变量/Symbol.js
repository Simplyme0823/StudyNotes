/** @format */
// String.prototype.match就是调用Symbol.match方法
String.prototype.match;
// Symbol.match为正则表达式对象的【原生】match方法
console.log(RegExp.prototype[Symbol.match]); //[Function: [Symbol.match]]
// 但是如果给一个对象加上[Symbol.match]方法也可以被String.prototype.match调用

class FooMatcher {
  static [Symbol.match](target) {
    return target.includes("foo");
  }
}
console.log("foobar".match(FooMatcher)); //true

// 下面的三个属性用法同上

String.prototype.replace;
Symbol.replace;

String.prototype.search;
Symbol.search;

String.prototype.split;
Symbol.split;

//A function valued property that is the constructor function that is used to create derived objects.
Symbol.species;

class MyArray extends Array {}

const a = new MyArray(1, 2, 3);
// derived objects
const b = a.map(x => x);
const c = a.filter(x => x > 1);
console.log(b instanceof Array); // true
console.log(b instanceof Array); // true
console.log(b instanceof MyArray); // true
console.log(b instanceof MyArray); // true

class MyArray_ extends Array {
  //
  static get [Symbol.species]() {
    return Array;
  }
}

const a_ = new MyArray_(1, 2, 3);
// derived objects
// 这里使用Array作为构造函数了 而非MyArray_
const b_ = a_.map(x => x);
const c_ = a_.filter(x => x > 1);
console.log(b_ instanceof Array); // true
console.log(b_ instanceof Array); // true
console.log(c_ instanceof MyArray); // false
console.log(c_ instanceof MyArray); // false

// 将数据转换为原始值，时会用到此属性，可以改写对象的Symbol.toPrimitive来改变其类型转换行为
Symbol.toPrimitive;

// Object.prototype.toString调用，可以改变其默认行为
Symbol.toStringTag;

// 和with函数有关，不推荐使用with,不推荐使用此属性
// 将用户定义的属性从with的作用域中排除
Symbol.unscopables;

let o = { foo: "bar" };
o[Symbol.unscopables] = {
  foo: true, //一定要是true
};
with (o) {
  console.log(foo); //ReferenceError: foo is not defined
}

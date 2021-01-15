/** @format */
var animal = function () {};

var dog = function () {};

// 相当于static price
animal.price = 2000; // {price: 2000}

// dog子类  animal 父类
dog.prototype = animal;

var dd = new dog();

// dog.price是静态属性，不是实例属性，dog函数上没有price值
// 相当于Function.price
console.log(dog.price); // undefined

// dd原型对象为animal函数对象，animal.price为2000
// dd.constructor.prototype.price
console.log(dd.price); // 2000

// Function
console.log(dog.constructor);
// Function animal
console.log(dog.prototype);
// Function.prototype
console.log(dog.__proto__ === Function.prototype);

// Function
console.log(animal.constructor);
// animal {}
console.log(animal.prototype);
// Function
console.log(animal.__proto__ === Function.prototype);

console.log({}.__proto__ === Object.prototype); // true

// false
console.log(Function.prototype === Function, Function.__proto__);

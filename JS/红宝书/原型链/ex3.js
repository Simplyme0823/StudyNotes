/** @format */
var animal = function () {};

var dog = function () {};

animal.price = 2000; // {price: 2000}

dog.prototype = animal;

var dd = new dog();

console.log(dog.price); // undefined
console.log(dd.price); // 2000

console.log(dog.constructor);
console.log(dog.prototype);
console.log(dog.__proto__);

// animal函数的原型对象是animal{}
console.log(animal.constructor);
console.log(animal.prototype);
console.log(animal.__proto__);

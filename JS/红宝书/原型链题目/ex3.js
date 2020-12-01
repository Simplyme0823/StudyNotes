/** @format */
var animal = function () {};

var dog = function () {};

animal.price = 2000; // {price: 2000}

dog.prototype = animal;

var dd = new dog();

console.log(dog.price); // undefined
console.log(dd.price); // 2000

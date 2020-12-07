/** @format */

function Father() {}
function Son() {}
Son.prototype = new Father();
Son.prototype.constructor = Son;
const son = new Son();

// Father {}
console.log(Father.prototype);
// Function
console.log(Father.__proto__);
// Son { constructor: function Son(){}}
console.log(Son.prototype);
// undefined
console.log(Son.prototype.prototype);
// Function
// ES5中 子类构造函数的__proto__指向Function
console.log(Son.__proto__);
// undefined
console.log(son.prototype);
// Son { constructor: function Son(){}}
console.log(son.__proto__);

class Super {}
class Sub extends Super {}
const sub = new Sub();
// Super {}
console.log(Super.prototype);
// Function
console.log(Super.__proto__);
// Sub {}
console.log(Sub.prototype);
// Function Super
console.log(Sub.__proto__);
// Function
console.log(Sub.__proto__.__proto__);
// undefined
console.log(sub.prototype);
// Sub{}
console.log(sub.__proto__);

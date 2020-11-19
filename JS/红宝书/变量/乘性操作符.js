/** @format */
// 乘法操作符
console.log(0 * NaN);//NaN
console.log(Infinity * 0); //NaN
console.log(NaN * NaN);//NaN
console.log(Infinity * 5);//Infinity
console.log(Infinity * -5);//-Infinity
console.log(Infinity * Infinity);//Infinity
// 使用Number()
console.log(1 * "123");//123

// 除法操作符
console.log(0 / 0); //NaN
console.log(-1 / 0); //-Infinity
console.log(-1 / "-1"); //1

// 取模操作符
console.log(Infinity % 2); //NaN
console.log(1 % 0); //NaN
console.log(Infinity % Infinity); //NaN
console.log(0 % 10); //0
// 使用Number()
console.log("123" % 10);// 3

/** 指数操作符 */
console.log(3 ** '2'); //9

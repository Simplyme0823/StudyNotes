/** @format */

// 数组的toString方法
const a = [1,2,3] + "abc"
console.log(a)//1,2,3abc

// Reg
const re = /abc/gi
console.log(re + "abc") ///abc/giabc

// Function
function test (){}
console.log(test.toString()) //function test (){}

// Date
const date = new Date()
console.log(date.toString()) //Sat Oct 03 2020 13:17:26 GMT+0800 (GMT+08:00)

// Numebr
const num = 100
console.log(num.toString(2))//1100100 二进制

// Error
const err = new Error("error")
console.log(err.toString()) //Error: error


// 这种写法是“转换预期”的显示表示
const  x  = {
    toString(){
        return 4100
    },
    valueOf(){
        return {}
    }
}
console.log(1-x)//-4099
console.log(1+x, typeof (1+x))//4101, number



const valueOf = x.valueOf()
//{ a: 'a' }
console.log(valueOf)
// object
console.log(typeof valueOf)



console.log(x.toString())//101
console.log(x.valueOf())//valueOf
const nums = Number(x)
// 101 number 
console.log(nums,typeof nums,"nums")
console.log(+x, typeof (+x))// 101 number
console.log(1+x, typeof (1+x))//1101, string
console.log("1"+x, typeof ("1"+x))//1101, string
console.log("abc"+123+x)//abc123101

// [object Object]
console.log(1+{})


const c ={
    toString(){
        return 101
    },
    valueOf(){
        return 
    }
}
// 先试用toString再使用valueOf
console.log(String(c), typeof String(c))// 101 string
// 先试用valueOf再使用toString
console.log(Number(c), typeof Number(c))// 101 number


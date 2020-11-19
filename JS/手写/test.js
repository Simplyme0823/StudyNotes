eval("function sayHi(){console.log('hi')}")
sayHi()


eval("let a = 'test'")
console.log(a)//ReferenceError: a is not defined


eval("var b = 'test'")
console.log(b)
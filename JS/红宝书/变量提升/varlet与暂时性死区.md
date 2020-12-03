<!-- @format -->

### var 声明作用域

在 JS 中直接给变量赋值（不含 var/let），那么变量会成为**全局变量**

### var 声明提升 hoist

```JavaScript
function foo(){
    console.log(age)
    var age = 26
}
foo()// undefined
```

### let 与 var 的区别

1. let 是块级作用域，var 声明范围是函数作用域
2. var 可以重复声明，let 重复声明报错

```JavaScript
var a = 1;
var a;
console.log(a);//1
```

3. 暂时性死区(temporal dead zone)
   解析代码的时候，JS 引擎会注意出现在块后面声明的 let 变量
   但是在 let 声明之前，变量都不可以引用到，因此抛出 ReferenceError 错误

```JavaScript
console.log(age)// ReferenceError: Cannot access 'age' before initialization
let age = 26
```

4. 全局声明：var->变量成为 window 的属性

5. 注意在 if 判断条件内使用 let 因为 let 只存在于块级作用域

```JavaScript
let a = 1;
if (a === 1) {
  let b = "fdas";
} else {
  let b = "fdsafsdaf";
}
console.log(b);//ReferenceError: b is not defined
```

6. for 循环：解决 var 在 for 循环的问题

### const

1. const 声明变量的时候必须要赋初始值
2. const 变量不能修改，但是对于引用对象，是可以更改引用对象的【内部属性】
3. for 循环中使用 const，可以每次循环的时候创建一个新的变量并赋值

```JavaScript
for(const key in {a:1, b:2}){
    console.log(key)
}
// a, b
```

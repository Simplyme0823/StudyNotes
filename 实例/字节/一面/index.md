<!-- @format -->

## 元素 A 垂直水平居中，两边间距 10px，且高度永远为宽度的一半，且文字 A 永远水平垂直居中

### 我的答案

元素与文字分别设置为绝对定位，然后利用 transform 与 top/left 来做
其中两边间距，采用 calc(100% - 20px)的方法解决

### 其他答案

利用 flex 布局
填坑：利用 vh 弥补 body 无法获取页面高度而导致 align-items 导致失效的问题
将 height 设置为 0，保证 CSS 盒模型中 content 的高度为 0，保证高度永远为宽度一半

## arguments 转换为数组

```javascript
Array.from(arguments);
Array.prototype.slice.call(arguments);
[...arguments];
```

## 相等与全等

```javascript
[] == false √
{} == false ×
if([]){} √    //非 null undefined false 0  ''
if([1]==[1]){} ×
```

## 运行

scirpt start ->
async1 start ->
async2 ->
promise1 ->
script end ->
async1 end ->
promise2 ->
setTimeout

```javascript
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  //   await 1;
  console.log("async2");
}
console.log("script start");
setTimeout(() => {
  console.log("setTimeout");
});
async1();
new Promise(resolve => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});
console.log("script end");
```

## 改代码得到希望的结果

## 忘记了 say 函数内部 setTimeout 使用了 function，导致 this 丢失了，

```javascript
const obj ={
    name:"jsCoder",
    skill:["es6", "react", "angular"]
    say:function(){
        for(var i = 0; len = this.skill.length; i < len; i++){
            setTimeout(function(){
                console.log('NO.' + i + this.name);
                console.log(this.skill[i])
                console.log('---------------')
                console.log(i)
            })
        }
    }
}
obj.say()
```

## 实现 ES5 中 Function 原型的 bind 方法，使得一下程序最后能输出 success

本质上就是手写一个 bind

```javascript
function Animal(name, color){
    this.name = name
    this.color = color
}

Animal.prototype.say = function(){
    return `I'm a ${this.color}  ${this.name}`
}

const Cat = Animal.bind(null, 'cat')
const cat = new cat("white")
if(cat.say() === `I'm a white cat` && cat instanceof Cat && cat instanceof Animal)
```

## 算法题：输入数组，找出 n 个注，和为 sum

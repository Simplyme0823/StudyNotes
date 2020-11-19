<!-- @format -->

UMD 本质上是一种通用解决方案
AMD 定义的模块是无法使用 CommonJS/ES6 Module 形式正确导入
可能出错的情况，UMD 标准发现了 AMD 环境，但是有 CommonJS 模块，因此就会报错

```javascript
(function(global, main){
    if(typeof define === 'function' && define.amd){
        //AMD
        define(...)
    }else if(typeof exports === 'object'){
        // CommonJS
        module.exports = ...
    }else{
        // 非模块化环境
        global.add = ...
    }
})(this, function(){
    // 定义模块
    return {...}
})
```

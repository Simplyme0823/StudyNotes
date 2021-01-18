<!-- @format -->

Vue 内部定义一个 callbacks 变量，元素为回调函数

通过 timerFunc 来调用这些函数

timerFunc 2.6.11 版本

1. 原生 Promise
2. MutationObserver()
3. setImmediate
4. setTimeOut

https://blog.csdn.net/hkh_1012/article/details/53453138
nodeJS 的时间循环
idle 观察者 >> io 观察者 > check 观察者

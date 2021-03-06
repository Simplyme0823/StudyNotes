<!-- @format -->

DIFF 算法的前提：

1. 检测 VDOM 的变化只发生在同一层
2. 检测 VDOM 的变化依赖于用户指定的 key("原地复用")

## 跨层级比较

树的最小距离编辑算法的时间复杂度是 O(n^2m(1+logmn)), 我们假设 m 等于 n， 就变成 O(n^3)。

## 意义

1. 不管数据变化多少，每次重绘的性能都可以接受，因为虚拟 dom 是纯 JS 层面运算。
2. 为函数式的 UI 编程方式打开了大门
3. 可以渲染到 DOM 以外的 backend，比如 ReactNative。

## 为什么操作 DOM 的代价是昂贵的

1.  JS 对象与 DOM 的同步与转换
    DOM 对象是 C++开发的，浏览器会返回一个包装对象给 JS；修改这个对象的属性 property 会映射到 DOM 对象的特性 attribute 上
2.  CSS
    对于 CSS 属性的读取与修改会触发重绘/重排进一步降低性能（防止读到错误(脏)的值。浏览器会进行优化，以提高性能）
3.  垃圾回收
    DOM 对象导致 GC 变复杂

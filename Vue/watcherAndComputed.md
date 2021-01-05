<!-- @format -->

## computed 本质为 lazy watcher

watcher 会收集响应式数据的依赖，当响应式数据的值发生改变的时候，触发 wathcer 更新；但是 computed 会将 wather 实例的 lazy 属性设置为 true，等它被读取的时候再执行 run 方法更新；如果数据没有更新 lazy 属性不会改变，因此是惰性的

## 一个计算属性为什么还可以依赖另一个计算属性

A(computed) -> B(computed) -> C(响应式数据)

watcher 的 get 方法有一个入栈/出栈的过程，取 A 的值的时候，将 A 入栈，再 get B 将 B 入栈；B 收集 C 的依赖，出栈；A 再收集 C 的依赖

https://www.cnblogs.com/yangzhou33/p/13809534.html

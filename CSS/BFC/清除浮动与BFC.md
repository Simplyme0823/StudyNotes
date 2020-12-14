<!-- @format -->

## BFC 块级格式化上下文

### 触发条件

1. overflow 除了 visible 以外的值 (hidden、auto、scroll)
2. position 非 static 非 relative
3. float 非 none
4. display 为 inline-block、table-cells、flex
5. body 根元素

### 应用

1. margin 重叠

2. 清除浮动
   BFC 元素内部的子元素不能影响 BFC 外部元素，因此父元素触发 BFC 之后就会消除高度坍塌，消除对外部元素布局的影响

3. BFC 可以组织元素被浮动元素覆盖

### 参考资料

https://zhuanlan.zhihu.com/p/25321647

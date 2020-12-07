<!-- @format -->

# 定义

文档对象模型：HTML/XML 文档接口
DOM 定义了表示和修改文档所需的对象、这些对象的行为和属性以及这些对象之间的关系。

# 为什么操作 DOM 是昂贵的

1. JS 对象与 DOM 同步与转换
   浏览器中 DOM 是由 C++开发，浏览器返回给 JS 一个包装对象，修改这个对象的属性会映射到 DOM 上
2. CSS 属性
   单纯地读取 DOM 对象的属性也可能触发重绘回流
3. 垃圾回收
   DOM 回收导致 GC 复杂

# 事件

## 事件传播

1. 捕获：事件从 window -> document -> html -> body 一直往下

2. 目标阶段：事件到达目标元素

3. 冒泡阶段： 事件从目标元素冒泡，然后一直上升到达 window

## 事件注册

1. DOM 一级事件
2. DOM 三级事件
   window.addEventListen(ele, cb, iscapture)
   isCapture：false 冒泡，true 捕获

## event.preventDefault

### 阻止默认行为

1. 表单元素：阻止提交
2. 锚元素：阻止导航
3. 上下文菜单：阻止菜单显示

### event.defaultPrevented

返回布尔值，表明触发改事件的元素是否阻止了默认行为

## event.stopPropagation

阻止捕获/冒泡阶段中当前时间进一步传播

## event.target 与 event.currentTarget

event.target 为触发事件的元素，可以用来做**事件委托**
event.currentTarget 为注册事件的元素

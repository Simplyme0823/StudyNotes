<!-- @format -->

原生事件与自定义事件
v-on 指令

## 编译阶段

### addHandler

1. 对修饰符做预处理
   对 capture/once/passive 修饰符做处理；事件名称前面分别加!/~/&符号
   对 middle/right 事件做处理，对事件名称做处理
2. 创建 data.nativeEvents 与 data.events 属性
   创建 el.nativeEvents 对象收集带有 native 属性的事件
   创建 el.events 收集普通事件

3. dynamic 为事件名称是否为动态绑定的

## genCode => genHandlers

### 含修饰符

含修饰符对鼠标键盘做一些处理，所以肯定要传入 event 参数，会在这里做一层处理: function($event){...}

### 不含修饰符

1. 箭头函数/匿名函数
2. 路径写法
   以上两种这两种直接返回赋值

3. handler($event):这种外面包一层 function($event){return ...}

最后返回 data.on:{} data.nativeOn:{}

## 渲染

生成占位符 VNode 的时候做如下处理：

1. $listeners = data.on
2. data.on = data.nativeOn

在组件 create 与 update 的时候调用 updateDOMListeners 给真实的 DOM 元素(vnode.elm)注册/更新事件(利用 document.add/removeEventListeners)

调用 initEvents => updateComponentListeners 给组件注册/更新事件(new Vue 与 prepatch 时候调用，利用了 Vue 内部的发布订阅模式)

## 对于组件

表面上是在父组件页面书写的监听函数，其实是在子组件渲染的时候注册在子组件内部的

## v-on 指令

将 v-on 绑定的对象添加到 data.on 中，然后注册回调函数

## EventBus：事件总线

本质上就是创建一个空的 vm 实例，然后利用 Vue 的发布订阅模式达到任意组件之间的信息传递

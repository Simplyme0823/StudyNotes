<!-- @format -->

## 页面之间通信

    window.postMessage() 方法可以安全地实现跨源通信。
    一个窗口可以获得对另一个窗口的引用, 比如 targetWindow = window.opener
    然后在窗口上调用 targetWindow.postMessage() 方法分发一个 MessageEvent 消息
    otherWindow.postMessage(message, targetOrigin, [transfer]);
    通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。
    **无法检查origin和source属性会导致跨站点脚本攻击**

使用：本质上是自己 postMessage，自己监听 message 事件

## 与线程通讯

线程对象具有 postMessage()方法

在线程对象内部使用 self 对象可以使用 self.addEventListener 来接收消息
在线程对象内部使用 self.postMessage 向父 context 发送消息

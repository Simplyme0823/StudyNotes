<!-- @format -->

1. timers
   处理 setTimeout/setInterval 的回调函数；事件到了就执行，不到就进入下一阶段

2. I/O callbacks
   除了下面三个函数，其他都在这个阶段执行

   1. sesTimeout/setInterval 的回调
   2. setImmediate 的回调
   3. 关闭请求的回调函数，如 socket.on('close'...)

3. idle, prepare
   libuv 内部使用

4. Poll
   轮询事件，用户等待位返回的 I/O 时间，如服务器回应，用户移动鼠标等操作。

5. check
   setImmediate 的回调函数

6. close callbacks
   执行关闭请求的回调函数

// http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html

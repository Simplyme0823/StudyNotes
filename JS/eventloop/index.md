<!-- @format -->

1. 优先先执行宏任务
2. 执行宏任务过程中碰到微任务，会把微任务加入函数调用栈
3. 继续执行宏任务
4. 宏任务完全执行，调用函数栈中的微任务
5. 函数调用栈清空了，再执行任务队列中的宏任务

宏任务：setTimeout, setInterval, setImmediate, I/O, UI rendering
微任务： Promises, MutationObserver(await 后面的代码也是微任务)

注意事项：
promise 是被决议之后 then 内部的回调函数才会加入栈中
then 的链式调用中，前一个 then 函数执行完才会执行下一个函数，
如果前一个 then 函数返回的是一个 promise，那么后一个函数必须得等 promise 被决议

<!-- @format -->

1. webpack 对文件系统进行 watch 打包到内存中

2. devServer 通知浏览器端文件发生改变(通过 socket.js)

3. webpack-dev-server/client 接收到服务端消息做出响应

   1. type:hash，将 hash 值存储在 currenthash 中
   2. type:ok，将 hash 值发送给 devServer

4. webpack 接收到最新 hash 值验证并请求模块代码(通过 jsonp)

5. HotModuleReplacement.runtime 对模块进行热更新，更新失败会刷新浏览器

   1. 找到删除过期的模块和依赖
   2. 从缓存中删除
   3. 新模块添加到 modules 中

https://www.jianshu.com/p/95f5f51e6fc7
https://www.imooc.com/article/293578?block_id=tuijian_wz
https://zhuanlan.zhihu.com/p/30669007

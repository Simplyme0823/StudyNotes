<!-- @format -->

1. webpack 对文件系统进行 watch 打包到内存中

2. 编译完成后 devServer 通知浏览器端文件发生改变

3. webpack-dev-server/client 接收到服务端消息做出响应

4. webpack 接收到最新 hash 值验证并请求模块代码

5. HotModuleReplacement.runtime 对模块进行热更新，更新失败会刷新浏览器

6. 更新依赖

   https://www.jianshu.com/p/95f5f51e6fc7

<!-- @format -->

预加载(不仅仅是图片，preload)
懒加载
虚拟列表
无限滚动
下拉刷新
上拉刷新

1. 加速/减少 HTTP 请求 和服务端的请求交互耗时 js css img cdn 资源
   长缓存/协商缓存
   base64 代替
   prefetch 预解析
2. 延迟加载
   window.onload 一些不重要的第三方库
3. 图片懒加载，路由懒加载
4. 减少请求内容的体积 gzip brolit webp Accept 响应头
5. jss css 阻塞渲染
6. 优化用户的等待体验
   loading
   骨架屏 SPA 最简单的就是首页
7. quicklink
8. ssr next.js nuxt.js pug 模板渲染
9. 动态 polyfill script 标记 html 模板底部引用
10. 节流：页面滚动 防抖：搜索框

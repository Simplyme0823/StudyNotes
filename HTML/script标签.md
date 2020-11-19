<!-- @format -->

### 阻塞情况

1. 内联脚本一定会阻塞 DOM 解析
2. 内联脚本执行的时候，如果涉及到 CSS 样式，那么会阻塞 DOM 解析，先解析完 CSSOM
3. CSS 文件下载的时候不会阻塞 DOM 解析，会阻塞页面渲染

### defer async module

不添加标签：阻塞 HTML 解析，在资源下载完立即执行

defer 异步加载，执行延迟到文档解析后完成, 文件执行顺序与 script 标签位置一致，会在 readystatechange 变为 Interactive 后按顺序依次执行
module ：异步加载，执行延迟到文档解析后完成, 文件执行顺序与 script 标签位置一致
async 异步加载，加载完立即执行

```html
<!-- 第二个执行 -->
<script type="module"></script>

<!-- 第三个执行 -->
<script type="module"></script>

<!-- 第一个执行 -->
<script></script>
```

也可以给模块标签添加 async 属性。这样影响就是双重的：不仅模块执行顺序不再与 script 标签在页面中的顺序绑定，模块也不会等待文档完成解析才执行。

**不过，入口模块仍必须等待其依赖加载完成。**

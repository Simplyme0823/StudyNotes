<!-- @format -->

## src source

src 获取外部资源，src 指向的内容会嵌入到文档中当前标签的所在位置

img/script/iframe

## href hypertext reference 超文本引用

建立当前元素与文档之间的连接

link/a

### 区别

1. 浏览器识别 href 引用的文档并下载，不会停止当前文档解析(css 要用 link 不要用 import)
2. 解析到 src 会暂停其他资源的下载和处理，直到将该资源加载执行完毕

### link @import

1. 从属关系：@import 只能加载 css，link 可以加载其他
2. 加载顺序：link 引用 CSS 时，在页面载入的同时进行加载，@import 需要等到页面全部加载完毕后再加载
3. 兼容性：@import 是 css 2.1 提出，低版本浏览器不支持
4. DOM 可控性不同：link 支持 JS 控制 DOM 改变样式，@import 不支持

https://stackoverflow.com/questions/3395359/difference-between-src-and-href
https://www.cnblogs.com/bbcfive/p/10065035.html
空 src 与空 href 对首屏加载影响
https://blog.csdn.net/Panda_m/article/details/78456358

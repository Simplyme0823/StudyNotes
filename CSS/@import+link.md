<!-- @format -->

1. @import 为 CSS 写法，用以引入 CSS 样式，但是嵌套过多会导致串行下载，出现文档样式短暂失效
2. @import 仅支持 CSS2.1 以上
3. link 支持并行下载,@import 嵌套过多导致串行下载，FOUC

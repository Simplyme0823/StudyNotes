<!-- @format -->

什么是 FOUC(文档样式短暂失效)?

如果使用 import 方法对 CSS 进行导入,会导致某些页面在 Windows 下的 Internet Explorer 出现一些奇怪的现象:以无样式显示页面内容的瞬间闪烁,这种现象称之为文档样式短暂失效(Flash of Unstyled Content),简称为 FOUC。

原因大致为：
1，使用 import 方法导入样式表。
2，将样式表放在页面底部
3，有几个样式表，放在 html 结构的不同位置。

其实原理很清楚：当样式表晚于结构性 html 加载，当加载到此样式表时，页面将停止之前的渲染。此样式表被下载和解析后，将重新渲染页面，也就出现了短暂的花屏现象。

解决方法：
使用 LINK 标签将样式表放在文档 HEAD 中。

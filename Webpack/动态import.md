<!-- @format -->

webpack 通过 loader(babel)拿到 js 代码的 AST 后，会对 AST 进行分析，获取到动态 import 的路径参数后，进行上述处理，并且把本地满足上述正则的路径里面的文件全都拆出来，生成 chunk。所以，为了避免打出无用的 chunk，在使用动态 import 的时候，尽可能使用准确的静态路径，减少变量的影响范围。一般可以像下面这样使用：

链接：https://www.imooc.com/article/294778

1. import()会被转换成 webpack*require.e(/*! import() | es \_/ "es")，利用 jsonp 加载模块
2. 函数返回 promise 实例，promise.then 调用 webpack_require 创建创建模块

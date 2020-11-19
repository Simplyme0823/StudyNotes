<!-- @format -->

包体指的是请求体与响应体，因此是都可以在请求头与响应头中写的

两种传送包体的方法：

## 已知包体长度：

Content-Length,数值为 10 进制
如果响应包体长度为 10, 但是 Content-Length 为 6,那么只会得到长度为 6 的包体
如果响应包体长度为 10, 但是 Content-Length 为 11,那么无法解析，报错

但是存在问题：如果是实体来自于网络，不知道其具体大小

## 未知包体长度：

Transfer-Encoding: chunked

Content-Encoding 和 Transfer-Encoding 二者经常会结合来用

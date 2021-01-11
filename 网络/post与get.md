<!-- @format -->

## post 的 content-type

1. application/x-www-form-urlencoded

2. multipart/form-data

3. application/json

4. text/xml

5. binary (application/octet-stream)

## GET 请求

1. GET 用于获取信息，是无副作用的，是幂等的；POST 用于修改服务器上的数据，有副作用，非幂等

2. GET 产生一个 TCP 包，而 POST 产生两个 TCP 包；部分浏览器 post 方法会将 header 与 body 分开发送；先发送 header，服务端返回 100 状态码再发送 body。

3. 一般浏览器对 URL 长度有限制，因此 GET 请求的传参长度有限制

4. GET 请求参数会被完整保留在浏览器历史记录里，而 POST 中的参数不会被保留。

5. GET 请求只能进行 url 编码，而 POST 支持多种编码方式。

6. GET 请求会被浏览器主动 cache，而 POST 不会，除非手动设置。

7. 对参数的数据类型，GET 只接受 ASCII 字符，而 POST 没有限制

8. GET 参数通过 URL 传递，POST 放在 Request Body 中；

9. GET 比 POST 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息；

10. GET 在浏览器回退时是无害的，而 POST 会再次提交请求

11. GET 相对于 POST 更不安全，因为参数直接暴露在 URL 中

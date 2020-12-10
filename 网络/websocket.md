<!-- @format -->

websocket 是**持久化协议** ws:// wss

## 握手过程

### 客户端请求

GET / HTTP/1.1 // 这个请求必须是 GET 请求，并且 HTTP 的协议必须是 1.1
Connection:Upgrade // 表示客户端希望连接升级
Upgrade:websocket // 这个值必须是 websocket，表示请求升级为 websocket 协议
Host:xxxx // 请求的主机名称
Origin:xxxx // 打开这个 socket 的页面
Sec-Websocket-Key:sN9cRrP/n9NdMgdcy2VJFQ== // 随机生成的字符串，客户端通过 GUID 来验证这个参数是不是一个有效请求
Sec-WebSocket-Version:13 // websocket 使用的协议，RFC6455 规定这个值必须万为 13
Sec-WebSocket-Protocol:xxx // 客户端可以指定应用程序支持的协议，服务器选择其中的一个做为双方通信的协议
Sec-webSocket-Extension:xxxx // 客户端指定某些扩展协议，服务器选择其中一个

### 服务端响应

HTTP/1.1 101 Switching Protocols // 服务器端同意客户端的握手请求
Connection: Upgrade // 同意这个连接升级
Sec-WebSocket-Accept: IIRiohCjop4iJrmvySrFcwcXpHo= // 通过 GUID 计算出来的值
Sec-WebSocket-Version: 13 // websocket 的版本

## 特点

1. 二进制分帧
   把每个应用消息切分成一或多个帧，发送到目的地之后再组装起来，等到接收到完整的消息后再通知接收端
   帧类型/数据长度/payload data 等
2. 扩展协议：在 Upgrade 握手中通知服务器，服务器必须选择并确认要使用的扩展
   多路复用扩展，共享底层 TCP 连接
   压缩扩展：压缩传输的数据

### 控制帧(不能被分帧)

1. 关闭帧
2. ping 帧：当接收到 Ping 帧，终端必须发送一个 Pong 帧响应，除非它已经接收到一个关闭帧
3. pong 帧：一个 Pong 帧可能被主动发送，这作为单向心跳

### 数据帧

1. 文本：有效载荷数据是 UTF-8 编码的文本数据
2. 二进制

## 粘包

两个帧数据放在一个 tcp 消息包中，接收端不知道两个数据包的界限，无法分辨两个消息

## 拆包

接收端收到了两个数据包，但是这两个数据包要么是不完整的，要么就多出来一部分，

## 粘包/拆包发生原因

1. 发送的数据大于 TCP 缓冲区剩余空间大小，发生拆包
2. 待发送的数据大于最大报文长度，发生拆包
3. 发送的数据小于 TCP 发送缓冲区大小，TCP 将多次写入缓冲区的数据一次发送，发生粘包
4. 接收端的应用层没有及时读取接收缓冲区的数据，发生粘包

## 解决办法

1. 发送端给每个数据包添加首部，首部中至少包含数据包的长度，这样接受到数据后，通过部首可以知道包长度
   传输效率高，冗余信息少，但是编程实现复杂
2. 发送端将每个数据包封装为固定长度(不够的补零)
   传输效率低，但是编程简单
3. 可以在数据包之间设定边界，如特殊符号，这样可以通过边界将不同的数据包拆分

参考资料
https://segmentfault.com/a/1190000011450538
https://blog.csdn.net/yangzai187/article/details/93905594
https://zhuanlan.zhihu.com/p/25592934
https://blog.csdn.net/nookl/article/details/95029629

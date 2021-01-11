<!-- @format -->

## session 缺点

session_id 存储在服务器上，扩展性不好，因为要涉及到多服务器之间的 session 共享问题

1. 可以使用数据库或别的持久层存储，但是如果持久层出问题，session 数据就会丢失
2. 将数据保存在客户端

## JSON Web Token

“.”符号将 jwt 分成三个部分：HEADER.PAYLOAD.SIGNATURE

1. Header(头部)
   1. alg：签名算法
   2. typ：令牌类型，一般为 JWT
2. Payload(负载)：7 个官方字段+私有字段
   1. issuer：签发人
   2. expiration time：过期时间
   3. subject：主题
   4. audience：受众
   5. Not Before：生效时间
   6. Issued At：签发时间
   7. JWT ID：编号
3. Signature(签名):防止数据被篡改，secret 由服务器指定，只有服务器知道

```javascrit
    HMACSHA256(base64UrlEncode(header) + "." +base64UrlEncode(payload),secret)
```

## JWT 使用方式

客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。

## JWT 特点

1. JWT 不仅用于认证，也用于交换信息

## JWT 优点

1. 可扩展性好
2. 无状态

## JWT 缺点

1. 安全性：base64 编码，没有加密，不能存储敏感数据
2. 性能：jwt 太长会导致 http 请求头/请求体的数据比较大
3. 一次性：
   1. 无法废弃：通过上面 jwt 的验证机制可以看出来，一旦签发一个 jwt，在到期之前就会始终有效，无法中途废弃
   2. 续签：每次请求都要做 jwt 加解密导致性能问题

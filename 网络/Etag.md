<!-- @format -->

Etag 的算法
koa-etag

string/buffer 类型利用 crypto 生成 hash sha1 加密
stats 类型：未知类型，但是有 mtime 与 size, 将二者拼接作为 etag

对于负载均衡而言，很少使用 etag，因为对于同一资源每台服务器计算出的 e-tag 都不同

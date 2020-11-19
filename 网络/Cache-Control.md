<!-- @format -->

## 请求头

max-age:客户端不接受 Age 超过 max-age 秒的资源
max-stale:资源过期后，在 max-stale 秒内仍可以使用，不写值表明可以一直使用
min-fresh:客户端获取一个在 min-fresh 秒内最新资源
no-catch:强制向源服务器再次验证，端对端重载，不使用代理服务器
no-store:不要缓存任何内容
only-if-cached：告诉服务器仅能返回缓存的响应，如果没有缓存则返回 504
no-transform：告诉代理服务器不能修改响应包体内

## 响应头

s-maxage:针对共享缓存
max-age:缓存有效时间,超过就向服务器请求
no-cache/no-cache=Set-Cookie
no-store:告诉下游所有节点不能对响应缓存
public:代理服务器可以缓存该响应
private:代理服务器不能缓存该响应，如果 private 后面有值就不能缓存该头部，但是可以缓存其他的
must-revalidate：一旦过期必须向服务器验证
proxy-revalidate：仅对共享缓存有效
no-transform：告诉代理服务器不能修改响应包体内

### 禁止缓存内容

1. 强缓存：expire 过去的时间
2. 协商缓存：no-store max-age=0

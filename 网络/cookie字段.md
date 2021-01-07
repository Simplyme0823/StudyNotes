<!-- @format -->

domain:生效的域如 www.wrox.com或.wrox.com(对所有子域都生效)
path:页面路径
httpOnly
sameSite：strict/Lax(导航到目标网址的 GET 请求，只包括三种情况：链接，预加载请求，GET 表单)/None
expires：这个值是 GMT 格式（Wdy, DD-Mon-YYYY HH:MM:SS GMT），用于指定删除 cookie 的具体时间。默认是会话过期就删除 cookie
secure：安全标志，只针对 https 发送 cookie

HTTP/1.1 200 OK
Content-type: text/html
Set-Cookie: name=value; domain=.wrox.com; path=/; secure; expires=Mon, 22-Jan-07 07:10:24 GMT; domain=.wrox.com
Other-header: other-header-value

注意：
这些参数并不会随请求发送给服务器，实际发送的只有 cookie 的名/值对

http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html

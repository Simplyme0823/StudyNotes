<!-- @format -->

Cross-site request forgery

利用用户的登录状态，并通过第三方站点来做一些坏事

1. 用户成功登陆过 A 网站，并且返回 cookie 信息
2. 在打开 A 网站页面的同时，打开诱导网站 B，并且非法连接
3. 非法连接地址指向 A 网站，会携带 A 站点 cookie 信息
4. A 网站不知道是谁发出的请求，但是戴上了 Cookie 信息就进行了操作

SameSite

1. strict：在 A 站点访问 B 站点，是会携带 B 站点的 cookie，如果 samesite 为 strict 不能发送 cookie
2. Lax：跨站点的情况下，从第三方站点的【链接】打开和从第三方站点提交【 Get 】方式的表单这两种方式都会携带 Cookie；但如果在第三方站点中使用 Post 方法，或者通过 img、iframe 等标签加载的 URL，这些场景都不会携带 Cookie。
3. 而如果使用 None 的话，在任何情况下都会发送 Cookie 数据。

解决方法

1. 可以将关键的 cookie 设置 SameSite
2. 验证请求的来源：Origin（只有域名）；refer（具体路径）
3. CSRF Token：服务器生成 token 返回给页面；页面发起请求的时候将 token 返回给后端

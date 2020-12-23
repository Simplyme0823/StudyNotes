<!-- @format -->

## 缓存相关

cache-control:max-age=3153600000, public, immutable; etag last-modified 均有效，资源在用户访问时间内没有变化
当用户访问页面的时候，第一次发现图片每一加载完，使用 control + F5 强制刷新
control + f5 :cache-control:no-cache;pragma:no-cache, 且没有 if-none-match If-Modified-Since

## 正则

```javascript
const res = /welcome\*{2,4}to\*{2,4}fenqile/.test("welcome**to**fenqile**");
console.log(res);
```

## 值转换

"113" + 25 - 50

## 浏览器存储

sessionStorage/localStorage/cookie/indexDB 都有跨域限制

## 栈与队列都能实现递归：错，参考函数调用栈

## 树结构只能描述一对多，无法实现多对多，如果多对多的话可以使用图

## head 标签中的必备元素：title

## chrome 不能实现以下说明操作：2

1. 删除当前页面的所有本地缓存的 cookie 与 storage
2. 将页面请求转发至指定 IP
3. 对当前窗口进行的页面跳转进行完全的请求日志记录，计时页面域名不同
4. 实时修改当前 HTML/CSS/JS 代码并在网页加载时生效查阅更改代码的效果

## display:none 不会发送请求;background-image 只对块级元素生效

下面哪些会触发 http 请求

```html
// 不会触发
<textarea><img src="pic.jpg" style="display:none" alt="myhome"/></textarea>
// 不会触发
<textarea style="display:none">
<img src="pic.jpg" style="display:none" alt="myhome"/>
</textarea>
// 不会触发
<div style="display:none; background-image:url(pic.jpg)"></div>

// 不会触发
<textarea>
<span style="display:none; background-image:url(pic.jpg)"></span></textarea
>
```

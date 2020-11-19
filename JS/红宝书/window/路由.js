/** @format */

const location = document.location === window.location;
console.log(location);
document.location.search; // '?a=b&c=d'
document.location.hash; // '#hash' fragment
const iterator = URLSearchParams("?a=b&c=d");

// 更改location 都会导致页面重新定向，并且在历史记录中
// window.location.assign() 等价于 location.href ='' window.location=''

location.replace; // 不会记录在历史中

location.reload; // 可能从缓存中读取
location.reload(true); // 从服务器加载

// 4.hash路由和history路由

// router有两种模式：hash模式（默认）、history模式（需配置mode: 'history'）。两种模式的区别：简单回答：hash模式url带#号，history模式不带#号。

// hash 就是指 url 尾巴后的 # 号以及后面的字符。这里的 # 和 css 里的 # 是一个意思。hash 也 称作 锚点，本身是用来做页面定位的，她可以使对应 id 的元素显示在可视区域内。

// 由于 hash 值变化不会导致浏览器向服务器发出请求，而且 hash 改变会触发 hashchange 事件，浏览器的进后退也能对其进行控制，所以人们在 html5 的 history 出现前，基本都是使用 hash 来实现前端路由的。

// 已经有 hash 模式了，而且 hash 能兼容到IE8， history 只能兼容到 IE10，为什么还要搞个 history 呢？
// 首先，hash 本来是拿来做页面定位的，如果拿来做路由的话，原来的锚点功能就不能用了。其次，hash 的传参是基于 url 的，如果要传递复杂的数据，会有体积的限制，5而 history 模式不仅可以在url里放参数，还可以将数据存放在一个特定的对象中。

// history 模式改变 url 的方式会导致浏览器向服务器发送请求，这不是我们想看到的，我们需要在服务器端做处理：如果匹配不到任何静态资源，则应该始终返回同一个 html 页面。

// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onpopstate

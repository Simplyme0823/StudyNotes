/** @format */

// 方案1：純CSS
// 在页面中使用background: url(http://domain.tld/image-03.png) no-repeat -9999px -9999px;提前下载
// 然后在真正用到的时候引用相同的url，浏览器会从缓存中读取
// 缺点：无法精确控制预加载的时间

// 方案2：js+css 缺点：操纵dom 性能？？？
function pre() {
  document.getElementById("preload-01").style.background =
    "url(http://domain.tld/image-03.png) no-repeat -9999px -9999px";
}

// onload是html子资源全部加载完毕后触发
function preLoad(fn) {
  const oldLoad = window.onload;
  window.onload = function () {
    if (oldLoad) {
      oldLoad();
    }
    fn.call(this);
  };
}

preLoad(pre);

// 方案3 纯js  且不涉及到dom
function pre_(url) {
  const img = new Image();
  img.src = url;
}

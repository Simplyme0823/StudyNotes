<!-- @format -->

## 本质，何为 rem 布局

等比缩放

## 原理

rem 作用于非根元素时，相对于根元素字体大小；rem 作用于根元素字体大小时，相对于其出初始字体大小——MDN

## 弹性布局:vm 与 vh

vw —— 视口宽度的 1/100；vh —— 视口高度的 1/100 —— MDN

## 对比

### rem 方案

html {fons-size: width / 100}
p {width: 15.625rem}

### vw 方案

p {width: 15.625vw}

## 结合

vw 还可以和 rem 方案结合，这样计算 html 字体大小就不需要用 js 了

html {fons-size: 1vw} /_ 1vw = width / 100 _/
p {width: 15.625rem}

## 注意：em

1.  em 作为 font-size 的单位时，其代表父元素的字体大小，em 作为其他属性单位时，代表自身字体大小——MDN
    em 与 px 为字体而生，字体最好只用这两种单位
2.  rem 不是万能的，当使用了 rem 之后，字体单位要是使用 rem，则都是以 html 元素字体大小为基准
    如果不想统一字体大小；则不建议使用 rem 作为字体单位
    https://zhuanlan.zhihu.com/p/30413803
    https://juejin.cn/post/6844903733042610184

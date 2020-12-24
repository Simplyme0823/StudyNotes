<!-- @format -->

## 在 flex 布局中的高度问题

直接对 body 使用如下三连，其子元素是无法垂直居中的
原因：在父元素没有设置高度的时候，其子元素无法获取到父元素高度，因此 100%设置无效

## 解决方法

1. html 标签添加 height:100%
2. body 使用 vh 单位直接获取视窗高度

```css
display: flex;
align-items: center;
justify-content: center;
height: 100%;
```

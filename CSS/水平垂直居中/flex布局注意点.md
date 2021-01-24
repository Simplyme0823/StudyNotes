<!-- @format -->

## 在 flex 布局中的高度问题

直接对 body 使用如下三连，其子元素是无法垂直居中的
原因：在父元素没有设置高度的时候，其子元素无法获取到父元素高度，因此 100%设置无效

## flex 布局属性

flex-direction:主轴
flex-wrap:换行
flex-grow:比例放大
flex-shrink:比例缩小
justify-content:主轴排列
align-items:交叉轴排列
align-self:元素自身排列

flex 属性是三个属性的简称:flex-grow(必需) | flex-shrink | flex-basis ，后两个属性可选。默认情况是 flex: 0 1 auto;

## 解决方法

1. html 标签添加 height:100%
2. body 使用 vh 单位直接获取视窗高度

```css
display: flex;
align-items: center;
justify-content: center;
height: 100%;
```

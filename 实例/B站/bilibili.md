<!-- @format -->

## canvas 与 svg

svg 支持事件处理，canvas 需要自己根据坐标位置来判断当前选中元素，再进行相应处理
svg 为矢量图(点线圆等基本组成)，缩量不失真
svg 不适合图像密集型项目

## a 标签 click 与 href

click 先执行，href 后执行

1. href 不执行:javascript:void(0)
   <a href="javascript:void(0)" onclick="doSomething()">链接</a>

2. href 不执行:return false
   <a href="https://www.baidu.com/" onclick="doSomething();return false;">链接</a>

3. href 不执行：event.returnValue=false
   <a href="https://www.baidu.com/" onclick="doSomething();event.returnValue=false;">链接</a>

4. e.preventDefault

## 资源加载顺序

prefetch:空闲加载
preload:直接加载
as:仅在 link 标签中使用，表文件类型

## html5

area 标签：在图像上划分区域，这些区域是可点击的，并且对应不同操作

## CSS 中不继承的属性

margin

## CSS 权重

!important > id > class > tag
内联 > link > import

## transition

transition 是状态的过渡，如果一个元素一开始没有 height，但是自己添加 height，不会有过渡效果，

## JSON.string

丢弃 undefined 的键值
{a:undefined} => {}

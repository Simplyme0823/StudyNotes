<!-- @format -->

## 概念

1. 像素(pixel)，简写为 px

   图像的最小单位，不可被再分割

2. 设备像素比(DPR)

   设备像素比 pt = 设备像素 ppi / 设备独立像素 dpi

3. CSS 像素

   CSS 样式代码中使用的**逻辑像素**，px 是相对单位，相对的是设备像素

4. 设备像素(物理像素)

   设备的最小像素点

5. 设备独立像素(逻辑像素) dpi

   计算机坐标系统的一个点，为虚拟像素(CSS 像素)，越小越清晰，会转换成物理像素

## 关系

逻辑像素 1 pt,在 DPR 为 2 的设备上显示为 2px 的物理像素

pt，即，point 为 ios 设备单位

## 解决

1. css 伪元素::after + transform: scaleY(0.5)
   优点：::after 伪元素独立于当前元素，可以单独对其缩放而不影响元素本身缩放
2. 媒体查询，根据不同的 DPR 进行缩放(当然，也是对伪元素)
   通过查询-webkit-min-device-pixel-ratio 来获取设备像素比 DPR
   然后先通过 width/height 放大，通过 transform：scale(1/DPR)来缩小
   https://zhuanlan.zhihu.com/p/100752129
   https://www.jianshu.com/p/3a262758abcf
   https://www.jianshu.com/p/bad34b7cf3e1

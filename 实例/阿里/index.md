<!-- @format -->

1. JSX 语句中，哪一个无法达到效果
   答案：第三个 className

<h2>Hello World</h2>
<input type="checkbox"/>
<div class="msg-box">{msg}</div> 
<label htmlFor="name">Leo</label>
<div style={{height:50}}></div>
<img src={imgSrc}/>

2. 正则表达式/a+(bab)?(caac)\*/,那个选项是该正则的子集

   题目的意思是技能满足下面选项又能满足题干给出的 正则
   答案：第三个

/(bab)(caca)/
/a(bab){2}(caac)\*/
/a{2}/
/a+(bab){0,1}(ca)+(ca)/
/a(^bab)+(caac){1,}/
/a+(babc){2,}(acc){1,}/

3. 下列说法错误:3

1) Blink 和 WebKit 浏览器中，某个具有 3D 或透视变换(perspective,transform)的 CSS 属性，会单独创建一个图层
2) left/top 属性触发回流，使用 translate，不会触发回流
3) 移动端开启硬件加速，因此尽可能多使用 translate3d/translateZ(0)
4) 解决选项性能问题时候，首要就是避免层的重绘和重排

4. 数组反转 123 -> 4321

   答案：1 3

   a.reverse().unshift(4)
   a.push(4).reverse()
   a.push(4);a.reverse()
   a.splice(3,1,4).reverse()

5. 不改变原有数组情况下，拷贝出数组 b 且满足 b!=a
   即，哪些方法会返回一个新数组 2 / 4

   1. let b = a
   2. let b = a.slice()
   3. let b = a.splice(0,0)
   4. let b = a.concat()

6. 给节点#box 添加样式，节点#box 距离 body 的上边距是多少

   1. position:static 20px
   2. position:relative 30px
   3. position:absolute 30px
   4. position:sticky 不滚动的时候 30px 滚动的时候 10px

```html
<body style="margin:0;padding:0">
  <div id="box" style="top:10px;margin:20px 10px"></div>
</body>
```

7. 动态加载 script

```javascript
const script = document.createElement("script");
script.setAttribute("src", "");
script.setAttribute("type", "text/javascript");
script.onload = script.onreadystatechange = function () {
  if (!this.readyState || ["loaded", "complete"].includes(this.readyState)) {
  }
};
script.onError = function () {};
```

8. 两种 CSS 方法实现条形图
   A 30% #f00
   B 80% #ddd
   c 70% #0fd
   d 60% #ff0
   e 90% #234

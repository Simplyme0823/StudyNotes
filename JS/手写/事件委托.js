/** @format */

// target 与 currentTarget的区别
//currentTarget是绑定事件的元素;
// target是触发事件的元素

//将button事件委托给`div1`
on("click", "#div1", "button", () => {
  console.log("button被点击了");
});
function on(eventType, element, selector, fn) {
  // 如果element不是一个元素，就获取element所在的元素
  if (!(element instanceof Element)) {
    element = document.querySelector(element);
  }
  element.addEventListener(eventType, e => {
    const t = e.target;
    // matches判断一个元素是否满足一个选择器
    if (t.matches(selector)) {
      fn(e);
    }
  });
}

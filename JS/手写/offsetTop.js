/** @format */

// jquery中获取元素距离可视窗口距离

// HTMLElement.offsetParent 是一个只读属性，
// 1. 返回一个指向最近的（指包含层级上的最近）包含该元素的定位元素
// 2. 或者最近的 table,td,th,body元素。
// 当元素的 style.display 设置为 "none" 时，offsetParent 返回 null。
// offsetParent 很有用，因为 offsetTop 和 offsetLeft 都是相对于其[内边距]边界的。

function offset(element) {
  let parent = element.offsetParent;
  let top = element.offsetTop;
  let left = element.offsetLeft;
  // 距离body的距离
  while (parent) {
    if (!/MSIE 8/.test(navigator.userAgent)) {
      left += parent.clientLeft;
      top += parent.clientTop;
    }
    left += parent.offsetLeft;
    top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return {
    top,
    left,
  };
}

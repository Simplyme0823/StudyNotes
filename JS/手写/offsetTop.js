/** @format */

// jquery中获取元素距离可视窗口距离

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

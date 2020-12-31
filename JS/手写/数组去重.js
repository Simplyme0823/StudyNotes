/** @format */
// 空间换时间
function duplicate(arr) {
  const map = new Map();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (!map.get(arr[i])) map.set(arr[i], true);
  }
  return [...map.keys()];
}

// filter 利用下标 本质上还是双循环
function duplicate_(arr) {
  arr.filter((item, index) => arr.indexOf(item) === index);
}

// 双指针

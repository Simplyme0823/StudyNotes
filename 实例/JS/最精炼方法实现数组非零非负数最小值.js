/** @format */
// 时间复杂度O(N)
function getIndex(arr) {
  let index = -1;
  arr.reduce((prev, cur, i) => {
    if (cur > 0) {
      const min = Math.min(prev, cur);
      if (cur === min) {
        index = i;
        prev = cur;
      }
    }
    return prev;
  }, Infinity);
  return index;
}
const res = getIndex([10, 21, 0, -7, 35, 7, 9, 23, 18]);
console.log(res); //5

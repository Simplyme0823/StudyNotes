/** @format */

const nums = [-1, 0, 1, 2, -1, -4];

const threeSum = num => {
  // 先排序
  // 再双指针

  let res = [];
  let len = num.length;

  num.sort((a, b) => a - b);

  if (nums[0] > 0 || nums[len - 1] < 0) return res;

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) break;
    let sec = i + 1;
    let th = len - 1;
    while (sec < th) {
      let result = nums[i] + num[sec] + num[th];
      if (result === 0) {
        res.push([num[i], num[sec], num[th]]);
      }

      if (result < 0) {
        sec++;
        while (num[sec] === num[sec + 1] && sec < th) {
          sec++;
        }
      } else {
        th--;
        while (num[th] === num[th - 1] && sec < th) {
          th--;
        }
      }
    }
  }
  return res;
};
const res = threeSum(nums);

console.log(res);

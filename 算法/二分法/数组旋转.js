/** @format */
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。

function findMin(nums) {
  if (!Array.isArray(nums)) return false;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      // 最小元素肯定在mid的右边
      left = mid + 1;
    } else if (nums[mid] === nums[right]) {
      left = left + 1;
    } else {
      // mid在左边的递增区
      right = mid;
    }
  }
  return nums[left];
}

const res = findMin(input);
console.log(res);

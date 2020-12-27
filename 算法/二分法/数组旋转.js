/** @format */
const input = [4, 5, 6, 7, 0, 1, 2];
function findMin(nums) {
  if (!Array.isArray(nums)) return false;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] === nums[right]) {
      left = left + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

const res = findMin(input);
console.log(res);

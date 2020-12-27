/** @format */
const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
function add(nums1, nums2, R) {
  const n1 = nums1.split("").map(item => chars.indexOf(item));
  const n2 = nums2.split("").map(item => chars.indexOf(item));
  let carry = 0;
  let l1 = n1.length;
  let l2 = n2.length;
  let res = "";
  const len = Math.max(l1, l2);

  // 正向遍历
  for (let i = 0; i < len; i++) {
    // 反向取值
    let ia = i < l1 ? chars.indexOf(nums1[l1 - i - 1]) : 0;
    let ib = i < l2 ? chars.indexOf(nums2[l2 - i - 1]) : 0;
    let sum = ia + ib + carry;
    if (sum > R - 1) {
      carry = 1;
    } else {
      carry = 0;
    }
    res = chars.charAt(sum % R) + res;
  }
  if (carry === 1) {
    res = "1" + res;
  }
  return res;
}
console.log(add("123", "45", 10));

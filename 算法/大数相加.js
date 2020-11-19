/** @format */

function add(number1, number2) {
  let arr1 = number1.split("");
  let arr2 = number2.split("");
  let arr1Len = arr1.length;
  let arr2Len = arr2.length;
  let m = Math.max(arr1Len, arr2Len);
  let carry = 0;
  let res = "";
  for (let i = 0; i < m; i++) {
    let ia = i < arr1Len ? parseInt(arr1[arr1Len - i - 1]) : 0;
    let ib = i < arr2Len ? parseInt(arr2[arr2Len - i - 1]) : 0;
    let sum = ia + ib + carry;
    if (sum > 9) {
      sum = sum - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    res = sum.toString() + res;
    if (carry === 1) {
      res = "1" + res;
    }
  }
  console.log(res);
}

add("123", "945");

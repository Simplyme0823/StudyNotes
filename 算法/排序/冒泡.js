/** @format */
let a = [1, 5, 0, 6, 4];
function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 提前终止排序轮数
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubble(a);
console.log(a);

/** @format */

function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 提前终止排序轮数
    let sort = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      let temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        sort = true;
      }
    }
    if (sort) {
      break;
    }
  }
}

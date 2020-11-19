/** @format */

function quickSort(arr, start, end) {
  if (start >= end) return;
  let pivotIndex = partition(arr, start, end);
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

// 双指针
function partition(arr, start, end) {
  if (!arr) return;
  let pivot = arr[start];
  let left = start;
  let right = end;

  while (left != right) {
    while (left < right && arr[right] > pivot) right--;
    while (left < right && arr[left] <= pivot) left++;
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  // 最后一步
  arr[start] = arr[left];
  arr[left] = pivot;
  return left;
}

let a = [1, 5, 0, 6, 4];

quickSort(a, 0, 4);
console.log(a);

// 4 7 6 5 3 2 8 1

// 选定基准元素 pivot
// 设定两个指针，left,right
// 先看右指针 右指针数字大于pivot 右指针左移
// 再看左指针 左指针数字小于pivot 左指针右移
// 交换左右指针元素
// 左右指针index相等 交换基准元素与 index对应的元素
// 一次操作完成
// 递归，左侧数组，右侧数组依次完成

// 单指针
function partition_(arr, start, end) {
  let pivot = arr[start];
  let mark = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      mark++;
      let temp = arr[mark];
      arr[mark] = arr[i];
      arr[i] = temp;
    }
  }

  arr[start] = arr[mark];
  arr[mark] = pivot;
  return mark;
}

function quickSort_(arr, start, end) {
  if (start >= end) return;
  let pivotIndex = partition_(arr, start, end);
  quickSort_(arr, start, pivotIndex - 1);
  quickSort_(arr, pivotIndex + 1, end);
}

let a_ = [1, 5, 0, 6, 4];

quickSort_(a_, 0, 4);
console.log(a_);

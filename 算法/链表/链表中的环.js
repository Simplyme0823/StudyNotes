/** @format */

class Nodes {
  constructor() {
    this.data = null;
    this.next = null;
  }
}

const node1 = new Nodes(5);
const node2 = new Nodes(3);
const node3 = new Nodes(7);
const node4 = new Nodes(2);
const node5 = new Nodes(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;

// 检查是否有环
function loop(head) {
  let p1 = head;
  let p2 = head;
  // 引用对象 p2!=null 同 p1!==null
  while (p2 != null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 == p2) {
      return true;
    }
  }
  return false;
}
console.log(loop(node1));

// 求环的长度
// 再次相遇时，移动的步数
function loopLength(head) {
  let p1 = head;
  let p2 = head;
  let index = 0;
  let firstMeet = false;
  // 引用对象 p2!=null 同 p1!==null
  while (p2 != null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (firstMeet) {
      index++;
    }
    if (p1 == p2) {
      if (!firstMeet) {
        firstMeet = true;
      } else {
        return index;
      }
    }
  }
  return 0;
}
console.log(loopLength(node1));

// 环的起点，相遇点找到后，将p1重置
// 然后再次循环，再次相遇点就是环起点
function LoopStart(head) {
  let p1 = head;
  let p2 = head;
  // 先找到相遇点
  while (p2.next != null && p2.next.next != null) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 == p2) {
      break;
    }
  }
  // 重置p1 找到相遇点
  p1 = head;
  while (p2.next != null && p2.next.next != null) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 == p2) {
      return p2;
    }
  }
}

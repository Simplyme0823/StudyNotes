/** @format */
// 抄的 因为keep-alive里面用了LRU 不过比较简单

// 双向列表 + 散列表
// ES6的map本质上就是哈希表
class Node {
  constructor(prev, next, value, key) {
    this.prev = prev;
    this.next = next;
    this.value = value;
    this.key = key;
  }
}

class DoubleList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }
}

class LRUCache {
  constructor(max) {
    this.max = max;
    this.map = new Map();
    let node = new Node(null, null, null, null);
    this.doubleList = new DoubleList(node, node);
  }

  get(key) {
    let node = this.map.get(key);
    if (!node) {
      return -1;
    } else {
      this.moveNode2Tail(key, node);
      return node.value;
    }
  }
  put(key, value) {
    let node = this.map.get(key);
    // 结点存在就删除/更新该节点
    if (node) {
      // 已经是队尾元素，直接更新即可
      if (!node.next) {
        node.value = value;
        return;
      }
      // 删除结点后更新前后关系
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    let newNode = new Node(null, null, value, key);
    // 构建新的关系
    newNode.pre = this.doubleList.tail;
    this.doubleList.tail.next = newNode;
    // 更新队尾
    this.doubleList.tail = newNode;
    // 更新存储
    this.map.set(key, newNode);
    if (this.map.size > this.max) {
      this.map.delete(this.doubleList.head.next.key);
      this.doubleList.head.next = this.doubleList.head.next.next;
      this.doubleList.head.next.prev = this.doubleList.head;
    }
  }

  moveNode2Tail(key, node) {
    if (!node.next) {
      return;
    }
    // 删除结点
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.map.delete(key);
    // 新增节点至尾部
    let newNode = new Node(null, null, key, value);
    this.doubleList.tail.next = newNode;
    newNode.prev = this.doubleList.tail;
    this.doubleList.tail = newNode;
    this.map.set(key, newNode);
  }
}

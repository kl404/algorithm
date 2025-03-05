/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.has(nums[i]) ? map.get(nums[i]) : 0) + 1);
  }
  const heap = new MinHeap();
  const arr = Array.from(map.keys());
  for (let i = 0; i < arr.length; i++) {
    if (heap.size() < k) {
      heap.push(arr[i]);
    } else {
      if (getValue(arr[i]) > getValue(heap.peek())) {
        heap.pop();
        heap.push(arr[i]);
      }
    }
  }
  return heap.heap;
};
const map = new Map();
function getValue(i) {
  return map.get(i);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  #left(i) {
    return i * 2 + 1;
  }
  #right(i) {
    return i * 2 + 2;
  }
  #parent(i) {
    return Math.floor((i - 1) / 2);
  }
  push(val) {
    this.heap.push(val);
    this.siftUp(this.size() - 1);
  }
  pop() {
    this.swap(0, this.size() - 1);
    const val = this.heap.pop();
    this.siftDown(0);
    return val;
  }
  siftUp(i) {
    while (true) {
      const parent = this.#parent(i);
      if (parent < 0 || getValue(this.heap[i]) >= getValue(this.heap[parent]))
        break;
      this.swap(i, parent);
      i = parent;
    }
  }
  siftDown(i) {
    while (true) {
      const left = this.#left(i);
      const right = this.#right(i);

      let minIndex = i;
      if (
        left < this.size() &&
        getValue(this.heap[left]) < getValue(this.heap[minIndex])
      )
        minIndex = left;
      if (
        right < this.size() &&
        getValue(this.heap[right]) < getValue(this.heap[minIndex])
      )
        minIndex = right;

      if (minIndex == i) break;

      this.swap(i, minIndex);
      i = minIndex;
    }
  }
}

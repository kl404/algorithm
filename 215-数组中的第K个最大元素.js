/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    if (heap.size() < k) {
      heap.push(nums[i]);
    } else {
      if (nums[i] > heap.peek()) {
        heap.pop();
        heap.push(nums[i]);
      }
    }
  }
  return heap.pop();
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  #parent(i) {
    return Math.floor((i - 1) / 2);
  }
  #left(i) {
    return 2 * i + 1;
  }
  #right(i) {
    return 2 * i + 2;
  }

  siftUp(index) {
    while (true) {
      const parent = this.#parent(index);
      if (parent < 0 || this.heap[index] >= this.heap[parent]) {
        break;
      }
      this.swap(index, parent);
      index = parent;
    }
  }
  siftDown(index) {
    while (true) {
      const left = this.#left(index);
      const right = this.#right(index);
      let minIndex = index;

      if (left < this.size() && this.heap[left] < this.heap[minIndex]) {
        minIndex = left;
      }
      if (right < this.size() && this.heap[right] < this.heap[minIndex]) {
        minIndex = right;
      }
      if (minIndex === index) break;
      this.swap(index, minIndex);
      index = minIndex;
    }
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
}

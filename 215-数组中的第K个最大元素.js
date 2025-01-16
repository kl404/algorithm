/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var findKthLargest = function (nums, k) {
  const heap = new MinHeap(nums);

  for (let i = 0; i < nums.length; i++) {
    heap.push(nums[i]);
    if (heap.size() > k) {
      heap.pop();
    }
  }
  return heap.top();
};

class MinHeap {
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  constructor(nums) {
    this.minHeap = [];
  }

  

  push(val) {
    this.minHeap.push(val);
    this.shiftUp(this.minHeap.length - 1);
  }
  shiftUp(i) {
    while (true) {
      const p = this.parent(i);
      if (p < 0 || this.minHeap[p] <= this.minHeap[i]) break;
      [this.minHeap[p], this.minHeap[i]] = [this.minHeap[i], this.minHeap[p]];
      i = p;
    }
  }

  pop() {
    if (this.minHeap.length === 0) return;
    [this.minHeap[0], this.minHeap[this.minHeap.length - 1]] = [
      this.minHeap[this.minHeap.length - 1],
      this.minHeap[0],
    ];
    const val = this.minHeap.pop();
    this.shiftDown(0);
    return val;
  }
  shiftDown(i) {
    while (true) {
      const l = this.leftChild(i);
      const r = this.rightChild(i);
      let min = i;
      if (l < this.minHeap.length && this.minHeap[l] < this.minHeap[min])
        min = l;
      if (r < this.minHeap.length && this.minHeap[r] < this.minHeap[min])
        min = r;
      if (min === i) break;
      [this.minHeap[i], this.minHeap[min]] = [
        this.minHeap[min],
        this.minHeap[i],
      ];
      i = min;
    }
  }

  top() {
    return this.minHeap[0];
  }
  size() {
    return this.minHeap.length;
  }
}

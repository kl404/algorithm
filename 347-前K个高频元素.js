/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  const heap = new MinHeap();
  for (const [num, cnt] of map.entries()) {
    if (heap.size() < k) {
      heap.push({ num, cnt });
    } else if (heap.heap[0].cnt < cnt) {
      heap.pop();
      heap.push({ num, cnt });
    }
  }
  return heap.heap.map((item) => item.num);
};

class MinHeap {
  heap = [];

  size() {
    return this.heap.length;
  }
  #leftChild(i) {
    return 2 * i + 1;
  }
  #rightChild(i) {
    return 2 * i + 2;
  }
  #parent(i) {
    return Math.floor((i - 1) / 2);
  }

  #swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(val) {
    this.heap.push(val);
    this.#shiftUp(this.heap.length - 1);
  }
  #shiftUp(i) {
    while (i > 0) {
      const parent = this.#parent(i);
      if (this.heap[parent].cnt > this.heap[i].cnt) {
        this.#swap(parent, i);
        i = parent;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }
    const res = this.heap[0];
    this.#swap(0, this.heap.length - 1);
    this.heap.pop();
    this.#shiftDown(0);
    return res;
  }

  #shiftDown(i) {
    while (i < this.heap.length) {
      const left = this.#leftChild(i);
      const right = this.#rightChild(i);
      let min = i;
      if (left < this.heap.length && this.heap[left].cnt < this.heap[min].cnt) {
        min = left;
      }
      if (
        right < this.heap.length &&
        this.heap[right].cnt < this.heap[min].cnt
      ) {
        min = right;
      }
      if (min !== i) {
        this.#swap(min, i);
        i = min;
      } else {
        break;
      }
    }
  }
}

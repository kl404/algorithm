/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  heapSort(nums);
  return nums;
};

/* 堆化 */
/**
 * 堆化函数 - 将以root为根节点的子树调整为最大堆
 * @param {number[]} heap 待调整的堆数组
 * @param {number} root 当前需要堆化的根节点索引
 * @param {number} heapLen 堆的有效长度
 */
function maxHeapify(heap, root, heapLen) {
  let p = root; // p为当前节点
  while (p * 2 + 1 < heapLen) { // 当左子节点存在时继续循环
    let l = p * 2 + 1, // 左子节点索引
      r = p * 2 + 2;   // 右子节点索引
    let next; // 记录较大子节点的索引
    if (heapLen <= r || heap[r] < heap[l]) { // 如果右子节点不存在或左子节点更大
      next = l; // 选择左子节点
    } else {
      next = r; // 选择右子节点
    }
    if (heap[p] < heap[next]) { // 如果当前节点小于子节点中的较大值
      [heap[p], heap[next]] = [heap[next], heap[p]]; // 交换位置
      p = next; // 继续向下调整
    } else {
      break; // 已经满足最大堆性质，退出循环
    }
  }
}

/* 建堆：倒着将每个非叶子节点进行堆化 */
function buildHeap(heap) {
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
    maxHeapify(heap, i, heap.length);
  }
}

/* 堆排序 */
function heapSort(nums) {
  buildHeap(nums);
  for (let i = nums.length - 1; i >= 0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]];
    maxHeapify(nums, 0, i);
  }
}

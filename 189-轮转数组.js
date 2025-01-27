/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 处理 k 大于数组长度的情况
  k = k % nums.length;

  // 反转整个数组
  reverse(nums, 0, nums.length - 1);
  // 反转前 k 个元素
  reverse(nums, 0, k - 1);
  // 反转剩余元素
  reverse(nums, k, nums.length - 1);

  // 辅助函数：反转数组指定区间的元素
  function reverse(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
};

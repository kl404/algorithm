/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let n = nums.length;
  // 定义两个dp数组，分别记录到当前位置的最大值和最小值
  let maxDp = new Array(n);
  let minDp = new Array(n);

  // 初始化第一个元素
  maxDp[0] = nums[0];
  minDp[0] = nums[0];
  // 记录全局最大值
  let result = nums[0];

  for (let i = 1; i < n; i++) {
    // 当前位置的最大值可能来自：
    // 1. 当前数字本身
    // 2. 上一个最大值乘以当前数字
    // 3. 上一个最小值乘以当前数字（当前数字为负数时）
    maxDp[i] = Math.max(
      nums[i],
      Math.max(maxDp[i - 1] * nums[i], minDp[i - 1] * nums[i])
    );
    minDp[i] = Math.min(
      nums[i],
      Math.min(maxDp[i - 1] * nums[i], minDp[i - 1] * nums[i])
    );

    // 更新全局最大值
    result = Math.max(result, maxDp[i]);
  }

  return result;
};

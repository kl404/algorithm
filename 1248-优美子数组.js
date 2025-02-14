/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const n = nums.length;
  // 创建前缀和数组，preSum[i] 表示前i个数中奇数的个数
  const preSum = new Array(n + 1).fill(0);
  // preSum[0] = 0 表示空数组的奇数个数

  // 计算前缀和（奇数的个数）
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + (nums[i] % 2);
  }

  // count[j] 表示前缀和为j的个数
  const count = new Array(n + 1).fill(0);
  count[0] = 1; // 初始空数组的前缀和为0

  let result = 0;
  // 遍历前缀和数组
  for (let i = 1; i <= n; i++) {
    // 如果当前前缀和减去k存在，说明找到了优美子数组
    if (preSum[i] >= k) {
      result += count[preSum[i] - k];
    }
    // 更新前缀和计数
    count[preSum[i]]++;
  }

  return result;
};

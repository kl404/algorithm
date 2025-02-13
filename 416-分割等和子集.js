/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  let target = sum / 2;
  // dp[i][j] 表示从前i个数字中是否可以选出和为j的组合
  let dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(target + 1).fill(false));

  // 初始化：空集合可以得到和为0
  for (let i = 0; i <= nums.length; i++) {
    dp[i][0] = true;
  }

  // 对于每个数字，可以选择用或不用
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      if (j >= nums[i - 1]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[nums.length][target];
};

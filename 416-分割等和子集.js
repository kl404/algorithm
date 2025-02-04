/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  const target = sum / 2;

  // 回溯函数
  const backtrack = (index, currentSum) => {
    // 基础情况：如果当前和等于目标值，找到解
    if (currentSum === target) return true;
    // 如果超过目标值或已经遍历完所有数字，返回false
    if (currentSum > target || index >= nums.length) return false;

    // 选择当前数字
    if (backtrack(index + 1, currentSum + nums[index])) return true;
    // 不选择当前数字
    if (backtrack(index + 1, currentSum)) return true;

    return false;
  };

  return backtrack(0, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const n = nums.length;
  // 创建前缀和数组和后缀和数组
  const prefix = new Array(n).fill(0);
  const suffix = new Array(n).fill(0);

  // 计算前缀和
  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  // 计算后缀和
  suffix[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + nums[i];
  }

  // 检查每个位置
  for (let i = 0; i < n; i++) {
    const leftSum = i === 0 ? 0 : prefix[i - 1];
    const rightSum = i === n - 1 ? 0 : suffix[i + 1];
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
};

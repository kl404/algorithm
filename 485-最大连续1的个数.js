/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let left = 0; // 左指针
  let maxLen = 0; // 记录最大长度

  // 右指针遍历数组
  for (let right = 0; right < nums.length; right++) {
    // 当遇到0时，左指针移动到右指针的下一位
    if (nums[right] === 0) {
      left = right + 1;
    }
    // 计算当前连续1的长度
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

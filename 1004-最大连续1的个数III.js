/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0; // 左指针
  let zeros = 0; // 记录窗口内0的个数
  let maxLen = 0; // 记录最大长度

  // 右指针遍历数组
  for (let right = 0; right < nums.length; right++) {
    // 如果当前数字是0，计数加1
    if (nums[right] === 0) {
      zeros++;
    }

    // 如果窗口内0的个数超过了k，需要移动左指针
    while (zeros > k) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }

    // 更新最大长度
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

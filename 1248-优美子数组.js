/**
 * @param {number[]} nums
 * @param {number[]} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const n = nums.length;
  const map = new Map();
  map.set(0, 1);

  let preSum = 0;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 != 0) {
      preSum++;
    }
    // 当前奇数个数减去k，找到之前出现的次数
    if (preSum >= k) {
      cnt += map.get(preSum - k);
    }
    // 更新当前奇数个数的出现次数
    map.set(preSum, (map.get(preSum) || 0) + 1);
  }
  return cnt;
};

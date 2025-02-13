/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const n = nums.length;
  const cur_min = new Array(n + 1).fill(0);
  const cur_max = new Array(n + 1).fill(0);

  cur_min[0] = nums[0];
  cur_max[0] = nums[0];

  for (let i = 1; i < n; i++) {
    cur_max[i] = Math.max(
      cur_max[i - 1] * nums[i],
      cur_min[i - 1] * nums[i],
      nums[i]
    );
    cur_min[i] = Math.min(
      cur_max[i - 1] * nums[i],
      cur_min[i - 1] * nums[i],
      nums[i]
    );
  }
  return Math.max(...cur_max.slice(0, n));
};

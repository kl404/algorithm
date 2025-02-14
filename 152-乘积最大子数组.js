/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const n = nums.length;


  const min_dp = new Array(n+1).fill(0);
  const max_dp = new Array(n+1).fill(0);

  min_dp[1] = nums[0];
  max_dp[1] = nums[0];


  for(let i=1;i<n;i++){
    max_dp[i+1] = Math.max(max_dp[i] * nums[i], min_dp[i] * nums[i], nums[i]);
    min_dp[i+1] = Math.min(max_dp[i] * nums[i], min_dp[i] * nums[i], nums[i]);
  }

  return Math.max(...(max_dp.slice(1)));



};

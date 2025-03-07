/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length;
    const dp = new Array(n + 1).fill(0);
    dp[1] = nums[0]
    for(let i =1;i<n;i++){
        dp[i + 1] = Math.max(dp[i] + nums[i], nums[i]);

    }

    return Math.max([...dp])
};
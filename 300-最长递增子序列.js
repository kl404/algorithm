/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;

    const dp = new Array(n+1).fill(0);

    for(let i =0 ;i < n;i++){
      dp[i + 1] = 1;
      for(j = 0; j < i; j++){
        if(nums[i] > nums[j]){
          dp[i + 1] = Math.max(dp[i + 1], dp[j + 1] + 1);
        }
      }
    }

    return Math.max(...dp);
};
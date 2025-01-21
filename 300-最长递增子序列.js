/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n =nums.length;
    const dp=new Array(n+1).fill(1);
    for(let i=1;i<=n;i++){
        for(let j=1;j<i;j++){
            if(nums[i-1]>nums[j-1]){
                dp[i]=Math.max(dp[i],dp[j]+1);
            }
        }
    }
    return Math.max(...dp);
};
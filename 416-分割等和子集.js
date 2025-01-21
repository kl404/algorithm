/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum=nums.reduce((a,b)=>a+b,0);
    if(sum%2!==0) return false;


    let target=sum/2;
    let dp=new Array(target+1).fill(false);
    dp[0]=true;
    for(let i=0;i<nums.length;i++){
        for(let j=target;j>=nums[i];j--){
            dp[j]=dp[j]||dp[j-nums[i]];
        }
    }
    return dp[target];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 如果数组为空返回0
    if (!nums.length) {
        return 0;
    }
    
    // 创建dp数组并初始化为1
    const dp = new Array(nums.length).fill(1);
    
    // 对每个位置i,检查前面所有小于nums[i]的数
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    // 返回dp数组中的最大值
    return Math.max(...dp);
};

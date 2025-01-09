/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 使用前缀和 + 哈希表的方法
    // 前缀和数组中的每个值代表从数组开始到当前位置的所有数字之和
    let map = new Map(); // 存储前缀和及其出现次数
    map.set(0, 1); // 初始化前缀和为0出现1次
    
    let count = 0; // 记录符合条件的子数组个数
    let preSum = 0; // 当前的前缀和
    
    for (let num of nums) {
        preSum += num;
        // 如果map中存在preSum - k，说明存在一个子数组的和为k
        if (map.has(preSum - k)) {
            count += map.get(preSum - k);
        }
        // 更新前缀和出现的次数
        map.set(preSum, (map.get(preSum) || 0) + 1);
    }
    
    return count;
};
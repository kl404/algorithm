/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    const map = new Map();
    let cnt = 0;

    let preSum = 0;
    map.set(preSum, 1);
    for(let i =0;i<nums.length; i++){
        preSum += nums[i];
        

        if(map.has(preSum - k)){
            cnt += map.get(preSum - k);
        }

        map.set(preSum, (map.get(preSum) || 0) + 1);
        
    }

    return cnt;
};
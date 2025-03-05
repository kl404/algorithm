/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const n =  nums.length;
    const map = new Map();
    map.set(0, 1);

    let preSum = 0;
    let cnt = 0;
    for(let i =0;i<n;i++){
        preSum += nums[i];
        
        
        if(map.has(preSum - k)){
            cnt += map.get(preSum - k);
        }
        map.set(preSum, (map.get(preSum) || 0)+1);
       
    }
    return cnt;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map();
    let cnt = 0;
    let curSum = 0;
    map.set(0, 1)
    for(let i = 0; i < nums.length; i++){
        curSum += nums[i];
        if(map.has(k - curSum)){
            cnt += map.get(curSum - k);
        }
            map.set(curSum, map.has(curSum) ? map.get(curSum) + 1 : 1)
        
    }
    return cnt;
};
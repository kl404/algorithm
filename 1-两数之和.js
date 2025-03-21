/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map=new Map();
    const n=nums.length;
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [i,map.get(target-nums[i])];
        }
        map.set(nums[i],i);
    }
    return [];
};
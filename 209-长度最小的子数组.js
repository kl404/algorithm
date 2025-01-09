/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left=0,right=0;
    let window=0;
    let min=Infinity;

    while(right<nums.length){
        window+=nums[right];
        while(window>=target){
            min=Math.min(min,right-left+1);
            window-=nums[left];
            left++;
        }
        right++;
    }
    return min===Infinity?0:min;
};
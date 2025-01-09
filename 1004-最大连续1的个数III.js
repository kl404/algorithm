/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left=0,right=0;
    let window=0;
    let max=0;
    while(right<nums.length){
        if(nums[right]===0){
            window++;
        }
        while(window>k){
            if(nums[left]===0){
                window--;
            }
            left++;
        }
        max=Math.max(max,right-left+1);
        right++;
    }
    return max;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let right=0;
    let window=0,max=0;
    while(right<nums.length){
        if(nums[right]===1){
            window++;
            max=Math.max(max,window);
        }else{
            window=0;
        }
        
        right++;
    }
    return max;
};
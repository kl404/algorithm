/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    const n = nums.length;

    let window_zeros = 0;
    let max = 0;

    for(let right =0;right < n; right++){
        if(nums[right] === 0){
            window_zeros++;
        }

        while(window_zeros > k){
            if(nums[left] === 0){
                window_zeros--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
};
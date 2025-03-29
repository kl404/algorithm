/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Infinity;
    let window_sum = 0;
    let left = 0;


    for(let right = 0; right < nums.length; right++){
        window_sum += nums[i];

        while(window_sum >= target){
            min = Math.min(min, right - left + 1);
            window_sum -= nums[left];
            left++;
        }
    }
    return min;
};
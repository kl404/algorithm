/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const n = nums.length;
    let left = 0;
    let min = Infinity;
    let window_sum = 0;


    for(let right = 0;right<n;right++){
        const cur = nums[right];
        window_sum += cur;

        while(window_sum >= target){
            min = Math.min(min, right - left +1);
            window_sum -= nums[left];
            left++;
        }

    }
    return min===Infinity? 0 : min;
};
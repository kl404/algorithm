/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let min = Infinity;
    let sum = 0;



    for(let right = 0;right < nums.length; right++){
        sum += nums[right];

        while(sum >= target){
            const len = right -left + 1;
            min = Math.min(min, len);

            sum -= nums[left];
            left++;
        }
    }

    return min== Infinity? 0 : min;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let consum = 0;
    let max = 0;

    for(let right = 0; right < nums.length; right++){
      if(nums[right] === 0) consum++;

      
      while(consum > k){
        if(nums[left] === 0) consum--;
        left++;
      }

      max = Math.max(max, right - left + 1);
    }
    return max;
};
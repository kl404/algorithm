/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i = 0;
    let j  =nums.length - 1;

    while(i <= j){
        const mid = Math.floor((i + j) / 2);
        if(nums[i] <= nums[mid] && nums[mid] <= nums[j]){
            return nums[i];
        } else if(nums[i] <= nums[mid]){
            i = mid + 1;
        }else{
            j = mid;
        }
    }
    
};
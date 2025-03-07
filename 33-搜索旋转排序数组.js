/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;

    while(i <= j){
        const mid = Math.floor((i + j) / 2);
        if(nums[mid] === target) return mid;
        else if(nums[i] <= nums[mid]){
            if(nums[i] <= target && target <= nums[mid]){
                j = mid - 1;
            }else{
                i = mid + 1;
            }
        }else{
            if(nums[mid] <= nums[j]){
                if(nums[mid] <= target && target <= nums[]){
                    i = mid + 1;
                }else{
                    j = mid - 1;
                }
            }
        }
    }
    return -1;
};
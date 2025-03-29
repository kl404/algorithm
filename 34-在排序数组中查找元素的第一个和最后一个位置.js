/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const left = searchInsert(nums, target - 0.5);
    const right = searchInsert(nums, target + 0.5) - 1;

    if(left <= right){
        return [left, right];
    }
    else return [-1 ,-1]


};


var searchInsert = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;

    while(i <= j){
        const mid = Math.floor( (i + j) / 2);

        if(nums[mid] === target) return mid;

        if(target < nums[mid]){
            j = mid - 1;
        }
        else i = mid + 1;
    }

    return i;


};
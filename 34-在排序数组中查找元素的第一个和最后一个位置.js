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
    return [-1, -1];
};





var searchInsert = function(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  
  while(i <= j){
      const mid = Math.floor((i + j) / 2);
      if(nums[mid] === target) return mid;
      else if(nums[mid] < target){
          i = mid + 1;
      }
      else{
          j = mid - 1;
      }
  }
  return i;
};
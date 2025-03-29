/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++){
        if(i >= 1 && nums[i] == nums[i - 1]) continue;
        const target = -nums[i];

        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
          const sum = nums[left] + nums[right];
          if(sum == target){
            res.push([nums[i], nums[left], nums[right]]);
          while(left < right && nums[left] == nums[left + 1]){
              left++;
            }
            left++;
            while(left < right && nums[right] === nums[right - 1]){
              right--;
            }
            right--;
          }
          else if(sum < target){
            while(left < right && nums[left] == nums[left + 1]){
              left++;
            }
            left++;
          }else{
            while(left < right && nums[right] === nums[right - 1]){
              right--;
            }
            right--;
          }
        }
    }

    return res;
};
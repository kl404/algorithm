/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return sort(nums);

    function sort(nums){
        if(nums.length <= 1){
            return nums;
          }
          
          const mid = Math.floor(nums.length/2);
      
          const left = sortArray(nums.slice(0, mid));
          const right = sortArray(nums.slice(mid));
      
      
          return merge(left, right);
      
    }    
};

function merge(nums1, nums2){
  let result = [];
  let i = 0;
  let j = 0;

  while(i < nums1.length && j < nums2.length){
    if(nums1[i] <= nums2[j]){
      result.push(nums1[i]);
      i++;
    }else{
      result.push(nums2[j]);
      j++;
    }

  }

  result = result.concat(nums1.slice(i)).concat(nums2.slice(j));

  return result;
} 
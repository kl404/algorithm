/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return mergeSort(nums);
};


function mergeSort(nums){
  if(nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid + 1));
  const right = mergeSort(nums.slice(mid + 1));

  return merge(left, right);

  

}
function merge(nums1, nums2){
  let res = [];

  let i = 0;
  let j = 0;

  while(i < nums1.length && j < nums2.length){
    if(nums1[i] <= nums2[j]){
      res.push(nums1[i]);
      i++;
    }else{
      res.push(nums2[j])
      j++;
    }
  }

  if(i < nums1.length){
    res = res.concat(nums1.slice(i));
  }
  if(j < nums2.length){
    res = res.concat(nums2.slice(j));
  }
  
  return res;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function swap(nums, i, j){
    [nums[i], nums[j]] = [nums[j], nums[i]];
}
function quickSort(nums, left, right) {
    if(right - left <= 0) return;
  let i = left;
  let j = right;

  const pivot = nums[i];
  while (i < j) {
    while (i < j && nums[j] >= pivot) j--;
    while (i < j && nums[i] <= pivot) i++;
    if (i < j) {
      swap(nums, i, j);
    }
  }
  swap(nums, left, i);
  quickSort(nums, left, i - 1);
  quickSort(nums, i + 1, right);
}

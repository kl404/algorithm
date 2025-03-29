function quicksort(nums, left, right){
  if(left >= right) return;


  const pivot = nums[left];
  let i = left;
  let j = right;
  while(i < j){
    while(i < j && nums[j] >= pivot) j--;
    while(i < j && nums[i] <= pivot) i++;
    if(i < j){
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  [nums[left], nums[i]] = [nums[i], nums[left]];

  quicksort(nums, left, i - 1);
  quicksort(nums, i + 1, right);
  

}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;

    function quickSort(nums, left, right){
        if(left >= right) return;
        
        // 随机选择基准值的下标
        const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
        // 将基准值交换到最左边
        [nums[left], nums[randomIndex]] = [nums[randomIndex], nums[left]];
        
        const pivot = nums[left];
        let i = left;
        let j = right;
        
        while(i < j){
            while(i < j && nums[j] >= pivot) j--;
            while(i < j && nums[i] <= pivot) i++;
            if(i < j) [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        [nums[left], nums[i]] = [nums[i], nums[left]];
        
        quickSort(nums, left, i - 1);
        quickSort(nums, i + 1, right);
    }
};
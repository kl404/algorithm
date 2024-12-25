/**
 * @param {number[]} nums 输入的有序数组
 * @param {number} target 要查找的目标值
 * @return {number} 返回目标值在数组中的索引,如果不存在返回-1
 */
var search = function(nums, target) {
    // 初始化左右指针
    let left = 0, right = nums.length - 1;
    
    // 当左指针小于等于右指针时继续查找
    while (left <= right) {
        // 计算中间位置
        const mid = Math.floor((right - left) / 2) + left;
        const num = nums[mid];
        
        // 找到目标值,返回索引
        if (num === target) {
            return mid;
        } 
        // 中间值大于目标值,在左半部分查找
        else if (num > target) {
            right = mid - 1;
        }
        // 中间值小于目标值,在右半部分查找 
        else {
            left = mid + 1;
        }
    }
    
    // 未找到目标值,返回-1
    return -1;
};

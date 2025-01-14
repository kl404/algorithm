/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [binarySearchLeftEdge(nums, target), binarySearchRightEdge(nums, target)];
};



/* 二分查找插入点（存在重复元素） */
function binarySearchInsertion(nums, target) {
    let i = 0,
        j = nums.length - 1; // 初始化双闭区间 [0, n-1]
    while (i <= j) {
        const m = Math.floor(i + (j - i) / 2); // 计算中点索引 m, 使用 Math.floor() 向下取整
        if (nums[m] < target) {
            i = m + 1; // target 在区间 [m+1, j] 中
        } else if (nums[m] > target) {
            j = m - 1; // target 在区间 [i, m-1] 中
        } else {
            j = m - 1; // 首个小于 target 的元素在区间 [i, m-1] 中
        }
    }
    // 返回插入点 i
    return i;
}


/* 二分查找最左一个 target */
function binarySearchLeftEdge(nums, target) {
    // 等价于查找 target 的插入点
    const i = binarySearchInsertion(nums, target);
    // 未找到 target ，返回 -1
    if (i === nums.length || nums[i] !== target) {
        return -1;
    }
    // 找到 target ，返回索引 i
    return i;
}

/* 二分查找最右一个 target */
function binarySearchRightEdge(nums, target) {
    let i=0;
    let j=nums.length-1;
    while(i<=j){
        const m=Math.floor((j-i)/2)+i;
        if(nums[m]<target){
            i=m+1;
        }else if(nums[m]>target){
            j=m-1;
        }else{
            i=m+1;
        }
    }
    if(j===-1 || nums[j]!==target){
        return -1;
    }
    return j;
}
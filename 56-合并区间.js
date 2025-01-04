/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 先按照区间的起始位置进行排序
    intervals.sort((a,b)=>a[0]-b[0])
    
    const merged = [];
    for (const interval of intervals) {
        // 如果结果数组为空,或者当前区间的起始位置 > 结果数组中最后区间的终止位置
        // 则不合并,直接将当前区间加入结果数组
        if (merged.length ===0 || interval[0] >merged[merged.length-1][1]) {
            merged.push(interval);
        } else {
            // 反之将当前区间合并至结果数组的最后区间
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
        }
    }
    
    return merged;
};
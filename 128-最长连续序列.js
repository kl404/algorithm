/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        if(set.has(cur - 1)) continue;
        let len = 1;
        while(set.has(cur + len)){
            len++;
        }
        max = Math.max(max, len);
    }
    return max;
};
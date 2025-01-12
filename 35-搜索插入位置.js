/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i=0;
    let j=nums.length-1;
    while(i<=j){
        const m=Math.floor((j-i)/2)+i;
        if(nums[m]<target){
            i=m+1;
        }else if(nums[m]>target){
            j=m-1;
        }else{
            return m;
        }
    }
    return i;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i=0;
    let j=nums.length-1;


    while(i<=j){
        const m=Math.floor((j-i)/2)+i;

        if(nums[i]<=nums[m] && nums[m]<=nums[j]){
            return nums[i];
        }else if(nums[i]<=nums[m]){
            i=m+1;
        }else if(nums[m]<=nums[j]){
            j=m;
        }
    }
    return -1;
}
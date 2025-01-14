/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i=0;
    let j=nums.length-1;
    

    while(i<=j){
        const m=Math.floor((j-i)/2)+i;

        if(nums[m]===target){
            return m;
        }


        if(nums[i]<=nums[m]){
            if(nums[i]<=target && target<nums[m]){
                j=m-1;
            }else{
                i=m+1;
            }
        }else{
            if(nums[m]<target && target<=nums[j]){
                i=m+1;
            }else{
                j=m-1;
            }
        }
    }
    return -1;
};  
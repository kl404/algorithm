/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ret=[];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length-2;i++){
        const x=nums[i];
        if(x===nums[i-1]) continue;
        if(x+nums[i+1]+nums[i+2]>0) break;
        if(x+nums[nums.length-2]+nums[nums.length-1]<0) continue;
        let left=i+1;
        let right=nums.length-1;
        
        while(left<right){
            const y=nums[left];
            const z=nums[right];
            const sum=x+y+z;
            if(sum>0){
                right--;
            }
            else if(sum<0){
                left++;
            }
            else{
                ret.push([x,y,z]);
                while(left<right && nums[left]===y) left++;
                while(left<right && nums[right]===z) right--;
            }
        }
    }
    return ret;
};
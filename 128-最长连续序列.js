/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set=new Set(nums);
    let max=0;
    for(let num of set){
        if(!set.has(num-1)){
        let strLength=1;
        while(set.has(num+strLength)){
            strLength++;
        }
        max=Math.max(max,strLength);
    
    }

    }
    return max;
};
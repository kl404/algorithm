/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
        const set = new Set(nums);
        let max =0 ;
        for(let num of set){
            if(!set.has(num-1)){
                let currentNum=num;
                let streak=1;
                while(set.has(currentNum+1)){
                    currentNum++;
                    streak++;
                }
                max=Math.max(max,streak);
            }
        }
        return max;
};
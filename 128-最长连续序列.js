/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set=new Set(nums);

    let maxLength=0;

    for(const num of set){
        if(set.has(num-1)) continue;
        let length=1;

        while(set.has(num+length)){
            length++;
        }
        maxLength=Math.max(maxLength,length);
    }
    return maxLength;
};
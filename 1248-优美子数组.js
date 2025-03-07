/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    


    let cnt = 0;
    const map = new Map();
    let preSum = 0;
    map.set(preSum, 1);

    for(let i =0; i<nums.length;i++){
        if(nums[i] % 2 !=0){
            preSum++;
        }

        if(map.has(preSum - k)){
            cnt += map.get(preSum - k);
        }


        map.set(preSum, (map.has(preSum)? map.get(preSum)) + 1)
    }




    return cnt;
};
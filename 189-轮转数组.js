/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const tmp = [...nums];

    const realK = k % nums.length;

    for(let i = 0; i < nums.length; i++){
      nums[(i + k) % k] = tmp[i]
    }
};

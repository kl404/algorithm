/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   const n=nums.length;
   const map=new Map();
   map.set(0,1);
   let count=0;
   let prefixSum=0;
   for(let i=0;i<n;i++){
       prefixSum+=nums[i];
       if(map.has(prefixSum-k)){
           count+=map.get(prefixSum-k);
       }
       map.set(prefixSum,(map.get(prefixSum)||0)+1);
   }
   return count;
};
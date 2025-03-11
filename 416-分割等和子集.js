/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b)=> a + b, 0);
    const target = sum / 2;

    let res = false;
  
    const set = new Set();
    function dfs(depth, curSum){
      if(depth === nums.length) return;
      if(res) return;
      if(curSum === target){
        res = true;
        return;
      }
      const key = `${depth}-${curSum}`;
      if(set.has(key)) return;

      set.add(key);

      if(curSum + nums[depth] <= target){
        dfs(depth + 1, curSum + nums[depth]);
      }
      dfs(depth + 1, curSum);

    }


    dfs(0, 0)
    return res;
};
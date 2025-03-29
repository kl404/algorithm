/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) =>a + b, 0);
  if(sum % 2 != 0) return false;
  const target = sum / 2;
  let res = false;

  const memo = new Set();
  function dfs(depth, sum){
    if(depth == nums.length){
      if(sum === target)  res =  true;
      return;
    }

    if(sum > target) return;
    const key = `${depth}-${sum}`;
    if(memo.has(key)) return;
    memo.add(key);
    
    dfs(depth + 1, sum + nums[depth]);
    dfs(depth + 1, sum);
    

  }



  dfs(0, 0);
  return res;



};
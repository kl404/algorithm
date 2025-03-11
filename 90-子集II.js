/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b); // 先排序，使相同的元素相邻
  const res = [];
  const path = [];

  function dfs(i) {
    if (i === nums.length) {
      res.push([...path]);
      return;
    }

    // 选择当前数字
    const x = nums[i];
    path.push(x);
    dfs(i + 1);
    path.pop();

    // 不选当前数字，同时跳过所有相同的数字
    let j = i + 1;
    while (j < nums.length && nums[j] === x) {
      j++;
    }
    dfs(j);
  }

  dfs(0);
  return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
   

   function dfs(nums){
      if(nums.length === 0) return null; 
      if(nums.length === 1){
         const node = new TreeNode(nums[0]);
         return node;
      }

      const mid = Math.floor(nums.length / 2);
      const node = new TreeNode(nums[mid]);
      node.left = dfs(nums.slice(0, mid));
      node.right = dfs(nums.slice(mid + 1));
      return node;
   }

   return dfs(nums);



};
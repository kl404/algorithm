/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const maxDepth=[0];
    dfs(root,0,maxDepth);
    return maxDepth[0];
};



function dfs(root,depth,maxDepth){
  if(!root) return;
  const curDepth=depth+1;
  maxDepth[0]=Math.max(maxDepth[0],curDepth);
  dfs(root.left,curDepth,maxDepth);
  dfs(root.right,curDepth,maxDepth);
}
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];
  function dfs(root, depth) {
    if (!root) return;
    if (depth === res.length) {
      res.push(root.val);
    }
    depth++;
    dfs(root.right, depth);
    dfs(root.left, depth);
  }
  dfs(root, 0);
  return res;
};

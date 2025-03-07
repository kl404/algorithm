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
var diameterOfBinaryTree = function (root) {
  let max = 0;
  function dfs(node) {
    if (!node) return 0; // 空节点高度为0

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);

    max = Math.max(max, leftHeight + rightHeight); // 计算经过当前节点的最大直径

    return Math.max(leftHeight, rightHeight) + 1; // 返回当前节点的高度
  }

  dfs(root);
  return max;
};

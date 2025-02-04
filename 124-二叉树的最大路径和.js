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
var maxPathSum = function (root) {
  let maxSum = -Infinity; // 全局最大路径和

  // 计算以当前节点为起点的最大路径和（只能选择一条路径）
  const dfs = (node) => {
    if (!node) return 0;

    // 计算左右子树能提供的最大路径和
    // 如果子树路径和为负，则不选择该路径
    const leftMax = Math.max(0, dfs(node.left));
    const rightMax = Math.max(0, dfs(node.right));

    // 更新全局最大路径和（可以同时选择左右路径）
    maxSum = Math.max(maxSum, node.val + leftMax + rightMax);

    // 返回以当前节点为起点的最大路径和（只能选择一条路径）
    return node.val + Math.max(leftMax, rightMax);
  };

  dfs(root);
  return maxSum;
};

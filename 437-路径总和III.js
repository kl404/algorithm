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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0;
    // 总路径数 = 以当前节点为起点的路径 + 不以当前节点为起点的路径(即以左子节点为起点的路径 + 以右子节点为起点的路径)
    return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};

/**
 * 计算以当前节点为起点,和为targetSum的路径数
 * @param {TreeNode} root 当前节点
 * @param {number} targetSum 目标和
 * @return {number} 路径数
 */
function dfs(root, targetSum){
    if(!root) return 0;
    
    // 如果当前节点值等于目标和,说明找到了一条路径
    let count = root.val === targetSum ? 1 : 0;
    // 继续往下找,目标和减去当前节点值
    // 分别递归左右子树,累加路径数
    count += dfs(root.left, targetSum - root.val);
    count += dfs(root.right, targetSum - root.val);
    
    return count;
}
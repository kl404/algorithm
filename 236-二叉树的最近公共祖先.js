/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 获取从根节点到p和q的路径
    const path_p = []; // 存储从根节点到p节点的路径
    const path_q = []; // 存储从根节点到q节点的路径
    dfs(root, path_p, p); // 深度优先搜索找到p节点路径
    dfs(root, path_q, q); // 深度优先搜索找到q节点路径

    let result = null;
    // 找到最后一个相同的节点,即为最近公共祖先
    for(let i = 0; i < path_p.length && i < path_q.length; i++) {
        if(path_p[i] === path_q[i]) {
            result = path_p[i]; // 更新结果为当前公共节点
        }
    }
    return result; // 返回最近公共祖先节点
};

/**
 * 深度优先搜索函数
 * @param {TreeNode} root - 当前节点
 * @param {Array} path - 路径数组
 * @param {TreeNode} target - 目标节点
 * @return {boolean} - 是否找到目标节点
 */
function dfs(root, path, target) {
    if(!root) return false; // 如果节点为空,返回false
    path.push(root); // 将当前节点加入路径
    if(root === target) return true; // 如果找到目标节点,返回true
    // 递归搜索左右子树
    if(dfs(root.left, path, target) || dfs(root.right, path, target)) {
        return true; // 如果在左右子树中找到目标,返回true
    }
    path.pop(); // 未找到目标,回溯,移除当前节点
    return false; // 返回false表示未找到目标
}
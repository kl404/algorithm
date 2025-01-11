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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    // 用于记录上一个遍历到的节点
    let pre = null;
    
    function dfs(root) {
        // 如果当前节点为空,直接返回
        if(!root) return;
        
        // 后序遍历 - 先遍历右子树
        dfs(root.right);
        // 再遍历左子树
        dfs(root.left);
        
        // 将当前节点的右指针指向上一个节点
        root.right = pre;
        // 将左指针置空
        root.left = null;
        // 更新pre为当前节点
        pre = root;
    }
    
    // 开始遍历
    dfs(root);
};
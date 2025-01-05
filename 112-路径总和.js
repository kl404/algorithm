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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return dfs(root,0,targetSum);
};


function dfs(root,state,targetSum){
    if(!root) return false;
    
    state+=root.val;
    if(!root.left && !root.right){
        return state === targetSum;
    }
    return dfs(root.left,state,targetSum) || dfs(root.right,state,targetSum);
}
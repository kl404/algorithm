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
    


    let flag=false;
    function dfs(node,state,target){
        if(!node) return;
        state+=node.val;
        if(!node.left && !node.right && state===target) flag=true;
        dfs(node.left,state,target);
        dfs(node.right,state,target);

    }
    
    dfs(root,0,targetSum);
    return flag;
};
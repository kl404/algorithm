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
    let maxDepth=0;
    dfs(root,0);




    function dfs(root,i){
        if(!root) return;
        
        maxDepth=Math.max(maxDepth,i+1);
        dfs(root.left,i+1);
        dfs(root.right,i+1);
    }
    return maxDepth;
};


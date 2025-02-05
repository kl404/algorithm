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
var maxPathSum = function(root) {
    
    let maxSum=-Infinity;



    function dfs(node){
        if(!node) return 0;
        const left=dfs(node.left);
        const right=dfs(node.right);

        const selfMax=node.val+Math.max(left,0)+Math.max(right,0);
        maxSum=Math.max(maxSum,selfMax);

        const upMax=node.val + Math.max(left,right,0);

        return upMax;
    }

    dfs(root);
    return maxSum;
};
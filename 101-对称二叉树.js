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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    

    let res = true;
    function dfs(left, right){
        if(!left || !right){
            if(left != right) res = false;
            return;
        } 

        if(left.val !== right.val) res = false;

        dfs(left.left, right.right);
        dfs(left.right, right.left);
        
    }

    dfs(root.left, root.right);
    return res;
};
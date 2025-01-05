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
    return dfs(root.left,root.right);
};

function dfs(left,right){
    if(!left && !right) return true;
    if(!left || !right) return false;
    if(left.val !==right.val) return false;

    let res=dfs(left.left,right.right);
    if(!res) return false;
    res=dfs(left.right,right.left);
    if(!res) return false;
    return res;
}
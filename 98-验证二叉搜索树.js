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
var isValidBST = function(root) {
    
    let pre = null;
    let flag = true;

    function dfs(node){
        if(!node) return;

        dfs(node.left);
        if(!pre) pre = node.val;
        else{
            if(pre >= node.val){
                flag = false;
                return;
            }
        }
        pre = node.val;
        dfs(node.right);
    }

    dfs(root);
    return flag;;
    
};
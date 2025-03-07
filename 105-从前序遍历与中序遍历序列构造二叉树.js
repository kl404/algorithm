/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    function dfs(preorder, inorder){
        if(preorder.length === 0) return null;
        const val = preorder[0];
        const mid = inorder.indexOf(val);

        const node = new TreeNode(val);
    
        const in1 = inorder.slice(0, mid);
        const in2 = inorder.slice(mid + 1);
        const pre1 = preorder.slice(1, 1 + mid);
        const pre2 = preorder.sllice(1 + mid);

        node.left = dfs(pre1, in1);
        node.right = dfs(pre2, in2);
        return node;
    }


    return dfs(preorder, inorder);



    
};
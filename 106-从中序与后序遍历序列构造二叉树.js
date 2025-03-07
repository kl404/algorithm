/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    

    function dfs(inorder, postorder){
        if(postorder.length ===0 ) return null;
        const val = postorder[postorder.length - 1];
        const mid = inorder.indexOf(val);
        const node = new TreeNode(val);

        const in1 = inorder.slice(0, mid);
        const in2 = inorder.slice(mid + 1);
        const post1 = postorder.slice(0, mid);
        const post2 = postorder.slice(mid, -1);

        node.left = dfs(in1, post1);
        node.right = dfs(in2, post2);
        return node;

    }


    return dfs(inorder,postorder);
};
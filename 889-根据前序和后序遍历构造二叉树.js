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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    


    function dfs(preorder,postorder){
        if(preorder.length===0) return null; 
        const root=new TreeNode(preorder[0]);

        const mid=postorder.indexOf(preorder[1]);
        const pre1=preorder.slice(1,mid+2);
        const pre2=preorder.slice(mid+2); 
        const post1=postorder.slice(0,mid+1);
        const post2=postorder.slice(mid+1,postorder.length-1);
        
        root.left=dfs(pre1,post1);
        root.right=dfs(pre2,post2);
        return root; 
    }
    return dfs(preorder,postorder);
};
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
    const n=preorder.length;
    if(n===0) return null;

    const leftSize=postorder.indexOf(preorder[1])+1;
    const pre1=preorder.slice(1,1+leftSize);
    const pre2=preorder.slice(1+leftSize,n);
    const post1=postorder.slice(0,leftSize);
    const post2=postorder.slice(leftSize,n-1);



    const left=constructFromPrePost(pre1,post1);
    const right=constructFromPrePost(pre2,post2);
    const root=new TreeNode(postorder[n-1],left,right);
    return root;
};
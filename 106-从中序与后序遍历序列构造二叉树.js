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
    const n=inorder.length;
    if(n===0) return null;

    
    const leftSize=inorder.indexOf(postorder[n-1]);
    const in1=inorder.slice(0,leftSize);
    const in2=inorder.slice(leftSize+1,n);
    const post1=postorder.slice(0,leftSize);
    const post2=postorder.slice(leftSize,n-1);



    const left=buildTree(in1,post1);
    const right=buildTree(in2,post2);
    const root=new TreeNode(postorder[n-1],left,right);
    return root;
};
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
    const n=preorder.length;
    if(n===0) return null;

    
    const leftSize=inorder.indexOf(preorder[0]);
    const in1=inorder.slice(0,leftSize);
    const in2=inorder.slice(leftSize+1,n);
    const pre1=preorder.slice(1,1+leftSize);
    const pre2=preorder.slice(1+leftSize,n);



    const left=buildTree(pre1,in1);
    const right=buildTree(pre2,in2);
    const root=new TreeNode(preorder[0],left,right);
    return root;
};

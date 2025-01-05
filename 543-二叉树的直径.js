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
var diameterOfBinaryTree = function(root) {
   let max=[0];
   dfs(root,max);
   return max[0];

};


function dfs(root,max){
    if(!root) return 0;
    const left=dfs(root.left,max);
    const right=dfs(root.right,max);


    max[0]=Math.max(max[0],left+right);
    return Math.max(left,right)+1;

}



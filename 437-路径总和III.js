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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    


    let count=0;
    const preSum=new Map();
    preSum.set(0,1);

    function dfs(node,state){
        if(!node) return;
        state+=node.val;
        if(preSum.has(state-targetSum)){
            count+=preSum.get(state-targetSum);
        }
        preSum.set(state,(preSum.get(state)||0) +1);
        dfs(node.left,state);
        dfs(node.right,state);
        preSum.set(state,preSum.get(state)-1);
    }
    dfs(root,0);
    return count;
};




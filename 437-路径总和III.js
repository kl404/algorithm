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
    const prefixMap=new Map();
    prefixMap.set(0,1);
    let count=0;


    dfs(root,0);
    function dfs(root,state){
        if(!root) return;
        

        state+=root.val;
        if(prefixMap.has(state-targetSum)){
            count+=prefixMap.get(state-targetSum);
        }
        
        prefixMap.set(state,(prefixMap.get(state) || 0) + 1);

        dfs(root.left,state);
        dfs(root.right,state);

        prefixMap.set(state,prefixMap.get(state)-1);
    }
    return count;
};




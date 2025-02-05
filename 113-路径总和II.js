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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    



    const res=[];
    function dfs(node,state,path,target){
        if(!node) return;
        state+=node.val;
        path.push(node.val);
        if(!node.left && !node.right && state==target){
            res.push([...path]);
        }
        dfs(node.left,state,path,target);
        dfs(node.right,state,path,target);
        path.pop();   
    }
    dfs(root,0,[],targetSum);
    return res;


};
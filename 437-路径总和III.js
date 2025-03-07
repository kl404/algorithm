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
    

    const map = new Map();
    map.set(0, 1);
    let res = 0;


    function dfs(node, sum){
        if(!node) return;
        const preSum = sum + node.val;
        if(map.has(preSum - targetSum)){
            res += map.get(preSum - targetSum);
        }
        
        map.set(preSum, (map.has(preSum) ? map.get(preSum) : 0 ) + 1);
        dfs(node.left, preSum);
        dfs(node.right, preSum);
        map.set(preSum, map.get(preSum) - 1);

    }

    dfs(root, 0);
    return res;


    
};
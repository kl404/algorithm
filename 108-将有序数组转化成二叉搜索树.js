/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return dfs(0, nums.length - 1);

    function dfs(left,right){
        if(left>right) return null;
        const mid =left+Math.floor((right-left)/2);
        const root=new TreeNode(nums[mid]);
        root.left=dfs(left,mid-1);
        root.right=dfs(mid+1,right);
        return root;
    }
};


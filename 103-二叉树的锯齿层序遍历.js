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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const res = [];
    const queue = [root];
    let flag = true;
    while(queue.length){
        const level = [];
        const size = queue.length;
        for(let i = 0; i < size; i++){
            const node = queue.shift();
            if(flag) level.push(node.val);
            else level.unshift(node.val);
            // 添加左右子节点到队列
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(level);
        flag = !flag;
    }
    return res;
};
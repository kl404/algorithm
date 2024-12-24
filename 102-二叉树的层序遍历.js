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
var levelOrder = function(root) {
    // 如果根节点为空,返回空数组
    if(!root) return [];
    // 初始化队列,将根节点入队
    const queue = [root];
    // 存储最终结果的数组
    const result = [];
    
    // 当队列不为空时循环
    while(queue.length) {
        // 存储当前层的节点值
        const level = [];
        // 获取当前层的节点数量
        const levelSize = queue.length;
        
        // 遍历当前层的所有节点
        for(let i = 0; i < levelSize; i++) {
            // 出队一个节点
            const node = queue.shift();
            // 将节点值加入当前层数组
            level.push(node.val);
            
            // 如果有左子节点,将其入队
            if(node.left) queue.push(node.left);
            // 如果有右子节点,将其入队
            if(node.right) queue.push(node.right);
        }
        
        // 将当前层的结果加入最终结果数组
        result.push(level);
    }
    
    // 返回层序遍历结果
    return result;
};
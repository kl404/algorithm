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
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const res = []; // 存储所有节点值

  let depth=0;

  while (queue.length) {
    let num=queue.length;
    const values=[];
    while(num--){
        const node=queue.shift();
        values.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    res.push(values);

    depth++;
  }
  return res;
};

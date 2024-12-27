// 定义二叉树节点
const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 6,
            left: null,
            right: null
        }
    }
};

// 后序遍历函数
function postOrder(root, result = []) {
    if (!root) return;
    
    // 先遍历左子树
    postOrder(root.left, result);
    // 再遍历右子树 
    postOrder(root.right, result);
    // 最后访问根节点
    result.push(root.val);
    
    return result;
}

// 测试
const result = postOrder(root);
console.log("后序遍历结果:", result);
// 预期输出: [4, 5, 2, 6, 3, 1]
// 遍历顺序: 左子树 -> 右子树 -> 根节点

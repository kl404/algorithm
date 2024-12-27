// 二叉树示例:
//      1
//    /   \
//   2     3
//  / \   / \
// 4   6 6   5
//      \
//       6

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
            val: 6,
            left: null,
            right: {
                val: 6,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
};

function pre(root, res, path) {
    if(!root) return;
    
    path.push(root);
    if(root.val === 6) {
        res.push([...path]); // 需要复制path数组,否则会被后续操作修改
    }
    pre(root.left, res, path);
    pre(root.right, res, path);
    
    path.pop();
}

const res = [];
const path = [];
pre(root, res, path);
console.log(res); // 输出包含值为6的节点的路径
// 结果: [
//   [{val:1,...}, {val:2,...}, {val:6,...}],
//   [{val:1,...}, {val:2,...}, {val:6,...}, {val:6,...}],
//   [{val:1,...}, {val:3,...}, {val:6,...}]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const path_p=[];
    const path_q=[];


    function dfs(node,target,path){
        if(!node) return false;
        path.push(node);
        if(node===target) return true;
        if(dfs(node.left,target,path)) return true;
        if(dfs(node.right,target,path)) return true;
        path.pop();
        return false;
    }

    dfs(root,p,path_p);
    dfs(root,q,path_q);

    let res=null;

    for(let i=0;i<path_p.length && i<path_q.length;i++){
        if(path_p[i]===path_q[i]){
            res=path_p[i];
        }
    }
    return res;
};





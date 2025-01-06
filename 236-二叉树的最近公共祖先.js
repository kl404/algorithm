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



    dfs(root,path_p,p);
    dfs(root,path_q,q);

    let result=null;
    for(let i=0;i<path_p.length && i<path_q.length;i++){
        if(path_p[i]===path_q[i]){
            result=path_p[i];
        }
    }
    return result;






    function dfs(root,state,target){
        if(!root) return false;
        state.push(root);
        if(root===target){
            return true;
        }
        if(dfs(root.left,state,target)) return true;
        if(dfs(root.right,state,target)) return true;
        state.pop();
        return false;
    }
};





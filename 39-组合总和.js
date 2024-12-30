/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    dfs([],0,0,res,candidates,target);
    return res;
};




function dfs(state,i,total,res,condidates,target){
    if(total ===target){
        res.push(state.slice());
        return;
    }



    for(let j = i;j<condidates.length;j++){
        if(total + condidates[j] > target){
            continue;
        }
        state.push(condidates[j]);
        dfs(state,j,total + condidates[j],res,condidates,target);
        state.pop();
    }
}
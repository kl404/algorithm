/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res=[];

    function dfs(path,sum,start){
        if(sum===target){
            res.push([...path]);
            return;
        }
        if(sum>target) return;

       for(let i=start;i<candidates.length;i++){
           path.push(candidates[i]);
           sum+=candidates[i];
           dfs(path,sum,i);
           path.pop();
           sum-=candidates[i];
       }
    
    }
    dfs([],0,0);
    return res;
};
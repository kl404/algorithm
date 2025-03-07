/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // 先对数组排序，这样相同的数字会相邻
    candidates.sort((a, b) => a - b);
    const res = [];

    function dfs(state, sum, choiceStart){
        if(sum > target){
            return;
        }
        if(sum === target){
            res.push([...state]);
            return;
        }

        for(let i = choiceStart; i < candidates.length; i++){
            // 关键：跳过同一层的重复数字
            if(i > choiceStart && candidates[i] === candidates[i-1]) continue;
            
            state.push(candidates[i]);
            sum += candidates[i];
            dfs(state, sum, i + 1);  // 注意这里是 i + 1
            state.pop();
            sum -= candidates[i];
        }
    }
    dfs([], 0, 0);
    return res;
};
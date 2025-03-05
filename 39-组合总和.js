    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    var combinationSum = function(candidates, target) {
        

        const n = candidates.length;
        const res = [];
        function dfs(state, sum, start){
            if(sum === target){
                res.push(state.slice());
                return;
            }
            if(sum > target){
                return;
            }

            for(let i = start; i < n; i++){
                state.push(candidates[i]);
                sum += candidates[i];
                dfs(state, sum, i);
                state.pop();
                sum -= candidates[i];
            }
        }
        dfs([], 0, 0);
        return res;
    };
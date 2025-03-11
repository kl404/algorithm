/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];


    function dfs(state, depth){
        if(depth === nums.length){
            res.push([...state]);
            return;
        }

        state.push(nums[depth]);
        dfs(state, depth + 1);
        state.pop();
        dfs(state, depth + 1);

    }

    dfs([], 0);

    return res;
};
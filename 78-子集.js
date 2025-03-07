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
        
        dfs(state, depth + 1);
        state.push(nums[depth]);
        dfs(state, depth++);
        state.pop();
    }

    dfs([], 0);

    
    return res;
};


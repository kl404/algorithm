/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    

    const n = nums.length;
    const res = [];



    function dfs(state, depth){
        if(depth === n){
            res.push(state.slice());
            return;
        }


        dfs(state, depth + 1);
        

        state.push(nums[depth]);
        dfs(state, depth + 1);
        state.pop();


    }   
    dfs([], 0);

    return res;


};
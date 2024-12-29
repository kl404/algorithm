/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res=[];
    dfs([],0,res,nums);
    return res;
};



function dfs(state,i,res,nums){
    if(i===nums.length){
        res.push([...state]);
        return;
    }
    dfs(state,i+1,res,nums);
    state.push(nums[i]);
    dfs(state,i+1,res,nums);
    state.pop();
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res=[];
    dfs([],res,0,nums);
    return res;
};

function dfs(state,res,i,nums){
    if(i === nums.length){
        res.push([...state]);
        return;
    }
    
    // 不选当前数字
    dfs(state,res,i+1,nums);
    
    // 选当前数字
    state.push(nums[i]);
    dfs(state,res,i+1,nums);
    state.pop();
}
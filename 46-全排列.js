/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    const res = [];
    function dfs(state, depth, seleted){
        if(depth === nums.length){
            res.push([...state]);
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(seleted[i]) continue;
            state.push(nums[i]);
            seleted.push(i);
            dfs(state, depth + 1, seleted);
            state.pop();
            seleted.pop();
        }
    }


    dfs([], 0, []);
    return res;
};

const arr = [1,2];
console.log(arr.includes)
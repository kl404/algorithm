/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    


    const res=[];
    const selected=new Array(nums.length).fill(false);
    function dfs(state){
        if(state.length === nums.length){
            res.push(state.slice());
            return;
        }

        for(let i =0;i<nums.length;i++){
            if(!selected[i]){
                selected[i] = true;
                state.push(nums[i]);
                dfs(state);
                state.pop();
                selected[i] = false;
            }
        }


    }
    dfs([]);
    
    return res;
};
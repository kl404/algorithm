/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    


    const res=[];
    const selected=new Array(nums.length).fill(false);

    function dfs(path,depth){
        if(path.length===nums.length){
            res.push([...path]);
            return;
        }

        for(let i=depth;i<nums.length;i++){
            if(selected[i]) continue;
            selected[i]=true;
            path.push(nums[i]);
            dfs(path,selected);
            path.pop();
            selected[i]=false;
        }
    }
    dfs([],selected);
    return res;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function(nums) {
   const state=[];
   const choices=nums;
   const res=[];
   const selected=Array(nums.length).fill(false);

   const backtrack=(state,choices,selected,res)=>{
        if(state.length===nums.length){
            res.push([...state]);
            return;
        }
        choices.forEach((choice,i)=>{
            if(!selected[i]){
                //前进：做出选择，更新状态
                selected[i]=true;
                state.push(choice);
                //递归：进行下一轮选择
                backtrack(state,choices,selected,res);
                //回退：撤销选择，恢复到之前的状态
                selected[i]=false;
                state.pop();
            }
        })
   }
   backtrack(state,choices,selected,res);
   return res;
};


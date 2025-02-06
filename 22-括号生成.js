/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res=[];
  let left=0;
  let right=0;
  
  

  function dfs(state,left,right){
      if(left+right===2*n){
        res.push(state);
        return;
      }

      if(left<right){
        return;
      }

      if(left<n){
        state+='(';
        left++;
        dfs(state,left,right);
        state=state.slice(0,state.length-1);
        left--;
      }
      if(right<n){
        state+=')';
        right++;
        dfs(state,left,right);
        state=state.slice(0,state.length-1);
        right--;
      }
  }
  dfs('',left,right);
  return res;
};
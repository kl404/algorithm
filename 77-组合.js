/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
  const res = [];
  function dfs(state, depth, choiceStart){
    if(depth === k){
      res.push([...state]);
      return;
    }        
    
    
    for(let i = choiceStart; i <= n; i++){
      state.push(i);
      dfs(state, depth + 1, i + 1);
      state.pop();
    }
  }


  dfs([], 0, 1);


  return res;
};
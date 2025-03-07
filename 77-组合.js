/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    

  const res = [];

   function dfs(state, choiceStart){
    if(state.length === k){
      res.push([...state]);
      return;
    }
    for(let i = choiceStart; i <= n; i++){
      state.push(i);
      dfs(state, i + 1);
      state.pop();
    }
   }


   dfs([], 1);

   return res;
};
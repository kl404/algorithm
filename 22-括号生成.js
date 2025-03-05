/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    

    
  const res = [];

  function dfs(state, lNum, rNum){
    if(state.length === n * 2){
        res.push(state);
        return;
    }

    if(lNum < rNum){
      return;
    }

    if(lNum < n && lNum + 1 >=rNum){
       dfs(state + '(', lNum + 1, rNum);
    }
    if(rNum < n && rNum + 1 <= lNum){
      dfs(state + ')', lNum, rNum + 1);
    }

  }

  dfs('', 0, 0);
  return res;
};
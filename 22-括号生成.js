/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    

  const res = [];

    function dfs(state, lNum, rNum){
      if(state.length === n * 2){
        res.push(state.join(''));
        return;
      }

      if(lNum < n && lNum >= rNum){
        state.push('(');
        lNum++;
        dfs(state, lNum, rNum);
        state.pop();
        lNum--;
      }

      if(rNum < n && lNum >= rNum){
        state.push(')');
        rNum++;
        dfs(state, lNum, rNum);
        state.pop();
        rNum--;
      }

    }

    dfs([], 0, 0)
    return res;

  
};
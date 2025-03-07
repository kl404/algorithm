/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

  const n = s.length;
  const res = [];
  function dfs(state, choiceStart){
    if(choiceStart === n){
      res.push([...state]);
      return;
    }

    for(let i = choiceStart;i < n; i++){
      if(isBack(s, choiceStart, i)){
        state.push(s.slice(choiceStart, i + 1));
        dfs(state, i + 1);
        state.pop();
      }
    }
  }

  dfs([], 0);
  return res;
};



function isBack(s, left, right){
  while(left <= right){
    if(s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}


console.log(isBack('aba', 0, 2))
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
 
  const res = [];
  function dfs(state, start){
    if(start == s.length){
      res.push([...state]);
    }

    for(let i = 1; start + i <= s.length; i++){
      if(!isBack(s, start, start + i - 1)) continue;
      state.push(s.slice(start, start + i));
      dfs(state, start + i);
      state.pop();
    }

  }

  dfs([], 0);
  return res;
};


function isBack(s, left, right){
  while(left < right){
    if(s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;

}



/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    

  const res = [];
  function dfs(state,start){
    if(start === s.length){
      res.push([...state]);
      return;
    }

    for(let i=start;i<s.length;i++){
        if(isBack(s,start,i)){
          state.push(s.slice(start,i+1));
          dfs(state,i+1);
          state.pop();
        }
    }
  }
  dfs([],0);
  return res;
};


function isBack(str,left,right){
  while(left<right){
    if(str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
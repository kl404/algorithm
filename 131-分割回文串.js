/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res=[];
    dfs([],0,0,res,s);
    return res;
};



function dfs(state,i,start,res,s){
  if(i===s.length){
    res.push(state.slice());
    return;
  }

  if(i<s.length-1){
    dfs(state,i+1,start,res,s);
  }

  if(isPalindrome(s,start,i)){
    state.push(s.substring(start,i+1));
    dfs(state,i+1,i+1,res,s);
    state.pop();
  }
}




function isPalindrome(s,left,right){
  while(left<right){
    if(s[left]!==s[right]) return false;
    left++;
    right--;
  }
  return true;
}
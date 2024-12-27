//给你一个字符串s，请你将s分割成一些子串，使每个子串都是回文串
//返回s所有可能的分割方案。

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  dfs([], 0, s, res);
  return res;
};

function dfs(state, start, s, res) {
  // 判断新加入的子串是否为回文
  if(state.length > 0) {
    const lastStr = state[state.length - 1];
    if(!isPalindrome(lastStr, 0, lastStr.length - 1)) return;
  }

  if (start === s.length) {
    res.push([...state]);
    return;
  }

  // 从start开始,尝试所有可能的子串
  for (let i = start; i < s.length; i++) {
    state.push(s.substring(start, i + 1));
    dfs(state, i + 1, s, res);
    state.pop();
  }
}

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

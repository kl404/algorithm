/**
 * @param {string} s 输入字符串
 * @return {string} 返回最长的回文子串
 */
var longestPalindrome = function (s) {
  const n = s.length;
  // dp[i][j] 表示 s[i..j] 是否是回文串
  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(false));

  // 所有单个字符都是回文串
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  let start = 0; // 最长回文子串的起始位置
  let maxLen = 1; // 最长回文子串的长度

  // 检查长度为2及以上的子串
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1; // 子串的结束位置

      if (len === 2) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
      }

      // 如果找到回文串且长度更长，更新结果
      if (dp[i][j] && len > maxLen) {
        start = i;
        maxLen = len;
      }
    }
  }

  return s.substring(start, start + maxLen);
};

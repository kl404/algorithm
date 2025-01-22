/**
 * @param {string} s 输入字符串
 * @return {string} 返回最长的回文子串
 */
var longestPalindrome = function (s) {
  // 记录最长回文子串的长度和起始位置
  let resLen = 0;
  let resStart = 0;

  for (let i = 0; i < s.length; i++) {
    // 处理奇数长度的回文串，以当前字符为中心
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // 如果找到更长的回文串，更新结果
      if (right - left + 1 > resLen) {
        resLen = right - left + 1;
        resStart = left;
      }
      left--;
      right++;
    }

    // 处理偶数长度的回文串，以当前字符和下一个字符为中心
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // 如果找到更长的回文串，更新结果
      if (right - left + 1 > resLen) {
        resLen = right - left + 1;
        resStart = left;
      }
      left--;
      right++;
    }
  }

  // 返回最长回文子串
  return s.substring(resStart, resStart + resLen);
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const ans = [];
  const cntP = new Array(26).fill(0); // 统计 p 的每种字母的出现次数
  const cntS = new Array(26).fill(0); // 统计 s 的长为 len(p) 的子串 s' 的每种字母的出现次数
  for (const c of p) {
      cntP[c.charCodeAt() - 'a'.charCodeAt()]++; // 统计 p 的字母
  }
  for (let right = 0; right < s.length; right++) {
      cntS[s[right].charCodeAt() - 'a'.charCodeAt()]++; // 右端点字母进入窗口
      const left = right - p.length + 1;
      if (left < 0) { // 窗口长度不足 len(p)
          continue;
      }
      if (_.isEqual(cntS, cntP)) { // s' 和 p 的每种字母的出现次数都相同
          ans.push(left); // s' 左端点下标加入答案
      }
      cntS[s[left].charCodeAt() - 'a'.charCodeAt()]--; // 左端点字母离开窗口
  }
  return ans;
};
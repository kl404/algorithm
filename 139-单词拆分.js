/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let res = false;
  const set = new Set();
  const dfs = (start) => {
    // 如果已经到达字符串末尾，说明成功找到解
    if (start === s.length) {
      res = true;
      return;
    }
    if (res) {
      return;
    }

    if (set.has(start)) {
      return;
    }
    set.add(start);

    // 尝试每个单词
    for (const word of wordDict) {
      // 如果剩余长度小于单词长度，直接跳过
      if (start + word.length > s.length) {
        continue;
      }

      // 检查从start开始的子串是否匹配当前单词
      if (s.slice(start, start + word.length) === word) {
        dfs(start + word.length);
      }
    }
  };

  dfs(0);
  return res;
};

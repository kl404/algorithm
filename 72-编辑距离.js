/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // 创建 dp 数组，dp[i][j] 表示 word1 的前 i 个字符转换到 word2 的前 j 个字符需要的最少操作数
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // 初始化第一行和第一列
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // word1 的前 i 个字符转换为空字符串需要删除 i 次
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j; // 空字符串转换为 word2 的前 j 个字符需要插入 j 次
  }

  // 填充 dp 数组
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // 如果字符相同，不需要操作
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // 删除操作
          dp[i][j - 1] + 1, // 插入操作
          dp[i - 1][j - 1] + 1 // 替换操作
        );
      }
    }
  }

  return dp[m][n];
};

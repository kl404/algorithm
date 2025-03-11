/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n + 1).fill(0);



  for(let i = 0;i < n;i++){
    dp[i + 1] = i + 1;
    for(let j = 1; i + 1 - j * j >=0; j++){
      dp[i + 1] = Math.min(dp[i + 1], dp[i + 1 - j * j] + 1);
    }
  }

  return dp[n]
};
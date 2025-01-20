/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp=new Array(n+1).fill(0);
    dp[0]=0;
    dp[1]=1;
    for(let i=2;i<=n;i++){
        dp[i]=i;
        for(let j=1;j*j<=i;j++){
            dp[i]=Math.min(dp[i],dp[i-j*j]+1);
        }
    }
    return dp[n];
};
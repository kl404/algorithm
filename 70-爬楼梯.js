/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===1 ||n===2) return n;
    const dp=new Array(n+1).fill(0);
    dp[1]=1;
    dp[2]=2;
    for(let i=3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[n];
};



function dfs(n,memo){
    if(n===1 || n===2) return n;
    if(memo.has(n)) return memo.get(n);
    const res=dfs(n-1,memo)+dfs(n-2,memo);
    memo.set(n,res);
    return res;

}
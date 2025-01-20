/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let n=s.length;
    let dp=new Array(n+1).fill(false);
    dp[0]=true;
    for(let i=1;i<=n;i++){
        for(let j=0;j<wordDict.length;j++){
            if(i>=wordDict[j].length&&s.slice(i-wordDict[j].length,i)===wordDict[j]){
                dp[i]=dp[i]||dp[i-wordDict[j].length];
            }
        }
    }
    return dp[n];
};
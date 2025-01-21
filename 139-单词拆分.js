/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n=s.length;
    const dp=new Array(n+1).fill(false);
    dp[0]=true;

    for(let i=0;i<=n;i++){
        for(let word of wordDict){
            if(dp[i] && (i+word.length)<=n && s.substring(i,i+word.length)===word){
                dp[i+word.length]=dp[i];
            }
        }
    }

    return dp[n];
};
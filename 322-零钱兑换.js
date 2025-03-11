/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(0);

    for(let i = 0 ;i<amount;i++){
        dp[i + 1] = Infinity;
        for(let coin of coins){
            if(i + 1 -coin > 0 ){
                dp[i + 1] = Math.min(dp[i + 1], dp[i + 1 - coin] + 1);
            }
        } 

    }
    
    return dp[amount] === Infinity? -1 : dp[amount];
};
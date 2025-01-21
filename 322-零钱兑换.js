    /**
     * @param {number[]} coins 硬币面值数组
     * @param {number} amount 目标金额
     * @return {number} 最少硬币数,如果无法凑出则返回-1
     */
    var coinChange = function(coins, amount) {
        // dp[i]表示凑出金额i所需的最少硬币数
        const dp=new Array(amount+1).fill(Infinity);
        // 凑出金额0不需要硬币
        dp[0]=0;
        for(let i=0;i<=amount;i++){
            for(let j=0;j<coins.length;j++){
                if(i-coins[j]>=0){
                    dp[i]=Math.min(dp[i],dp[i-coins[j]]+1);
                }
            }
        }

        // 如果目标金额仍是无穷大,说明无法凑出,返回-1
        return dp[amount]===Infinity?-1:dp[amount];
    };
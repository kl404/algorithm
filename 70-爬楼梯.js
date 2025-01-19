/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = new Map();
    return dfs(n, memo);
};

function dfs(n,memo){
    if(n===1 || n===2) return n;
    if(memo.has(n)) return memo.get(n);
    const res=dfs(n-1,memo)+dfs(n-2,memo);
    memo.set(n,res);
    return res;
}
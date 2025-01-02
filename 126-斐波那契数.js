/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const memo=new Map();
    return dfs(n,memo);
};  


function dfs(n,memo){
    if(n===0) return 0;
    if(n===1) return 1;
    if(memo.has(n)) return memo.get(n);
    const res=(dfs(n-1,memo)+dfs(n-2,memo)) % 1000000007;
    memo.set(n,res);
    return res;
}
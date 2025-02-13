/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const dp = new Array(numRows).fill(1).map(()=>new Array(numRows).fill(1));

    for(let i=0;i<numRows;i++){
        for(let j=1;j<i;j++){
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
        }
    }

    const res=[];
    for(let i=0;i<numRows;i++){
        res.push(dp[i].slice(0,i+1));
    }
    return res;
}; 




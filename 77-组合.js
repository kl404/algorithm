/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res=[];
    dfs([],1,res,n,k);
    return res;
};

function dfs(state, i, res, n, k) {
  if (i-1 == k ) {
    res.push([...state]);
    return;
  }
  for (let j = i; j <= n; j++) {
    state.push(j);
    dfs(state, j + 1, res, n, k);
    state.pop();
  }

}

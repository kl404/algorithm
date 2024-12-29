/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  dfs([], 0, res, n, 0, 0);
  return res;
};

function dfs(state, i, res, n, l, r) {
  if (i === n * 2) {
    res.push(state.join(""));
    return;
  }

  if (l < r) {
    return;
  }

  if (l < n) {
    state.push("(");
    dfs(state, i + 1, res, n, l + 1, r);
    state.pop();
  }

  if (r < n) {
    state.push(")");
    dfs(state, i + 1, res, n, l, r + 1);
    state.pop();
  }
}

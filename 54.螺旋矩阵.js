/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    if(m === 0) return [];
    const n = matrix[0].length;
    const res = [];
    const visited = Array(m).fill().map(() => Array(n).fill(false));
    
    const dfs = (i, j, direction) => {
        if(i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
            return;
        }
        
        visited[i][j] = true;
        res.push(matrix[i][j]);
        
        // 按照右、下、左、上的顺序遍历
        if(direction === 0) { // 向右
            if(j + 1 < n && !visited[i][j + 1]) {
                dfs(i, j + 1, 0);
            } else {
                dfs(i + 1, j, 1);
            }
        } else if(direction === 1) { // 向下
            if(i + 1 < m && !visited[i + 1][j]) {
                dfs(i + 1, j, 1);
            } else {
                dfs(i, j - 1, 2);
            }
        } else if(direction === 2) { // 向左
            if(j - 1 >= 0 && !visited[i][j - 1]) {
                dfs(i, j - 1, 2);
            } else {
                dfs(i - 1, j, 3);
            }
        } else { // 向上
            if(i - 1 >= 0 && !visited[i - 1][j]) {
                dfs(i - 1, j, 3);
            } else {
                dfs(i, j + 1, 0);
            }
        }
    }
    
    dfs(0, 0, 0);
    return res;
};
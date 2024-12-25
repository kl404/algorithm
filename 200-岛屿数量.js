/**
 * @param {character[][]} grid 二维字符数组表示的地图
 * @return {number} 返回岛屿的数量
 */
var numIslands = function(grid) {
    // 获取地图的行数和列数
    let m = grid.length, n = grid[0].length;
    // 记录岛屿数量
    let res = 0;
    // 遍历整个地图
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 如果当前位置是陆地('1')
            if (grid[i][j] === '1') {
                // 发现一个新岛屿,计数加1
                res++;
                // 用DFS将与当前陆地连接的所有陆地都标记为已访问
                dfs(grid, i, j);
            }
        }
    }
    return res;
};

/**
 * DFS遍历与当前陆地相连的所有陆地
 * @param {character[][]} grid 地图
 * @param {number} i 当前位置的行坐标
 * @param {number} j 当前位置的列坐标
 */
function dfs(grid, i, j) {
    // 获取地图的行数和列数
    let m = grid.length, n = grid[0].length;
    // 如果越界或者当前位置是水域('0'),则返回
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') return;
    // 将当前陆地标记为已访问
    grid[i][j] = '0';
    // 递归访问上下左右四个相邻位置
    dfs(grid, i + 1, j); // 下
    dfs(grid, i - 1, j); // 上
    dfs(grid, i, j + 1); // 右
    dfs(grid, i, j - 1); // 左
}
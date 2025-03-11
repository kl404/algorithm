/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0) return [];

  const m = matrix.length;
  const n = matrix[0].length;
  const result = [];
  const visited = Array(m)
    .fill()
    .map(() => Array(n).fill(false));

  // 方向数组：右、下、左、上
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const dfs = (row, col, dirIndex) => {
    // 将当前元素加入结果
    result.push(matrix[row][col]);
    visited[row][col] = true;

    // 尝试四个方向
    for (let i = 0; i < 4; i++) {
      // 优先使用当前方向
      const nextDir = (dirIndex + i) % 4;
      const nextRow = row + directions[nextDir][0];
      const nextCol = col + directions[nextDir][1];

      // 检查下一个位置是否有效且未访问
      if (
        nextRow >= 0 &&
        nextRow < m &&
        nextCol >= 0 &&
        nextCol < n &&
        !visited[nextRow][nextCol]
      ) {
        dfs(nextRow, nextCol, nextDir);
        return;
      }
    }
  };

  // 从左上角开始，初始方向向右
  dfs(0, 0, 0);
  return result;
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 创建矩阵副本
  const copy = Array.from(matrix, (row) => [...row]);

  // 遍历原矩阵，找到0的位置，将对应的行和列都设为0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (copy[i][j] === 0) {
        // 将该行置为0
        for (let col = 0; col < n; col++) {
          matrix[i][col] = 0;
        }
        // 将该列置为0
        for (let row = 0; row < m; row++) {
          matrix[row][j] = 0;
        }
      }
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  let row0 = false;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          row0 = true;
        } else {
          matrix[i][0] = 0;
        }
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < rowLength; i++) {
    for (let j = 1; j < colLength; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let i = 0; i < rowLength; i++) {
      matrix[i][0] = 0;
    }
  }
  if (row0) {
    for (let j = 0; j < colLength; j++) {
      matrix[0][j] = 0;
    }
  }
};

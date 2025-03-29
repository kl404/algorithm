/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let row = 0;
    let col = n - 1;

    while(row < m && col >= 0){
        if(matrix[row][col] == target) return true;
        if(matrix[row][col] < target){
            row++;
        }else{
            col--;
        }
    }
    return false;
};

matrix =
[[-5]]
target =
-5;
searchMatrix(matrix, target)
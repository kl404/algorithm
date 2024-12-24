/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = [];
    let m = matrix.length;
    let n = matrix[0].length;
    
    let top = 0, bottom = m - 1, left = 0, right = n - 1;

    while(left <= right && top <= bottom) {
        // 从左到右
        for(let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        // 从上到下
        for(let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        // 从右到左
        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }
        // 从下到上
        if(left <= right) {
            for(let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
        }
    }
    return res;
};
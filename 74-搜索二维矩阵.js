/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let i = 0;
    let j = m * n - 1;

    function value(a){
        const row = Math.floor(a / n);
        const col = a % n;
        return matrix[row][col];
    }
    while(i <= j){
        const mid = Math.floor((i + j) / 2);
        if(value(mid) === target){
            return true;
        }
        else if(value(mid) < target)
        {
            i = mid + 1;
        }
        else{
            j = mid - 1;
        }
    }
    return false;

};      // 72ms  36
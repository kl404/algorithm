/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let i=0;
    let j=matrix[0].length-1;

    while(i<matrix.length&&j>=0){
        let cur=matrix[i][j];
        if(cur<target){
            i++;
        }else if(cur>target){
            j--;
        }else{
            return true;
        }
    }
    return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const row=matrix.length;
    const col=matrix[0].length;
    const total=row*col;
    let left=0;
    let right=total-1;

    while(left<=right){
        const mid=Math.floor((right-left)/2)+left;
        const x=matrix[Math.floor(mid/col)][mid%col];
        if(x<target){
            left=mid+1;
        }else if(x>target){
            right=mid-1;
        }else{
            return true;
        }
    }
    return false;
};


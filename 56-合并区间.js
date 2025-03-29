/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]];
    let resIndex = 0;


    for(let i = 1; i < intervals.length; i++){
      if(intervals[i][0] <= res[resIndex][1]){
        res[resIndex][1] = Math.max(res[resIndex][1], intervals[i][1]);
      }else{
        res.push(intervals[i]);
        resIndex++;
      }
    }
    return res;

};
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a, b)=>{
      return a[0] - b[0]
    });
    const res = [intervals[0]];


    for(let i =1; i < intervals.length;i++){
      if(res[res.length - 1][1] >= intervals[i][0]){
        res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
      }else{
        res.push(intervals[i])
      }
    }




    return res;
};
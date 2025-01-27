/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const n=intervals.length;
    const res=[];

    intervals.sort((a,b)=>a[0]-b[0]);


    let tmp=intervals[0];
    for(let i=0;i<n;i++){
      if(intervals[i][0]<=tmp[1]){
        tmp[1]=Math.max(tmp[1],intervals[i][1]);
      }else{
        res.push(tmp);
        tmp=intervals[i];
      }
    }
    res.push(tmp);
    return res;
};
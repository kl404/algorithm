/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];

  for (let i = 0; i < intervals.length; i++) {
    if (res.length === 0 || intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i]);
    } else {
      res[res.length - 1][1] = Math.max(
        res[res.length - 1][1],
        intervals[i][1]
      );
    }
  }
  return res;
};

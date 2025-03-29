/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let fresh = 0;
  let time = 0;
  let badCnt = 0;
  const queue = [];

  for(let i = 0;i < m;i++){
    for(let j =0;j<n;j++){
      if(grid[i][j] == 1){
        fresh++;
      }
      else if(grid[i][j] == 2){
        queue.push([i, j]);
      }
    }
    }

    function isInGrid(x, y){
      return x >=0 && x < m && y >=0 && y<n;
    }

  const direction = [[1, 0],[-1, 0], [0, 1],[0,-1]]
  if(fresh == 0) return time;
  while(queue.length){
    const levelCnt = queue.length;
    for(let i = 0;i<levelCnt;i++){
      const orange = queue.shift();
      const [x, y] = orange;
      for(let [delx, dely] of direction){
        const newX = x + delx;
        const newY = y + dely;
        if(isInGrid(newX, newY) && grid[newX][newY] == 1){
          grid[newX][newY] = 2;
          badCnt++;
          queue.push([newX,newY]);
        }
      }
    } 
    time++;
  }

if(badCnt !== fresh) return -1;
return time - 1;
  

};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    const queue=[];

    let freshCnt=0;//新鲜橘子数量
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1) freshCnt++;
            if(grid[i][j]===2) queue.push([i,j]);
        }
    }

    let time=0;
    while(freshCnt>0 && queue.length){
        time++;
        let num=queue.length;
        while(num--){
            const [x,y]=queue.shift();
            if(x-1>=0&&grid[x-1][y]===1){
                grid[x-1][y]=2;
                queue.push([x-1,y]);
                freshCnt--;
            }
            if(x+1<m&&grid[x+1][y]===1){
                grid[x+1][y]=2;
                queue.push([x+1,y]);
                freshCnt--;
            }
            if(y-1>=0&&grid[x][y-1]===1){
                grid[x][y-1]=2;
                queue.push([x,y-1]);
                freshCnt--;
            }
            if(y+1<n&&grid[x][y+1]===1){
                grid[x][y+1]=2;
                queue.push([x,y+1]);
                freshCnt--;
            }
        }
    }
    return freshCnt===0?time:-1;
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    const m=grid.length;
    const n=grid[0].length;
    let count=0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1){
                count=0;
                dfs(grid,i,j);
                res=Math.max(res,count);
            }
        }
    }

    
    function dfs(grid,i,j){
        if(!inArea(grid,i,j) || grid[i][j]!==1) return;
        grid[i][j]=2;
        count++;
        dfs(grid,i-1,j);
        dfs(grid,i+1,j);
        dfs(grid,i,j-1);
        dfs(grid,i,j+1);
    }
    return res;
};


function inArea(grid,i,j){
    return i>=0&&i<grid.length&&j>=0&&j<grid[0].length;
}


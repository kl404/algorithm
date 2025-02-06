/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    






    let flag=false;
    function dfs(i,j,depth){
        if(i<0 || i>=board.length || j<0 || j>=board[0].length || board[i][j]!==word[depth]
        ) return;

        if(depth===word.length-1){
            flag=true;
            return;
        }

        const tmp=board[i][j];
        board[i][j]='#';
        dfs(i+1,j,depth+1);
        dfs(i-1,j,depth+1);
        dfs(i,j+1,depth+1);
        dfs(i,j-1,depth+1);
        board[i][j]=tmp;
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            dfs(i,j,0);
        }
    }
    return flag;
};
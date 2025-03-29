/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let res = false;
    const m = board.length;
    const n = board[0].length;

    function dfs(i, j, depth){
        if(depth == word.length + 1){
            res = true;
            return;
        }

        if(inArea(i, j) && board[i][j] == word[depth - 1]){
            const tmp = board[i][j];
            board[i][j] = '#';
            dfs(i + 1, j, depth + 1);
            dfs(i - 1, j, depth + 1);
            dfs(i, j + 1, depth + 1);
            dfs(i, j - 1, depth + 1);
            board[i][j] = tmp;
        }
    }
    function inArea(i , j){
        return i >= 0 && i < m && j >= 0 && j < n; 
    }

    for(let i = 0; i < m; i++){
        for(let j = 0;  j < n; j++){
            dfs(i, j, 1);
        }
    }


    return res;
};
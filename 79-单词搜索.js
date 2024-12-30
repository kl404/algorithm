/**
 * @param {character[][]} board - 输入的二维字符数组
 * @param {string} word - 要搜索的单词
 * @return {boolean} - 返回是否能找到该单词
 */
var exist = function(board, word) {
    // 将单词转为字符数组
    const words = word.split('');
    // 遍历二维数组的每个位置作为起点
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            // 从每个位置开始深度优先搜索
            if(dfs(board, words, i, j, 0)) return true;
        }
    }
    return false;
};

/**
 * 深度优先搜索函数
 * @param {character[][]} board - 二维字符数组
 * @param {string[]} word - 要搜索的单词字符数组
 * @param {number} i - 当前行坐标
 * @param {number} j - 当前列坐标
 * @param {number} k - 当前匹配到单词的位置
 * @return {boolean} - 返回从当前位置是否能匹配到剩余的单词
 */
function dfs(board, word, i, j, k) {
    // 边界条件判断:越界或当前字符不匹配
    if(i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] !== word[k]) return false;
    // 已经匹配到最后一个字符,搜索成功
    if(k === word.length - 1) return true;
    
    // 保存当前字符
    const temp = board[i][j];
    // 标记当前位置已访问
    board[i][j] = '#';
    
    // 向四个方向继续搜索
    const res = dfs(board, word, i + 1, j, k + 1) || // 向下
                dfs(board, word, i - 1, j, k + 1) || // 向上
                dfs(board, word, i, j + 1, k + 1) || // 向右
                dfs(board, word, i, j - 1, k + 1); // 向左
                
    // 恢复当前位置的字符
    board[i][j] = temp;
    return res;
}
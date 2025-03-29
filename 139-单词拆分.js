/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let res = false;

  const memo = new Set();
    function dfs(start){
      if(start === s.length){
        res = true;
        return;
      }
      if(memo.has(start)) return;
      memo.add(start);
      for (const word of wordDict) {
        if(start + word.length > s.length) continue;
        if(s.slice(start, start + word.length) === word){
          dfs(start + word.length);
        }  
      }
      
    }
    dfs(0);

    return res;
};


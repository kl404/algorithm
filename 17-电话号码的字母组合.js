/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length===0) return [];    
    const map={
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz'
    }


    const res=[];


    function dfs(path,depth){
        if(depth===digits.length){
            res.push(path);
            return;
        }
        for(let ch of map[digits[depth]]){
            path+=ch;
            depth++;
            dfs(path,depth);
            path=path.slice(0,path.length-1);
            depth--;
        }
    }
    dfs('',0);
    return res;
};
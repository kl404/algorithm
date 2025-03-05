/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
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

    const n = digits.length;
    const res = [];
    function dfs(state, depth){
        if(depth === n){
            res.push(state);
            return;
        }

        for(let i = 0;i < map[digits[depth]].length; i++){
            const newState = state + map[digits[depth]][i];
            dfs(newState, depth + 1);

        }
    }

    dfs('', 0);
    return res;
};
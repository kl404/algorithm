/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const res=[];
    if(digits.length===0) return res;
    dfs([],0,res,digits);
    return res;
}


function dfs(state,i,res,digits){
    if(state.length === digits.length){
        res.push(state.join(''));
        return;
    }
    const choices=map[digits[i]];
    for(let choice of choices){
        state.push(choice);
        dfs(state,i+1,res,digits);
        state.pop();
    }
}


const map ={
    '2': 'abc',
    '3': 'def', 
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}
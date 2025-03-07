/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
// 字符对应判断
    let pCnt = new Array(26).fill(0);
    let sCnt = new Array(26).fill(0);
    const res = [];

    for(let i = 0;i<p.length;i++){
        pCnt[ p[i].charCodeAt() - 'a'.charCodeAt() ]++;
    }

    for(let right = 0;right<s.length;right++){

        sCnt[ s[right].charCodeAt() - 'a'.charCodeAt() ]++;

        const left = right -p.length + 1;
        if(left < 0){
            continue;
        }
        if(pCnt.toString() === sCnt.toString()){
            res.push(left);
        }


        sCnt[s[left].charCodeAt() - 'a'.charCodeAt()]--;

    }



    return res;

};
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res=[];
    const pCnt=new Array(26).fill(0);
    const sCnt=new Array(26).fill(0);

    for(const ch of p){
        pCnt[ch.charCodeAt()-'a'.charCodeAt()]++;
    }

    let right=0;
    while(right<s.length){ 
        sCnt[s[right].charCodeAt()-'a'.charCodeAt()]++;
        const left=right-p.length+1;
        if(left<0){
            right++;
            continue;
        }
        if(sCnt.every((val,index)=>val===pCnt[index])){
            res.push(left);
        }
        sCnt[s[left].charCodeAt()-'a'.charCodeAt()]--;
        right++;
    }

    return res;
    

};
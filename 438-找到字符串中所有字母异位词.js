/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res=[];
    const countP=new Array(26).fill(0);
    const countS=new Array(26).fill(0);
    for(const char of p){
        countP[char.charCodeAt()-'a'.charCodeAt()]++;
    }


    let right=0;
    let left=0;

    while(right<s.length){
        countS[s[right].charCodeAt()-'a'.charCodeAt()]++;
        left=right-p.length+1;
        if(left<0){
            right++;
            continue;
        }

        if(countP.join('')===countS.join('')){
            res.push(left);
        }
        countS[s[left].charCodeAt()-'a'.charCodeAt()]--;
        right++;
    }

    return res;
};
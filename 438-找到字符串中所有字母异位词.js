/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0;
    const window = new Array(26).fill(0);
    const target = new Array(26).fill(0);
    const res = [];
    for(let i = 0; i < p.length; i++){
        target[p[i].charCodeAt() - 'a'.charCodeAt()]++;
    }


    for(let right = 0; right < s.length; right++){
        window[s[right].charCodeAt() - 'a'.charCodeAt()]++;
        if(right < p.length - 1) continue;

        if(window.toString() === target.toString()){
            res.push(left);
        }

        window[s[left].charCodeAt() - 'a'.charCodeAt()]--;
        left++;
    }
    return res;
};

const s = 'cbaebabacd';
const p = 'abc' 
findAnagrams(s, p);

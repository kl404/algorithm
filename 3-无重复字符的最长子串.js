/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    const map = new Map();
    let max = 0;



    for(let right = 0;right < s.length; right++){
        map.set(s[right], (map.has(s[right]) ? map.get(s[right]) : 0)  + 1);


        while(map.get(s[right]) > 1){
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        const len = right -left + 1;
        max = Math.max(max, len);

    }
    return max;
};
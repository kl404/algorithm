/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    let left = 0;
    const window_map = new Map();
    let max = 0;

    for(let right = 0;right<n; right++){
        window_map.set(s[right], window_map.has(s[right]) ? window_map.get(s[right]) + 1 : 1);


        while(window_map.get(s[right]) > 1){
            window_map.set(s[left], window_map.get(s[left]) -1 )
            left++;
        }


        max = Math.max(max, right-left+1);

    }

    return max;
};
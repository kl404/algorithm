/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let max = 0;
    const window_map ={};


    for(let right = 0; right < s.length; right++){
       const char = s[right];
       window_map[char] = (window_map[char] || 0) + 1;


       while(window_map[char] > 1){
        window_map[s[left]]--;
        left++;
       }

       max = Math.max(right - left + 1, max);
    }

    return max;
};
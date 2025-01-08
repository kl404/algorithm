/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set=new Set();
    let max=0;
    let cur_window=0;


    let left=0,right=0;
    while(right<s.length){
        while(left<right &&set.has(s[right])){
            set.delete(s[left]);
            left++;
            cur_window--;
        }



        cur_window++;
       
        set.add(s[right]);
        max=Math.max(max,cur_window);
        right++;
    }
    return max;
};
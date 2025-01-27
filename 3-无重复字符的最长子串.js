/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=0,right=0;
    const n=s.length;
    const window=new Map();
    let max=0;


    while(right<n){
      const ch = s[right];
      window.set(ch,(window.get(ch)||0)+1);
      right++;

      while(window.get(ch)>1){
        const ch2=s[left];
        window.set(ch2,window.get(ch2)-1);
        left++;
      }
      max=Math.max(max,right-left);
    }
    return max;

};
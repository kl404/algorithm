/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=0,right=0;
    let max=0;
    const window=new Map();
    
    while(right<s.length){
        window.set(s[right],(window.get(s[right])||0)+1);

        while(window.get(s[right])>1){
                window.set(s[left],window.get(s[left])-1);
                left++;
            }
            
        
        max=Math.max(max,right-left+1);
        right++;
    }
    return max;
};
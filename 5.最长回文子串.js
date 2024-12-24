/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let resLen = 0;
    let resStart = 0;

    for(let i=0; i<s.length; i++){
        let left = i;
        let right = i;

        while(left>=0 && right<s.length && s[left]=== s[right]){
            if(right-left+1>resLen){
                resLen = right-left+1;
                resStart = left;
            }
            left--;
            right++;
        }
        left = i;
        right = i+1;
        while(left>=0 && right<s.length && s[left]=== s[right]){
            if(right-left+1>resLen){
                resLen = right-left+1;
                resStart = left;
            }
            left--;
            right++;
        }
    }
    
    return s.substring(resStart, resStart + resLen);
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLength = 0;
    let maxIndex = 0;

    for(let i = 0;i<s.length;i++){
        let left = i;
        let right = i;
        // 奇数
        while(left >= 0 && right < s.length && s[left] === s[right]){
            const len = right - left + 1;
            if(len > maxLength){
                maxIndex = left;
                maxLength = len;
            }

            left--;
            right++;
        }

        // 偶数
        left = i;
        right = i + 1;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            const len = right - left + 1;
            if(len > maxLength){
                maxIndex = left;
                maxLength = len;
            }

            left--;
            right++;
        }

    }
    return s.substring(maxIndex, maxIndex + maxLength);
};
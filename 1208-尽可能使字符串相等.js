/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    const n=s.length;
    const record=[];
    for(let i=0;i<n;i++){
        record.push(Math.abs(s.charCodeAt(i)-t.charCodeAt(i)))
    }


    let window=0,max=0;
    let left=0,right=0;
    while(right<n){
        window+=record[right];
        while(window>maxCost){
            window-=record[left];
            left++;
        }
        max=Math.max(max,right-left+1);
        right++;
    }
    return max;
};

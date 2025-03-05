/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    const n = s.length;
    const costArr = [];
    for(let i = 0;i<n;i++){
        const cost = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
        costArr.push(cost);
    }


    let left = 0;
    let max = 0;
    let window_sum = 0;

    for(let right = 0; right < n; right++){
        const cur =  costArr[right];
        window_sum += cur;


        while(window_sum > maxCost){
            window_sum -= costArr[left];
            left++;
        }

        max = Math.max(max, right - left + 1);
    }
    return max;
};
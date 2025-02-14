/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    const n = s.length;
    const s2t = new Array(n).fill(0);
    for(let i =0;i<n;i++){
        s2t[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }


    let left = 0;
    let max = 0;
    let window_cost = 0;


    for(let right = 0;right < n; right++){
        window_cost += s2t[right];


        while(window_cost > maxCost){
            window_cost -= s2t[left];
            left++;
        }


        max = Math.max(right - left + 1, max);
    }
    return max;
};
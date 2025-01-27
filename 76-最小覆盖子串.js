/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need =new Map();
    const window =new Map();
    for(const ch of t){
        need.set(ch,(need.get(ch)||0)+1);
    }

    let left=0,right=0;
    let valid=0;
    let start=0,len=Infinity;


    while(right<s.length){
        const ch=s[right];
        right++;
        if(need.has(ch)){
            window.set(ch,(window.get(ch)||0) +1);
            if(window.get(ch)===need.get(ch)){
                valid++;
            }
        }


        while(valid===need.size){
            if(right-left<len){
                start=left;
                len=right-left;
            }

            const ch2=s[left];
            left++;
            if(need.has(ch2)){
                if(window.get(ch2)===need.get(ch2)){
                    valid--;
                }
                window.set(ch2,window.get(ch2)-1);
            }
        }
    }

    return len===Infinity?'':s.slice(start,start+len);

};
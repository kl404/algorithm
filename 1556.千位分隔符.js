/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  const str = n.toString();  
  let res = '';
  let cnt = 0;
  for(let i = str.length - 1; i >= 0; i--){
   let prepare = str[i]
    if(cnt % 3 === 0 && cnt != 0){
      prepare = `${prepare}.`;
    }
    res = `${prepare}${res}`;
    cnt++;
  }

  return res;

};



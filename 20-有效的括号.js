/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !==0) return false;


    const stack=[];
    const map=new Map([
      [')','('],
      [']','['],
      ['}','{']
    ]);


    for(const ch of s){
      if(stack.length && stack[stack.length-1]===map.get(ch)){
        stack.pop();
      }else{
        stack.push(ch);
      }
    }
    return !stack.length;
};

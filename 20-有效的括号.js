/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  const stack = [];

  for (const ch of s) {
    if (map.has(ch)) {
      stack.push(ch);      
    }else{
      if(!stack.length || map.get(stack[stack.length-1]) != ch ){
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
};

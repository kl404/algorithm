/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const leftSet = new Set(["(", "[", "{"]);

  for (let ch of s) {
    if (leftSet.has(ch)) {
      stack.push(ch);
    } else {
      const top = stack[stack.length - 1];
      if (map.get(top) !== ch) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length) return false;
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 使用栈来存储之前的数字和字符串
  const stack = [];
  // 当前数字
  let num = 0;
  // 当前字符串
  let str = "";

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      // 处理数字，将连续数字字符转为数值
      num = num * 10 + parseInt(char);
    } else if (char === "[") {
      // 遇到左括号，将当前数字和字符串入栈
      stack.push(num);
      stack.push(str);
      // 重置当前数字和字符串
      num = 0;
      str = "";
    } else if (char === "]") {
      // 遇到右括号，处理栈顶的字符串和数字
      const prevStr = stack.pop(); // 取出之前的字符串
      const prevNum = stack.pop(); // 取出重复次数
      // 将当前字符串重复prevNum次，并与之前的字符串拼接
      str = prevStr + str.repeat(prevNum);
    } else {
      // 处理普通字符
      str += char;
    }
  }
  return str;
};

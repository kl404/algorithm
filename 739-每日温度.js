/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  // 初始化结果数组，默认值为0（表示之后没有更高的温度）
  const res = new Array(n).fill(0);
  // 使用栈来存储温度的下标
  const stack = [];

  for (let i = 0; i < n; i++) {
    // 当栈不为空且当前温度大于栈顶温度时，可以更新结果
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prev = stack.pop();
      // 计算等待天数：当前下标减去之前的下标
      res[prev] = i - prev;
    }
    // 将当前温度的下标入栈
    stack.push(i);
  }
  return res;
};

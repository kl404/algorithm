/**
 * @param {number} n 输入的数字
 * @return {string} 返回添加了千位分隔符的字符串
 */
var thousandSeparator = function(n) {
  // 将数字转换为字符串
  let str = n.toString();
  // 存储最终结果的字符串
  let result = '';
  // 计数器,用于记录当前已处理的位数
  let count = 0;
  
  // 从字符串末尾开始向前遍历
  for(let i = str.length - 1; i >= 0; i--) {
    // 将当前数字添加到结果字符串的开头
    result = str[i] + result;
    // 已处理位数加1
    count++;
    
    // 当已处理3位数字且不是第一位时,添加分隔符
    if(count === 3 && i > 0) {
      result = '.' + result;
      // 重置计数器
      count = 0;
    }
  }
  
  return result;
};

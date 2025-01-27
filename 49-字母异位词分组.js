/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    // 创建一个长度为26的数组来统计字符出现次数
    const count = new Array(26).fill(0);
    // 统计每个字符出现的次数
    for (const char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    // 使用计数数组作为key，用#分隔每个数字
    const key = count.join("#");

    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  return Array.from(map.values());
};

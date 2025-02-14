/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  if (s.length < p.length) return result;

  // 创建两个数组，记录字符出现次数
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);

  // 统计p中字符出现次数
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
  }

  // 滑动窗口，right 是右指针
  for (let right = 0; right < s.length; right++) {
    // 添加右指针指向的新字符
    sCount[s.charCodeAt(right) - 97]++;

    // left 是左指针，当窗口大小超过p的长度时，移除左指针指向的字符
    let left = right - p.length;
    if (left >= 0) {
      sCount[s.charCodeAt(left) - 97]--;
    }

    // 当窗口大小等于p的长度时，比较是否是异位词
    if (right >= p.length - 1 && sCount.toString() === pCount.toString()) {
      result.push(right - p.length + 1);
    }
  }

  return result;
};

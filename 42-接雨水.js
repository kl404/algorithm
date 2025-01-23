/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 如果数组长度小于3，无法接水
  if (height.length < 3) return 0;

  let left = 0; // 左指针
  let right = height.length - 1; // 右指针
  let leftMax = 0; // 左边最高的柱子
  let rightMax = 0; // 右边最高的柱子
  let water = 0; // 总接水量

  // 使用双指针法，从两边向中间移动
  while (left < right) {
    // 更新左右两边的最大高度
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    // 如果左边的最大高度较小，计算左边位置能接的水
    if (leftMax < rightMax) {
      water += leftMax - height[left];
      left++;
    }
    // 如果右边的最大高度较小，计算右边位置能接的水
    else {
      water += rightMax - height[right];
      right--;
    }
  }

  return water;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let left = 0;
     let right = height.length;
    
     let max = 0;
     while(left < right){
        if(height[left] <= height[right]){
            const area = (right - left) * height[left];
            max = Math.max(max, area);
            left++;
        }else{
            const area = (right - left) * height[right];
            max = Math.max(max, area);
            right--;
        }
     }

     return max;

};
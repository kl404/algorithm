/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const arr1 = version1.split('.')
    const arr2 = version2.split('.')

    for(let i=0;i<arr1.length || i<arr2.length;i++){
        const num1 = Number(arr1[i]) || 0
        const num2 = Number(arr2[i]) || 0
        if(num1>num2){  
            return 1
        }else if(num1<num2){
      return -1;
    }
  }
  return 0;
};

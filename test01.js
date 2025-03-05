
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
    input += data;
});
process.stdin.on('end', () => {
    let inputArray = input.split('\n');
    /**
     * 待实现函数，在此函数中填入答题代码
     * doFunc()
     */
    function doFunc(){
        let total = inputArray.reduce((sum, word)=>{
            return sum + word.length;
        }, 0);
        let average = total / inputArray.length;
       
        console.log(average.toFixed(2)) ;
    }
    doFunc()
    process.exit();
});

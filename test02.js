const input = 'who love solo'
let inputArray = input.split('\n');
console.log(inputArray)
function doFunc(){

    let myInput = inputArray[0].split(' ');

    let total = myInput.reduce((sum, word)=>{
        return sum + word.length;
    }, 0);
    let average = total / myInput.length;
   
    console.log(average.toFixed(2)) ;
}
// doFunc()
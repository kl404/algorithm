function add(a, b) {
    console.log('在add函数中');
    return a + b;
}

function calculate() {
    console.log('在calculate函数中');
    let result = add(1, 2);
    return result;
}

function main() {
    console.log('在main函数中');
    calculate();
}

main();
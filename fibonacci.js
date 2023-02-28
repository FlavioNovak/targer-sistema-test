function recursiveFibonacci(number) {
    return number <= 1
        ? number
        : recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
}

function squareFibonacci(number) {
    let a = 0, b = 1, c = number;

    for(let i = 2; i <= number; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}

console.log('Exercise: 2');
console.log(recursiveFibonacci(8))
console.log(squareFibonacci(8))
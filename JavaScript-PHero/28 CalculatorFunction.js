function add(num1, num2) {
    return num1 + num2;
}
function substract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        let result = add(a, b);
        return result;
    } else if (operation === 'substract') {
        let result = substract(a, b);
        return result;
    } else if (operation === 'multiply') {
        let result = multiply(a, b);
        return result;
    } else if (operation === 'divide') {
        let result = divide(a, b);
        return result;
    } else {
        return 'Invalid operation';
    }
}

let result = calculator(10, 5, 'divide');
console.log(result);
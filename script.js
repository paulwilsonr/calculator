let displayValue = '';
let values = [];
let isThisFirstNumber = true;


function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function fillDisplay() {
    let display = document.getElementById('display');
    display.textContent= displayValue;
}

function operate(arr) {
    switch(arr[1]) {
    case '+':
        return add(arr[0], arr[2]);
        break;
    case '-':
        return subtract(arr[0], arr[2]);
        break;
    case '*':
        return multiply(arr[0], arr[2]);
        break;
    case '/':
        return add(arr[0], arr[2]);
        break;
    default:
        console.log("oopsie woopsie")
    };
};

function changeDisplay(x) {
    displayValue = displayValue + x;
    fillDisplay();
}

function clear() {
    displayValue = '';
    fillDisplay();
    isThisFirstNumber = true;
}

function findSolution(opperator) {
    if (isThisFirstNumber) {
        values[0] = Number(displayValue);
        values[1] = opperator;
        displayValue = '';
        isThisFirstNumber = false;
    } else if (opperator == 'equals') {
        values[2] = Number(displayValue);
        displayValue = operate(values);
        fillDisplay();
        values[0] = Number(displayValue);
        values[2] = 0;
        displayValue = '';
    } else {
        values[2] = Number(displayValue);
        displayValue = operate(values);
        fillDisplay();
        values[0] = displayValue;
        values[1] = opperator;
        values[2] = 0;
        displayValue = '';
        
    }
}

document.getElementById('clear').addEventListener('click', clear);
document.getElementById('zero').addEventListener('click', function() {changeDisplay('0')});
document.getElementById('one').addEventListener('click', function() {changeDisplay('1')});
document.getElementById('two').addEventListener('click', function() {changeDisplay('2')});
document.getElementById('three').addEventListener('click', function() {changeDisplay('3')});
document.getElementById('four').addEventListener('click', function() {changeDisplay('4')});
document.getElementById('five').addEventListener('click', function() {changeDisplay('5')});
document.getElementById('six').addEventListener('click', function() {changeDisplay('6')});
document.getElementById('seven').addEventListener('click', function() {changeDisplay('7')});
document.getElementById('eight').addEventListener('click', function() {changeDisplay('8')});
document.getElementById('nine').addEventListener('click', function() {changeDisplay('9')});
document.getElementById('add').addEventListener('click', function() {findSolution('+')});
document.getElementById('subtract').addEventListener('click', function() {findSolution('-')});
document.getElementById('multiply').addEventListener('click', function() {findSolution('*')});
document.getElementById('divide').addEventListener('click', function() {findSolution('/')});
document.getElementById('decimal').addEventListener('click', function() {findSolution('.')});
document.getElementById('equals').addEventListener('click', function() {findSolution('equals')});

fillDisplay();

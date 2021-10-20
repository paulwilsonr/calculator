let displayValue = '';
let values = ['', '', ''];
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
    case 'add':
        return add(arr[0], arr[2]);
        break;
    case 'subtract':
        return subtract(arr[0], arr[2]);
        break;
    case 'multiply':
        return multiply(arr[0], arr[2]);
        break;
    case 'divide':
        return divide(arr[0], arr[2]);
        break;
    default:
        console.log("oopsie woopsie");
        clear();
        break;
    };
};

function changeDisplay(x) {
    displayValue = displayValue + x;
    fillDisplay();
}

function clear() {
    displayValue = '';
    fillDisplay();
    values = ['', '', ''];
}

function backspace () {
    displayValue = displayValue.slice(0, -1);
    fillDisplay();
}

function findSolution(operator) {
    if (values[0] == '') {
        values[0] = Number(displayValue);
        values[1] = operator;
        displayValue = '';
    } else if (operator == 'equals') {
        values[2] = Number(displayValue);
        displayValue = operate(values);
        fillDisplay();
        values[0] = Number(displayValue);
        values[2] = '';
        values[1] = '';
        displayValue = '';
    } else if (displayValue == ''){
        values[1] = operator;
    }else {
        values[2] = Number(displayValue);
        displayValue = operate(values);
        fillDisplay();
        values[0] = displayValue;
        values[1] = operator;
        values[2] = '';
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
document.getElementById('add').addEventListener('click', function() {findSolution('add')});
document.getElementById('subtract').addEventListener('click', function() {findSolution('subtract')});
document.getElementById('multiply').addEventListener('click', function() {findSolution('multiply')});
document.getElementById('divide').addEventListener('click', function() {findSolution('divide')});
document.getElementById('decimal').addEventListener('click', function() {changeDisplay('.')});
document.getElementById('equals').addEventListener('click', function() {findSolution('equals')});
document.getElementById('backspace').addEventListener('click', backspace);

fillDisplay();
